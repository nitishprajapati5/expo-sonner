import React from "react";
import { View, Button } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
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
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Button
        title="Show Success Toast"
        onPress={() => {
          toast.success("Success message!",{description:"This is a description for the success message.",icon:""});
        }}
      />

      <Button
        title="Show Error Toast"
        onPress={() => {
          toast.error("Error message!",{description:"This is a description for the error message."});
        }}
      />

      <Button
        title="Show Info Toast"
        onPress={() => {
          toast.custom("Info message!",{description:"This is a description for the info message."});
        }}
      />

      <Button
        title="Show Warning Toast"
        onPress={() => {
          toast.warning("Warning message!",{description:"This is a description for the warning message."});
        }}
      />

      <Button
        title="Show Loading Toast"
        onPress={() => {
          const promise = new Promise((resolve) => setTimeout(resolve, 3000));
          toast.promise(promise, {
            loading: "Loading...",
            success: "Loaded successfully!",
            error: "Failed to load.",
            description: "This is a description for the loading message.",
          });
        }}
      />

      <Button
        title="Show Persistent Toast"
        onPress={() => {
          toast.custom("Persistent message!", {
            description: "This toast will stay until dismissed.",
            duration: Infinity,
          });
        }}
      />

      <Button
        title="Dismiss All Toasts"
        onPress={() => {
          toast.dismiss();
        }}
      />



      <Toaster position="top-center" visibleToasts={5} duration={1000}/>
    </View>
  );
}
