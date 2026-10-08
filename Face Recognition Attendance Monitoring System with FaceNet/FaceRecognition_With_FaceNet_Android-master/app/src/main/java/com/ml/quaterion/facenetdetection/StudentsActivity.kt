package com.ml.quaterion.facenetdetection

import android.app.AlertDialog
import android.app.Activity
import android.content.Intent
import android.net.Uri
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.Button
import android.widget.ImageView
import android.widget.TextView
import android.widget.Toast
import androidx.documentfile.provider.DocumentFile
import androidx.recyclerview.widget.LinearLayoutManager
import androidx.recyclerview.widget.RecyclerView
import com.bumptech.glide.Glide

class StudentsActivity : AppCompatActivity() {

    private lateinit var recyclerView: RecyclerView
    private lateinit var locationTextView: TextView
    private lateinit var folderListAdapter: FolderListAdapter

    private var selectedFolderUri: Uri? = null

    private val PICK_FOLDER_REQUEST_CODE = 1001

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_students)

        recyclerView = findViewById(R.id.recyclerView)
        locationTextView = findViewById(R.id.locationTextView)
        recyclerView.layoutManager = LinearLayoutManager(this)
        folderListAdapter = FolderListAdapter()
        recyclerView.adapter = folderListAdapter

        val buttonAdd = findViewById<Button>(R.id.btnAdd)
        buttonAdd.setOnClickListener {
            val intent = Intent(this, AddActivity::class.java)
            intent.putExtra("folderUri", selectedFolderUri.toString())
            startActivity(intent)
        }

        val buttonRemove = findViewById<Button>(R.id.buttonRemove)
        buttonRemove.setOnClickListener {
            confirmAndRemoveSelectedStudent()
        }
    }

    private fun confirmAndRemoveSelectedStudent() {
        val selectedFolder = folderListAdapter.getSelectedFolder()
        if (selectedFolder != null) {
            val dialogBuilder = AlertDialog.Builder(this)
            dialogBuilder.setMessage("Are you sure you want to delete ${selectedFolder.name}?")
                .setCancelable(false)
                .setPositiveButton("Yes") { dialog, id ->
                    removeSelectedStudent(selectedFolder)
                }
                .setNegativeButton("Cancel") { dialog, id ->
                    dialog.cancel()
                }
            val alert = dialogBuilder.create()
            alert.setTitle("Delete Student")
            alert.show()
        } else {
            Toast.makeText(this, "Please select a student to remove", Toast.LENGTH_SHORT).show()
        }
    }

    private fun removeSelectedStudent(selectedFolder: FolderItem) {
        val folderUri = Uri.parse(selectedFolder.uri) // Convert string URI to Uri object
        val rootFolder = DocumentFile.fromTreeUri(this, folderUri)
        if (rootFolder != null && rootFolder.isDirectory) {
            deleteFolder(rootFolder)
            folderListAdapter.removeStudent(folderListAdapter.selectedStudentIndex)
            // After deletion, update your UI or perform any other necessary actions
            Toast.makeText(this, "Folder deleted successfully", Toast.LENGTH_SHORT).show()
        } else {
            Toast.makeText(this, "Failed to delete folder", Toast.LENGTH_SHORT).show()
        }
    }

    private fun deleteFolder(folder: DocumentFile) {
        // Delete all files inside the folder
        folder.listFiles().forEach { file ->
            file.delete()
        }
        // Delete the folder itself
        folder.delete()
    }

    fun browseFolder2(view: android.view.View) {
        val intent = Intent(Intent.ACTION_OPEN_DOCUMENT_TREE)
        startActivityForResult(intent, PICK_FOLDER_REQUEST_CODE)
    }

    override fun onActivityResult(requestCode: Int, resultCode: Int, data: Intent?) {
        super.onActivityResult(requestCode, resultCode, data)
        if (requestCode == PICK_FOLDER_REQUEST_CODE && resultCode == Activity.RESULT_OK) {
            val folderUri = data?.data
            if (folderUri != null) {
                selectedFolderUri = folderUri

                var folderPath = folderUri.path ?: "Unknown"
                folderPath = folderPath.replace("/tree/primary:", "Android: ")
                locationTextView.text = "$folderPath"

                val rootFolder = DocumentFile.fromTreeUri(this, folderUri)
                if (rootFolder != null && rootFolder.isDirectory) {
                    val folderList = mutableListOf<FolderItem>()
                    listFolders(rootFolder, folderList)
                    folderListAdapter.setData(folderList)
                }
            }
        }
    }

    private fun listFolders(folder: DocumentFile, folderList: MutableList<FolderItem>) {
        val subFolders = folder.listFiles()
        subFolders.forEach { file ->
            if (file.isDirectory) {
                val folderName = file.name ?: "Unknown Folder"
                val imageUris = getImageUris(file)
                folderList.add(FolderItem(folderName, imageUris.take(5), file.uri.toString(), imageUris))
            }
        }
    }

    private fun getImageUris(folder: DocumentFile): List<String> {
        val imageUris = mutableListOf<String>()
        val files = folder.listFiles()
        files.forEach { file ->
            if (file.isFile && file.name?.endsWith(".jpg", true) == true) {
                imageUris.add(file.uri.toString())
            }
        }
        return imageUris
    }
}

