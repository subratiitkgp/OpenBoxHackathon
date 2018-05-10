# OpenBoxHackathon
OpenBox Hackathon

Setup Instructions:

https://facebook.github.io/react-native/docs/getting-started.html

Install android studio with sdk from https://developer.android.com/studio/

Add following export commands to your bashrc / zshrc:

export ANDROID_HOME=$HOME/Library/Android/sdk

export PATH=$PATH:$ANDROID_HOME/tools

export PATH=$PATH:$ANDROID_HOME/platform-tools

brew unlink node

brew uninstall node

brew install node@8

brew link node@8 --force

brew install watchman

npm install -g react-native-cli

Open Android Studio and start the emulator / Connect your android mobile with usb debugging enabled.

Go inside MobileApp folder

npm install

react-native run-android
