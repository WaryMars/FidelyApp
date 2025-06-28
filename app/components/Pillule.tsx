import { View, type ViewProps, type ViewStyle } from "react-native";

type Props = Readonly<ViewProps>;

export function Pillule({ style, ...rest }: Props) {
  return <View style={[style, styles]} {...rest} />;
}

const styles = {
  backgroundColor: "#64748b",
  paddingHorizontal: 12,
  paddingVertical: 4,
  borderRadius: 9999,
} satisfies ViewStyle;
