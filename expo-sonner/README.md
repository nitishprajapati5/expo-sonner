# expo-sonner

A lightweight in-app toast notification library for Expo and React Native.

## Features

- `toast`, `toast.success`, `toast.error`, `toast.warning`, `toast.loading`
- `toast.custom` with custom icon, style, duration, and callbacks
- `toast.promise` for async flows
- `toast.dismiss(id)` and `toast.dismiss()` for manual control
- Auto-dismiss with custom duration
- Persistent toasts using `duration: Infinity`
- Safe-area aware positioning for notches and home indicators
- Stack/wrap and expand/collapse behavior
- Swipe-to-dismiss gesture
- Built-in type icons and custom icon support

## Installation

```bash
npm install expo-sonner
# or
yarn add expo-sonner
```

### Peer Dependencies

- `expo`
- `react`
- `react-native`
- `react-native-safe-area-context`

## Quick Start

```tsx
import React from "react";
import { View, Button } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { MaterialIcons } from "@expo/vector-icons";
import { toast, Toaster } from "expo-sonner";

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <Main />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

function Main() {
  const saveSuccess = () => {
    toast.success("Data saved", {
      description: "Your changes are stored.",
      icon: <MaterialIcons name="check-circle" size={20} color="#10b981" />,
      onAutoClose: (toastItem) => console.log("auto close", toastItem.id),
    });
  };

  const saveError = () => {
    toast.error("Save failed", {
      description: "Please try again.",
      duration: 6000,
    });
  };

  const customToast = () => {
    toast.custom("Custom toast", {
      icon: "⭐",
      description: "Won't exceed 4000ms.",
      duration: 4000,
      style: { borderColor: "#fde68a", backgroundColor: "#fffbeb" },
    });
  };

  const promiseToast = () => {
    const task = new Promise<string>((resolve) => {
      setTimeout(() => resolve("done"), 1500);
    });

    toast.promise(task, {
      loading: "Uploading...",
      success: (result) => `Upload ${result}`,
      error: "Upload failed",
      duration: 3000,
    });
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Button title="Success" onPress={saveSuccess} />
      <Button title="Error" onPress={saveError} />
      <Button title="Custom" onPress={customToast} />
      <Button title="Promise" onPress={promiseToast} />
      <Button title="Dismiss All" onPress={() => toast.dismiss()} />
      <Toaster
        position="top-center"
        duration={4000}
        visibleToasts={3}
        expand={false}
        offset={16}
        toastOptions={{ type: "default" }}
      />
    </View>
  );
}
```

## API

### `toast(title, options?)`

Shows a default toast.

| Param | Type | Description |
|---|---|---|
| `title` | `string` | The message to display |
| `options` | `Partial<ExternalToast>` | Optional configuration |

### Typed Variants

```ts
toast.success(title, options?)   // Green success icon
toast.error(title, options?)     // Red error icon
toast.warning(title, options?)   // Yellow warning icon
toast.loading(title, options?)   // Spinner; defaults to duration: Infinity
```

### `toast.custom(title, options?)`

Fully customizable toast with support for `icon`, `description`, `action`, `style`, `onAutoClose`, `onDismiss`, and more.

### `toast.promise(promise, data)`

Shows a loading toast that transitions to success or error based on the promise result.

```ts
toast.promise(myPromise, {
  loading: "Saving...",
  success: (val) => `Saved: ${val}`,
  error: (err) => `Failed: ${err.message}`,
  duration: 3000,
});
```

### `toast.dismiss(id?)`

```ts
toast.dismiss();     // Dismiss all toasts
toast.dismiss(id);   // Dismiss a specific toast by ID
```

## Toaster Props

Place the `<Toaster />` component once, near the root of your app.

```ts
interface ToasterProps {
  position?: "top-center" | "bottom-center" | "top-right" | "bottom-right";
  duration?: number;
  visibleToasts?: number;
  expand?: boolean;
  offset?: number;
  style?: StyleProp<ViewStyle>;
  toastOptions?: Partial<ExternalToast>;
}
```

| Prop | Default | Description |
|---|---|---|
| `position` | `"top-center"` | Where toasts appear on screen |
| `duration` | `4000` | Auto-dismiss time in milliseconds |
| `visibleToasts` | `3` | Max number of toasts shown at once |
| `expand` | `false` | Show all toasts expanded by default |
| `offset` | `16` | Distance from the screen edge |

## Project Setup

### Managed Expo

Follow the [Expo SDK documentation](https://docs.expo.dev/versions/latest/sdk/sonner/) for managed workflow installation.

### Bare React Native

```bash
npm install expo-sonner
npx pod-install
```

## Running the Example App

```bash
cd example
npm install
npm run web
```

## API Documentation

- [Latest stable release](https://docs.expo.dev/versions/latest/sdk/sonner/)
- [Main branch (unversioned)](https://docs.expo.dev/versions/unversioned/sdk/sonner/)

## Contributing

Contributions are very welcome! Please refer to the guidelines in the [contributing guide](https://github.com/expo/expo#contributing).