import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerTitleAlign: "center",
        headerShadowVisible: false,
        headerStyle: { backgroundColor: "#ffffff" },
        headerTintColor: "#000000",
      }}
    >
      <Stack.Screen name="index" options={{ title: "Welcome" }} />
      <Stack.Screen name="home" options={{ title: "Menu" }} />
      <Stack.Screen name="email" options={{ title: "Email Service" }} />
      <Stack.Screen name="userList" options={{ title: "User Directory" }} />
      <Stack.Screen name="profile" options={{ title: "User Profile" }} />
    </Stack>
  );
}
