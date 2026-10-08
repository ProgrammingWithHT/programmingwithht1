package com.ml.quaterion.facenetdetection

import android.content.Intent
import android.os.Bundle
import android.os.Handler
import androidx.appcompat.app.AppCompatActivity


class SplashActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_splash_screen)

        // Handler to navigate to the main activity after a delay
        Handler().postDelayed({
            // Start the main activity
            val intent = Intent(this@SplashActivity, WelcomeActivity::class.java)
            startActivity(intent)
            finish() // Close the splash activity
        }, SPLASH_DURATION.toLong())
    }

    companion object {
        // Splash screen duration in milliseconds
        private const val SPLASH_DURATION = 4000
    }
}
