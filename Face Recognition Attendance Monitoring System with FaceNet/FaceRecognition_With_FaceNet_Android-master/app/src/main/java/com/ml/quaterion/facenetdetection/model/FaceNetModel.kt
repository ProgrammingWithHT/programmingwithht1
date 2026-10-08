package com.ml.quaterion.facenetdetection.model

import android.content.Context
import android.graphics.Bitmap
import android.util.Log
import com.ml.quaterion.facenetdetection.Logger
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.withContext
import org.tensorflow.lite.DataType
import org.tensorflow.lite.Interpreter
import org.tensorflow.lite.gpu.CompatibilityList
import org.tensorflow.lite.gpu.GpuDelegate
import org.tensorflow.lite.support.common.FileUtil
import org.tensorflow.lite.support.common.TensorOperator
import org.tensorflow.lite.support.image.ImageProcessor
import org.tensorflow.lite.support.image.TensorImage
import org.tensorflow.lite.support.image.ops.ResizeOp
import org.tensorflow.lite.support.tensorbuffer.TensorBuffer
import org.tensorflow.lite.support.tensorbuffer.TensorBufferFloat
import java.nio.ByteBuffer
import kotlin.math.max
import kotlin.math.pow
import kotlin.math.sqrt

// Utility class for FaceNet model
class FaceNetModel(
    context: Context,
    var model: ModelInfo,
    useGpu: Boolean,
    useXNNPack: Boolean
) {

    // Input image size for FaceNet model.
    private val imgSize = model.inputDims
    // Output embedding size
    val embeddingDim = model.outputDims
    private var interpreter: Interpreter
    private var gpuDelegate: GpuDelegate? = null

    private val imageTensorProcessor = ImageProcessor.Builder()
        .add(ResizeOp(imgSize, imgSize, ResizeOp.ResizeMethod.BILINEAR))
        .add(StandardizeOp())
        .build()

    init {
        // Initialize TFLiteInterpreter
        val interpreterOptions = Interpreter.Options().apply {
            // Add the GPU Delegate if supported.
            // See -> https://www.tensorflow.org/lite/performance/gpu#android
            if (useGpu) {
                if (CompatibilityList().isDelegateSupportedOnThisDevice) {
                    gpuDelegate = GpuDelegate(CompatibilityList().bestOptionsForThisDevice).also { addDelegate(it) }
                    Logger.log("GPU delegate added")
                } else {
//                    Log.w("FaceNetModel", "GPU is not supported on this device, falling back to CPU.")
                    Logger.log("GPU is not supported on this device, falling back to CPU.")
                }
            }
            // Number of threads for computation
            numThreads = 4
            setUseXNNPACK(useXNNPack)
            useNNAPI = true
        }

        interpreter = Interpreter(FileUtil.loadMappedFile(context, model.assetsFilename), interpreterOptions)
        Logger.log("Using ${model.name} model.")
    }

    // Gets an face embedding using FaceNet.
    suspend fun getFaceEmbedding(image: Bitmap): FloatArray {
        return withContext(Dispatchers.Main) {
            runFaceNet(convertBitmapToBuffer(image))[0]
        }
    }

    // Run the FaceNet model.
    private fun runFaceNet(inputs: Any): Array<FloatArray> {
        val t1 = System.currentTimeMillis()
        val faceNetModelOutputs = Array(1) { FloatArray(embeddingDim) }
        interpreter.run(inputs, faceNetModelOutputs)
        Log.i("Performance", "${model.name} Inference Speed in ms: ${System.currentTimeMillis() - t1}")
        return faceNetModelOutputs
    }

    // Resize the given bitmap and convert it to a ByteBuffer
    private fun convertBitmapToBuffer(image: Bitmap): ByteBuffer {
        return imageTensorProcessor.process(TensorImage.fromBitmap(image)).buffer
    }

    fun close() {
        gpuDelegate?.close()
        interpreter.close()
    }


    // Op to perform standardization
    // x' = ( x - mean ) / std_dev
    class StandardizeOp : TensorOperator {
        override fun apply(p0: TensorBuffer?): TensorBuffer {
            val pixels = p0!!.floatArray
            val mean = pixels.average().toFloat()
            var std = sqrt(pixels.map { pi -> (pi - mean).pow(2) }.sum() / pixels.size.toFloat())
            std = max(std, 1f / sqrt(pixels.size.toFloat()))
            for (i in pixels.indices) {
                pixels[i] = (pixels[i] - mean) / std
            }
            val output = TensorBufferFloat.createFixedSize(p0.shape, DataType.FLOAT32)
            output.loadArray(pixels)
            return output
        }
    }
}
