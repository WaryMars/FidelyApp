import { View, type ViewProps, type ViewStyle } from "react-native";

type Props = Readonly<ViewProps>;

export function Card({ style, ...rest }: Props) {
  return <View style={[style, styles]} {...rest} />;
}

const styles = {
  backgroundColor: "#e2e8f0",
  borderRadius: 20,
  height: 350,
  width: 250,
  // paddingHorizontal: 8,
  // alignItems: "baseline",
} satisfies ViewStyle;
