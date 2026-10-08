package com.ml.quaterion.facenetdetection

import android.os.Bundle
import android.os.Handler
import android.os.Looper
import android.webkit.CookieManager
import android.webkit.WebChromeClient
import android.webkit.WebResourceRequest
import android.webkit.WebView
import android.webkit.WebViewClient
import androidx.appcompat.app.AppCompatActivity
import android.webkit.ValueCallback

class websiteView : AppCompatActivity() {

    var students = HashMap<String, String>()
    private lateinit var webView: WebView


    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_website_view)

        // Retrieve attendance data from intent or any other source
        val attendanceData = intent.getSerializableExtra("attendanceList") as? Map<String, Boolean>
        System.out.println(attendanceData)

//        Get Username and Password
        val username = intent.getStringExtra("USERNAME")
        val password = intent.getStringExtra("PASSWORD")

        // Add key-value pairs to the HashMap

        if (attendanceData != null) {
            for ((name, value) in attendanceData.entries){
                if(value){
                    students[name] = "Present"
                }else{
                    students[name] = "Absent"
                }
                System.out.println(name)
                System.out.println(value)
            }
        }

        webView = findViewById(R.id.webView)


        webView.settings.javaScriptEnabled = true



        // Enable JavaScript (optional)
        webView.settings.javaScriptEnabled = true
        webView.settings.allowContentAccess = true
        webView.settings.allowFileAccess = true
        webView.settings.databaseEnabled = true
        webView.settings.allowContentAccess = true
        webView.settings.domStorageEnabled = true
        webView.settings.loadWithOverviewMode = true
        webView.settings.useWideViewPort = true
        webView.settings.builtInZoomControls = true
        webView.settings.displayZoomControls = false
        webView.settings.setSupportZoom(true)
        webView.settings.defaultTextEncodingName = "utf-8"
        webView.settings.domStorageEnabled = true
        webView.webChromeClient = WebChromeClient()
        WebView.setWebContentsDebuggingEnabled(true)



        System.out.println(username)
        System.out.println(password)

        webView.webViewClient = object : WebViewClient() {
            override fun shouldOverrideUrlLoading(view: WebView?, request: WebResourceRequest?): Boolean {
                return false
            }

            override fun onPageFinished(view: WebView?, url: String?) {
                super.onPageFinished(view, url)

                System.out.println(url)


                if (url == "https://attendreactjs.vercel.app/Teacherlogin") {

                    // JavaScript to fill and submit the login form
                    System.out.println('a')
                    view?.evaluateJavascript(
                        """
                        document.getElementById('email').value = '$username';
                        document.getElementById('password').value = '$password';
                        document.getElementById('btn-login').click();
                        """.trimIndent(), null)

                    Handler(Looper.getMainLooper()).postDelayed({
                        view?.evaluateJavascript(
                            "window.location.href = 'https://attendreactjs.vercel.app/Teacher/class';", null)
                    }, 5000)
                }
                else if (url == "https://attendreactjs.vercel.app/") {
                    System.out.println("AA")
                    view?.reload()
                    Handler(Looper.getMainLooper()).postDelayed({
                        view?.evaluateJavascript(
                            "window.location.href = 'https://attendreactjs.vercel.app/Teacher/class';", null)
                    }, 1000)
                }
                else if (url == "https://attendreactjs.vercel.app/Teacher/class") {
                    Handler(Looper.getMainLooper()).postDelayed({
                        for ((name, value) in students.entries) {
                            System.out.println(name)
                            val jsCode = String.format(
                                "var inputs = document.querySelectorAll('input[type=\"radio\"][name=\"%s\"][value=\"%s\"]');" +
                                        "for (var i = 0; i < inputs.length; i++) {" +
                                        "   inputs[i].click()" +
                                        "}" + "console.log('hello wordl')", name, value
                            )
                            view?.evaluateJavascript(jsCode, null)
                        }
                    }, 4000)

                }

            }
        }

        webView.loadUrl("https://attendreactjs.vercel.app/Teacherlogin")

    }


    override fun onBackPressed() {
        System.out.println("backpressed")
        logoutUser()
        // Optionally clear WebView cache before finishing
        clearWebViewCache()

    }
    private fun logoutUser() {
        System.out.println("logout hojaoo")
        // Inject JavaScript code to logout the user
        webView.evaluateJavascript(
            "document.getElementById('logoutbtn').click();console.log('e')",
            ValueCallback { result ->
                // Wait for the logout process to finish
                waitForLogoutCompletion()
            }

        )
    }
    private fun waitForLogoutCompletion() {
        // Wait for 1 second (adjust as needed)
        Handler(Looper.getMainLooper()).postDelayed({
            // Proceed with finishing the activity after waiting
            finish()
        }, 1000) // 1000 milliseconds = 1 second
    }

    override fun onResume() {
        super.onResume()
        // Ensure that the WebView loads the login page again when Activity B is resumed
        webView.loadUrl("https://attendreactjs.vercel.app/Teacherlogin")
    }

    private fun clearWebViewCache() {
        // Clear the entire cache including the Disk cache, memory cache, and the back/forward list cache
        webView.clearCache(true)
        CookieManager.getInstance().removeAllCookies(null)
    }
}