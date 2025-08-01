import { Tabs } from "expo-router";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: true,
        headerTitle: "Memórias TDS",  // título que você gostaria
        headerTitleAlign: "center",
        headerStyle: { backgroundColor: "#0055A4" },
        headerTintColor: "#fff",
        headerTitleStyle: { fontWeight: "bold" },
      }}
    />
  );
}