class FolderItem(val name: String, val imageUris: List<String>, val uri: String, val allImageUris: List<String>)

class FolderListAdapter : RecyclerView.Adapter<FolderListAdapter.ViewHolder>() {

    private var folderList = listOf<FolderItem>()
    var selectedStudentIndex = -1
        private set

    fun setData(data: List<FolderItem>) {
        folderList = data
        notifyDataSetChanged()
    }

    override fun onCreateViewHolder(parent: ViewGroup, viewType: Int): ViewHolder {
        val view = LayoutInflater.from(parent.context).inflate(R.layout.item_folder, parent, false)
        return ViewHolder(view)
    }

    override fun onBindViewHolder(holder: ViewHolder, position: Int) {
        val folderItem = folderList[position]
        holder.bind(folderItem)
        holder.itemView.setOnClickListener {
            setSelectedStudent(position)
        }
        // Highlight the selected student
        holder.itemView.isActivated = selectedStudentIndex == position
    }

    override fun getItemCount(): Int {
        return folderList.size
    }

    class ViewHolder(itemView: View) : RecyclerView.ViewHolder(itemView) {
        private val studentImageView: ImageView = itemView.findViewById(R.id.studentImageView)
        private val studentNameTextView: TextView = itemView.findViewById(R.id.studentNameTextView)
        private val studentRollNumberTextView: TextView = itemView.findViewById(R.id.studentRollNumberTextView)

        fun bind(folderItem: FolderItem) {
            // Load and display student image
            Glide.with(itemView.context)
                .load(Uri.parse(folderItem.imageUris.firstOrNull())) // Load the first image URI if available
                .centerCrop()
                .into(studentImageView)

            // Set student name and roll number
            studentNameTextView.text = folderItem.name
            // Here you should set the roll number if you have it available in your FolderItem
            // studentRollNumberTextView.text = "Roll Number: ${folderItem.rollNumber}"
            // For now, let's leave it blank
            studentRollNumberTextView.text = "Roll Number: "
        }
    }

    fun getSelectedFolder(): FolderItem? {
        return if (selectedStudentIndex != -1 && selectedStudentIndex < folderList.size) {
            folderList[selectedStudentIndex]
        } else {
            null
        }
    }

    fun setSelectedStudent(index: Int) {
        selectedStudentIndex = index
        notifyDataSetChanged()
    }

    fun removeStudent(index: Int) {
        if (index >= 0 && index < folderList.size) {
            folderList = folderList.filterIndexed { idx, _ -> idx != index }
            selectedStudentIndex = -1
            notifyItemRemoved(index)
            notifyItemRangeChanged(index, folderList.size)
        }
    }
}
