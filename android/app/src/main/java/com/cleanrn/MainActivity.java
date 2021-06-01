package com.cleanrn;

import android.content.Intent;
import android.content.res.Configuration;

import androidx.annotation.NonNull;

import com.facebook.react.ReactActivity;


public class MainActivity extends ReactActivity {

    @Override
    public void onConfigurationChanged(@NonNull Configuration newConfig) {
        super.onConfigurationChanged(newConfig);
        Intent intent = new Intent("onConfigurationChanged");
        intent.putExtra("newConfig", newConfig);
        this.sendBroadcast(intent);
    }

    /**
     * Returns the name of the main component registered from JavaScript. This is used to schedule
     * rendering of the component.
     */
    @Override
    protected String getMainComponentName() {
        return "CleanRN";
    }
}