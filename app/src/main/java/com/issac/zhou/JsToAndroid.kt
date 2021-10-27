package com.issac.zhou

import android.Manifest
import android.content.pm.PackageManager
import android.widget.Toast
import androidx.core.content.ContextCompat

class JsToAndroid {

    @android.webkit.JavascriptInterface
    fun save(str: String) {
        if (ContextCompat.checkSelfPermission(
                App.getContext(),
                Manifest.permission.WRITE_EXTERNAL_STORAGE
            ) != PackageManager.PERMISSION_GRANTED
        ) {
            Toast.makeText(App.getContext(), R.string.no_permission, Toast.LENGTH_LONG).show()
            return
        }

        if(str.isEmpty()){
            Toast.makeText(App.getContext(), R.string.no_record, Toast.LENGTH_LONG).show()
            return
        }

        val util = Util()
        val array = str.split("##")
        val file = util.save("${array[0]}.csv", array[1])
        util.open(App.getContext(), file)
    }
}