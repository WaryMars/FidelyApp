// import { Link } from "expo-router";
// import "react-native-gesture-handler";
// import { Text, StyleSheet } from "react-native";
// import { SafeAreaView } from "react-native-safe-area-context";
// import { useThemesColors } from "./hooks/useThemesColors";

// export default function Index() {
//   const colors = useThemesColors();
//   return (
//     <SafeAreaView
//       style={[styles.container, { backgroundColor: colors.grayBackground }]}
//     >
//       <Text style={styles.text}>Hello World !</Text>
//       <Text style={[styles.text, { color: colors.grayDark }]}>
//         Bienvenue en Mode theme - !
//       </Text>
//       <Link href={{ pathname: "/shop/[id]", params: { id: 3 } }}>Shop 3</Link>
//       <Link href={{ pathname: "/screen/home" }}>Home Screen</Link>
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   text: {
//     color: "#FF4D4D",
//     fontSize: 24,
//     fontWeight: "bold",
//   },
// });

import { useEffect } from "react";
import { router } from "expo-router";
import { InteractionManager } from "react-native";

export default function Index() {
  useEffect(() => {
    // Attend que la navigation soit prête$
    InteractionManager.runAfterInteractions(() => {
      router.replace("/(auth)/login");
    });
  }, []);

  return null;
}
