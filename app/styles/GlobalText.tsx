import { StyleSheet, Text, TextProps } from "react-native";
import colors from "./couleur";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    padding: 20,
  },
  center: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  headline: {
    fontSize: 24,
    lineHeight: 32,
    fontWeight: "bold",
  },
  caption: {
    fontSize: 8,
    lineHeight: 12,
  },
  subtitle1: {
    fontSize: 14,
    lineHeight: 16,
    fontWeight: "bold",
  },
  subtitle2: {
    fontSize: 12,
    lineHeight: 16,
    fontWeight: "bold",
  },
  subtitle3: {
    fontSize: 10,
    lineHeight: 16,
    fontWeight: "bold",
  },
  body1: {
    fontFamily: "Inter",
    fontSize: 14,
    lineHeight: 16,
    fontWeight: "normal",
  },
  body2: {
    fontFamily: "Inter",
    fontSize: 12,
    lineHeight: 16,
    fontWeight: "normal",
  },
  body3: {
    fontFamily: "Inter",
    fontSize: 10,
    lineHeight: 16,
    fontWeight: "normal",
  },

  button: {
    backgroundColor: colors.primary,
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  buttonText: {
    color: colors.white,
    fontSize: 8,
    lineHeight: 12,
    textAlign: "center",
  },
});

type Props = TextProps & {
  variant?: keyof typeof styles;
  children: React.ReactNode;
};

export function GlobalText({ variant, children, ...rest }: Props) {
  return (
    <Text style={styles[variant ?? "body3"]} {...rest}>
      {children}
    </Text>
  );
}
