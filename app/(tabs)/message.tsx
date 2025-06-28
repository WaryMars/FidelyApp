import { SafeAreaView, StyleSheet, Text, View } from "react-native";

const Page = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Message</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Page;
