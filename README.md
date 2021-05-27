# kraliss_rn_dev_test

This repository contains the source code of the KRALISS React Native Dev Test mobile application. It is written under the react native framework.

## How to setup

First you need [node.js](https://nodejs.org/en/) v8.12.0 and [yarn](https://yarnpkg.com/) installed. We recommend using [nvm](https://github.com/creationix/nvm) to be able to install and switch between different versions of node.js.

You will also need, depending on your development environment, the android sdk tools or xcode installed.
Please refer to https://developer.android.com/studio/install for how to install the android sdk tools and https://developer.apple.com/xcode/ for how to install xcode.

Clone the repository by running:

```
git clone https://github.com/moustaphadiakhate/kraliss_rn_dev_test.git
```

Then cd into it:

```
cd kraliss_rn_dev_test
```

Run yarn to install the dependencies

```
yarn install
```

On iOS, you will need to also install the cocoapods dependencies.
The current version of react-native-app-tour is incompatible with newer versions
of cocoapods so make sure you install cocoapods 1.5.3
Verify which version is currently installed with `pod --version`
If you have a newer version run the following commands

```
sudo gem uninstall cocoapods
sudo gem install cocoapods -v 1.5.3
```

Then to install the cocoapods dependencies run:

```
cd ios
pod install
```

The react-native-app-tour library also needs its cocoapods dependencies installed.

```
cd node_modules/react-native-app-tour/ios
pod install
```

Depending on the xcode version you are using you might have to run the commands mentioned in this github issue comment: https://github.com/facebook/react-native/issues/21168#issuecomment-422431294

## Run the app

For android, you will need to connect your android device or start your simulator.

For iOS, start xcode.

Run the react native packager with

```
react-native start
```

On Android, run:

```
react-native run-android
```

On iOS, open xcode and hit the build and run button.

## Development

### GIT

- We use Gitflow Workflow as our branching model [Check Tutorial](https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow)

- To start work on a new feature, create a new branch (e.g., `feature/some-name`) from `development` branch and start working:
  ```
  git checkout development
  git checkout -b feature/my-new-branch
  git push
  ```
- For hot fixes:
  ```
  git checkout -b hotfix/fixing-this-issue
  git push
  ```
  - If you are still on `development` branch, create a new branch from it
  - If you are in production, create a new branch from `master`

Et voilà !
