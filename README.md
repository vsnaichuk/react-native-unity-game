

Zoo Match is a classic match-3 puzzle game where players move and match animal tiles to create sets of three or more. Using the `react-native-unity` library, Unity's game functionality is seamlessly integrated into the React Native app.

## Prerequisites

- [Install Node.js](https://nodejs.org/)
- [Install Yarn](https://classic.yarnpkg.com/en/docs/install)
- [Install Unity 6](https://unity.com/releases/unity-6)
-  Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/getting-started-without-a-framework)

## Clone the Repositories
Clone this React Native Repo:

```bash
git clone https://github.com/vsnaichuk/zoo-match-mobile.git
```

Clone the [Unity Game Repo](https://github.com/vsnaichuk/zoo-match-game) to a separate directory.
```bash
git clone https://github.com/vsnaichuk/zoo-match-game
```

## Add Unity Game Build
You need to create _Android_ / _iOS_ game build and move it to `<THIS_RN_PROJECT>/unity/builds`

1. Open [Unity Game Repo](https://github.com/vsnaichuk/zoo-match-game) in Unity 6
2. Export Unity game to `<THIS_RN_PROJECT>/unity/builds/android`

## Install Dependencies

In the root directory of the project run:

```bash
yarn
```

```bash
npx pod-install
```

## Start Metro

First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of the project:

```bash
yarn start
```

## Start Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of React Native project. Run the following command to start _Android_ or _iOS_ app:

### For Android

```bash
yarn android
```

### For iOS

```bash
yarn ios
```

If everything is set up _correctly_, you should see app running on your _Android_ or _iOS_ device.
