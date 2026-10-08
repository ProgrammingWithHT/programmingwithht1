package com.ml.quaterion.facenetdetection

import android.content.Intent
import android.os.Bundle
import android.widget.Button
import android.widget.EditText
import androidx.appcompat.app.AppCompatActivity
import androidx.recyclerview.widget.LinearLayoutManager
import androidx.recyclerview.widget.RecyclerView
import java.io.Serializable

class SubmitActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_submit)

        // Retrieve attendance data from intent or any other source
        val attendanceData = intent.getSerializableExtra("attendanceData") as? Map<String, Boolean>
        System.out.println(attendanceData)

        // Set up RecyclerView if attendance data is not null
        attendanceData?.let { setupRecyclerView(it) }

        val usernameEditText = findViewById<EditText>(R.id.username)
        val passwordEditText = findViewById<EditText>(R.id.password)
        val loginButton = findViewById<Button>(R.id.loginButton)

        loginButton.setOnClickListener {

            val username = usernameEditText.text.toString().trim()
            val password = passwordEditText.text.toString().trim()

            if (username.isNotEmpty() && password.isNotEmpty()) {
                val intent = Intent(this, websiteView::class.java).apply {
                    putExtra("USERNAME", username)
                    putExtra("PASSWORD", password)
                    putExtra("attendanceList",attendanceData as Serializable)
                }
                startActivity(intent)
            } else {
                // Handle empty fields
                if (username.isEmpty()) {
                    usernameEditText.error = "Username is required"
                }
                if (password.isEmpty()) {
                    passwordEditText.error = "Password is required"
                }
            }
        }


    }

    private fun setupRecyclerView(attendanceData: Map<String, Boolean>) {
        val recyclerView = findViewById<RecyclerView>(R.id.recyclerViewAttendance)
        recyclerView.layoutManager = LinearLayoutManager(this)

        val adapter = AttendanceAdapter(attendanceData)
        recyclerView.adapter = adapter
    }


}


