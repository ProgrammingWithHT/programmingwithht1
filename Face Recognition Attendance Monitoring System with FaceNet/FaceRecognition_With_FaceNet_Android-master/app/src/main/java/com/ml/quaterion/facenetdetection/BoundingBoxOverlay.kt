package com.ml.quaterion.facenetdetection

import android.content.Context
import android.graphics.Camera
import android.graphics.Canvas
import android.graphics.Color
import android.graphics.Matrix
import android.graphics.Paint
import android.util.AttributeSet
import android.view.SurfaceHolder
import android.view.SurfaceView
import androidx.camera.core.CameraSelector
import androidx.core.graphics.toRectF
import kotlin.math.min


// Defines an overlay on which the boxes and text will be drawn.
class BoundingBoxOverlay( context: Context , attributeSet: AttributeSet )
    : SurfaceView( context , attributeSet ) , SurfaceHolder.Callback {

    // Variables used to compute output2overlay transformation matrix
    // These are assigned in FrameAnalyser.kt
    var areDimsInit = false
    var frameHeight = 0
    var frameWidth = 0

    var cameraFacing : Int = CameraSelector.LENS_FACING_FRONT

    // This var is assigned in FrameAnalyser.kt
    var faceBoundingBoxes: ArrayList<Prediction>? = null

    // Determines whether or not "mask" or "no mask" should be displayed.
    var drawMaskLabel = true

    private var output2OverlayTransform: Matrix = Matrix()

    // Paint for boxes and text
    private val boxPaint = Paint().apply {
        color = Color.GREEN
//        style = Paint.Style.FILL
        style = Paint.Style.STROKE  // Change to STROKE to draw only the outline
        strokeWidth = 4f  // Adjust the stroke width as needed
    }
    private val textPaint = Paint().apply {
        strokeWidth = 2.0f
        textSize = 32f
        color = Color.WHITE
    }


    override fun surfaceCreated(holder: SurfaceHolder) {
        TODO("Not yet implemented")
    }


    override fun surfaceChanged(holder: SurfaceHolder, format: Int, width: Int, height: Int) {
        TODO("Not yet implemented")
    }


    override fun surfaceDestroyed(holder: SurfaceHolder) {
        TODO("Not yet implemented")
    }


    override fun onDraw(canvas: Canvas?) {
        if (faceBoundingBoxes != null) {
            if (!areDimsInit) {
                val viewWidth = canvas!!.width.toFloat()
                val viewHeight = canvas.height.toFloat()
                val xFactor: Float = viewWidth / frameWidth.toFloat()
                val yFactor: Float = viewHeight / frameHeight.toFloat()
                // Scale and mirror the coordinates ( required for front lens )
                output2OverlayTransform.preScale(xFactor, yFactor)
                if( cameraFacing == CameraSelector.LENS_FACING_FRONT ) {
                    output2OverlayTransform.postScale(-1f, 1f, viewWidth / 2f, viewHeight / 2f)
                }
                areDimsInit = true
            }
            else {
                for (face in faceBoundingBoxes!!) {
//                    val boundingBox = face.bbox.toRectF()
//                    output2OverlayTransform.mapRect(boundingBox)
//                    canvas?.drawRoundRect(boundingBox, 16f, 16f, boxPaint)
//                    canvas?.drawText(
//                        face.label,
//                        boundingBox.centerX(),
//                        boundingBox.centerY(),
//                        textPaint
//                    )
                    val boundingBox = face.bbox.toRectF()
                    output2OverlayTransform.mapRect(boundingBox)
// Calculate box size (minimum of width and height) to ensure it's a square
                    val boxSize = min(boundingBox.width(), boundingBox.height())
                    val left = boundingBox.left
                    val top = boundingBox.top
//                    val left = boundingBox.centerX() - boxSize / 2
//                    val top = boundingBox.centerY() - boxSize / 2
                    val right = left + boxSize
                    val bottom = top + boxSize
// Draw square box with empty inside
                    canvas?.drawRect(left, top, right, bottom, boxPaint)
                    canvas?.drawText(
                        face.label,
                        boundingBox.centerX(),
                        boundingBox.centerY(),
                        textPaint
                    )
                    if ( drawMaskLabel ) {
                        canvas?.drawText(
                            face.maskLabel,
                            boundingBox.centerX(),
                            boundingBox.centerY() + 32,
                            textPaint
                        )
                    }
                }
            }
        }
    }
}
