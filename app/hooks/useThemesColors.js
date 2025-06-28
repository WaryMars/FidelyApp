import { useColorScheme } from "react-native";
import { Colors } from "../constants/Colors";

export function useThemesColors() {
  const theme = useColorScheme() ?? "light"; // Default to light theme if useColorScheme returns null
  return Colors[theme];
}
