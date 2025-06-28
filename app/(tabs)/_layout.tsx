// import { Tabs } from "expo-router";
// import { TabBar } from "../components/TabBar";

// const TabLayout = () => {
//   return (
//     <Tabs tabBar={(props) => <TabBar {...props} />}>
//       <Tabs.Screen
//         name="home"
//         options={{ title: "Home", headerShown: false }}
//       />
//       <Tabs.Screen
//         name="favorite"
//         options={{ title: "Favorite", headerShown: false }}
//       />
//       <Tabs.Screen
//         name="message"
//         options={{ title: "Message", headerShown: false }}
//       />
//     </Tabs>
//   );
// };

// export default TabLayout;

// app/(tabs)/_layout.tsx
import { Tabs } from "expo-router";
import { TabBar } from "../components/TabBar";

export default function TabLayout() {
  return (
    <Tabs tabBar={(props) => <TabBar {...props} />}>
      <Tabs.Screen
        name="dashboard"
        options={{ title: "Accueil", headerShown: false }}
      />
      <Tabs.Screen
        name="favorite"
        options={{ title: "Favoris", headerShown: false }}
      />
      <Tabs.Screen
        name="message"
        options={{ title: "Messages", headerShown: false }}
      />
    </Tabs>
  );
}
