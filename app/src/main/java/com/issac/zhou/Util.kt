package com.issac.zhou

import android.os.Environment
import java.io.File
import java.io.FileOutputStream
import android.content.Context
import android.content.Intent
import android.net.Uri
import android.webkit.MimeTypeMap
import android.os.StrictMode
import android.os.Build

class Util {

    fun save(name: String, content: String): File {
        val directory = File(Environment.getExternalStorageDirectory(), "/zwork")
        if (!directory.exists()) {
            directory.mkdirs()
        }

        val file = File(directory, name)
        val outputStream = FileOutputStream(file)
        outputStream.write(content.toByteArray())
        outputStream.close()
        return file
    }

    fun open(context: Context, file: File) {
        if (Build.VERSION.SDK_INT >= 24) {
            try {
                val m = StrictMode::class.java.getMethod("disableDeathOnFileUriExposure")
                m.invoke(null)
            } catch (e: Exception) {
                e.printStackTrace()
            }

        }

        val intent = Intent(Intent.ACTION_VIEW)
        val uri = Uri.fromFile(file)
        intent.setDataAndType(uri, getMimeType(uri.toString()))
        intent.addFlags(Intent.FLAG_GRANT_READ_URI_PERMISSION)
        intent.addFlags(Intent.FLAG_ACTIVITY_NEW_TASK)
        context.startActivity(intent)
    }

    private fun getMimeType(url: String): String? {
        var type: String? = null
        val extension = MimeTypeMap.getFileExtensionFromUrl(url)
        if (extension != null) {
            type = MimeTypeMap.getSingleton().getMimeTypeFromExtension(extension)
        }
        return type
    }
}