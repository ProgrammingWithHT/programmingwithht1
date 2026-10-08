package com.ml.quaterion.facenetdetection

import android.Manifest
import android.app.Activity
import android.content.Intent
import android.content.pm.PackageManager
import android.os.Bundle
import android.util.Log
import android.widget.Button
import android.widget.EditText
import android.widget.ImageView
import android.widget.Toast
import androidx.activity.result.contract.ActivityResultContracts
import androidx.appcompat.app.AlertDialog
import androidx.appcompat.app.AppCompatActivity
import androidx.camera.core.CameraSelector
import androidx.camera.core.ImageCapture
import androidx.camera.core.ImageCaptureException
import androidx.camera.core.Preview
import androidx.camera.lifecycle.ProcessCameraProvider
import androidx.camera.view.PreviewView
import androidx.core.app.ActivityCompat
import androidx.core.content.ContextCompat
import androidx.documentfile.provider.DocumentFile
import androidx.lifecycle.LifecycleOwner
import com.google.common.util.concurrent.ListenableFuture
import java.io.File

class AddActivity : AppCompatActivity() {

    private lateinit var imageCapture: ImageCapture
    private lateinit var currentImageFile: File
    private lateinit var filename: EditText
    private lateinit var captureButton: Button
    private lateinit var cameraProviderFuture: ListenableFuture<ProcessCameraProvider>
    private var cameraFacing = CameraSelector.LENS_FACING_BACK
    private lateinit var imageView: ImageView

    private var cameraProvider: ProcessCameraProvider? = null

    companion object {
        private const val TAG = "CameraXExample"
        private const val REQUEST_CODE_PICK_DIRECTORY = 123
    }

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_add)

        imageCapture = ImageCapture.Builder().build()
        filename = findViewById(R.id.filename)

        if (ActivityCompat.checkSelfPermission(this, Manifest.permission.CAMERA) != PackageManager.PERMISSION_GRANTED) {
            requestCameraPermission()
        } else {
            startCamera()
        }

        captureButton = findViewById(R.id.captureButton)
        captureButton.setOnClickListener {
            if (filename.text.toString().trim().isEmpty()) {
                Toast.makeText(this, "Please enter student Roll no", Toast.LENGTH_SHORT).show()
            } else {
                takePhoto()
            }
        }

        imageView = findViewById(R.id.imageView)
        imageView.setOnClickListener {
            toggleCamera()
        }
    }

    private fun toggleCamera() {
        cameraFacing = if (cameraFacing == CameraSelector.LENS_FACING_BACK) {
            CameraSelector.LENS_FACING_FRONT
        } else {
            CameraSelector.LENS_FACING_BACK
        }
        startCamera()
    }

    private fun requestCameraPermission() {
        cameraPermissionLauncher.launch(Manifest.permission.CAMERA)
    }

    private val cameraPermissionLauncher = registerForActivityResult(ActivityResultContracts.RequestPermission()) { isGranted ->
        if (isGranted) {
            startCamera()
        } else {
            val alertDialog = AlertDialog.Builder(this).apply {
                setTitle("Camera Permission")
                setMessage("The app couldn't function without the camera permission.")
                setCancelable(false)
                setPositiveButton("ALLOW") { dialog, which ->
                    dialog.dismiss()
                    requestCameraPermission()
                }
                setNegativeButton("CLOSE") { dialog, which ->
                    dialog.dismiss()
                    finish()
                }
                create()
            }
            alertDialog.show()
        }
    }

    private fun startCamera() {
        cameraProviderFuture = ProcessCameraProvider.getInstance(this)
        cameraProviderFuture.addListener({
            cameraProvider = cameraProviderFuture.get()
            bindPreview()
        }, ContextCompat.getMainExecutor(this))
    }

    private fun bindPreview() {
        cameraProvider?.unbindAll()
        val preview = Preview.Builder().build()
        val cameraSelector = CameraSelector.Builder()
            .requireLensFacing(cameraFacing)
            .build()
        val previewView = findViewById<PreviewView>(R.id.previewView)
        preview.setSurfaceProvider(previewView.surfaceProvider)
        cameraProvider?.bindToLifecycle(this as LifecycleOwner, cameraSelector, preview, imageCapture)
    }

    private fun takePhoto() {
        currentImageFile = File(externalMediaDirs.first(), "${System.currentTimeMillis()}.jpg")
        val outputOptions = ImageCapture.OutputFileOptions.Builder(currentImageFile).build()

        imageCapture.takePicture(
            outputOptions, ContextCompat.getMainExecutor(this), object : ImageCapture.OnImageSavedCallback {
                override fun onImageSaved(outputFileResults: ImageCapture.OutputFileResults) {
                    saveImageToInternalStorage(currentImageFile)
                }

                override fun onError(exception: ImageCaptureException) {
                    Log.e(TAG, "Image capture failed: ${exception.message}", exception)
                }
            }
        )
    }

    private fun saveImageToInternalStorage(imageFile: File) {
        val intent = Intent(Intent.ACTION_OPEN_DOCUMENT_TREE)
        startActivityForResult(intent, REQUEST_CODE_PICK_DIRECTORY)
    }

    override fun onActivityResult(requestCode: Int, resultCode: Int, data: Intent?) {
        super.onActivityResult(requestCode, resultCode, data)
        if (requestCode == REQUEST_CODE_PICK_DIRECTORY && resultCode == Activity.RESULT_OK) {
            data?.data?.also { treeUri ->
                contentResolver.takePersistableUriPermission(
                    treeUri,
                    Intent.FLAG_GRANT_WRITE_URI_PERMISSION or Intent.FLAG_GRANT_READ_URI_PERMISSION
                )

                val documentFile = DocumentFile.fromTreeUri(this, treeUri)
                val rollNumber = filename.text.toString().trim()

                // Check if the subfolder with the roll number exists
                var subfolder = documentFile?.findFile(rollNumber)
                if (subfolder == null) {
                    // Create a subfolder with the roll number if it doesn't exist
                    subfolder = documentFile?.createDirectory(rollNumber)
                }

                if (subfolder != null) {
                    val imageFileName = currentImageFile.name
                    subfolder.createFile("image/jpeg", imageFileName)?.let { outputFile ->
                        val outputStream = contentResolver.openOutputStream(outputFile.uri)
                        outputStream?.use { output ->
                            currentImageFile.inputStream().use { input ->
                                input.copyTo(output)
                            }
                        }
                    }
                }
                filename.setText("")
            }
        }
    }
}