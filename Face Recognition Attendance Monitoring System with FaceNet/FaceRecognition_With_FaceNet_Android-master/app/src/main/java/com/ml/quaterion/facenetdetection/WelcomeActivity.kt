package com.ml.quaterion.facenetdetection

import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.widget.Button
import java.io.Serializable

class WelcomeActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_welcome)

        val buttonMark = findViewById<Button>(R.id.btnMark)
        val buttonStudents = findViewById<Button>(R.id.btnStudents)

        buttonMark.setOnClickListener {
            val intent = Intent(this, MainActivity::class.java)
            startActivity(intent)
        }

        buttonStudents.setOnClickListener {
            val intent = Intent(this, StudentsActivity::class.java)
            startActivity(intent)
        }
    }
}