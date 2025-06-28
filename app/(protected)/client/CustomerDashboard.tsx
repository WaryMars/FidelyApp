import { GlobalText } from "../../styles/GlobalText";
import { useAuth } from "../../context/authContext";
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  Image,
  View,
} from "react-native";
import { Pillule } from "../../components/Pillule";
import { Card } from "../../components/Card";
import { MapPin, Search } from "lucide-react-native";

const Page = () => {
  const shopsName = Array.from({ length: 10 }, (_, i) => ({
    name: "Shop",
    id: i + 1,
  }));
  const search = <Search color={"#000"} />;
  const { user, userData, loading } = useAuth();
  console.log("userData", userData);
  console.log("user", user);

  if (loading) return <Text>Chargement...</Text>;
  return (
    <SafeAreaView>
      <View style={styles.header}>
        <GlobalText variant="headline">
          <Text style={{ fontWeight: "light" }}>Bienvenue 👋, </Text>
          {userData?.name}
        </GlobalText>
        <Image
          source={require("../../../assets/images/Avatar.png")}
          width={24}
          height={24}
        />
      </View>
      <View>
        <GlobalText variant="body1" style={{ paddingLeft: 16 }}>
          Welcome to FidelyApp!
        </GlobalText>
        <View style={styles.inputContainer}>
          <Search size={20} color="#888" style={styles.icon} />
          <TextInput placeholder={"Search"} style={styles.input} />
        </View>
      </View>
      <View style={{ paddingLeft: 16, paddingTop: 8 }}>
        <GlobalText variant="subtitle2">Select your shop</GlobalText>

        <FlatList
          data={shopsName}
          renderItem={({ item }) => (
            <View
              style={{
                paddingHorizontal: 8,
                alignItems: "center",
                paddingVertical: 16,
              }}
            >
              <Pillule>
                <Text>{item.name}</Text>
              </Pillule>
            </View>
          )}
          keyExtractor={(item) => item.id.toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>
      <View style={{ paddingLeft: 16, paddingTop: 8 }}>
        <FlatList
          data={shopsName}
          renderItem={({ item }) => (
            <View
              style={{
                padding: 16,
                alignItems: "center",
              }}
            >
              <Card>
                {/* <Image
                       source={{
                         uri: "https://images.pexels.com/photos/1319461/pexels-photo-1319461.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
                       }}
                     />
                      */}
                <Image
                  source={require("../../../assets/images/barber.jpg")}
                  style={{
                    width: 230,
                    height: 180,
                    borderRadius: 15,
                    margin: 10,
                    // margin: 5,
                  }}
                />
                <View style={{ paddingHorizontal: 16, paddingTop: 32 }}>
                  <GlobalText variant="subtitle1">
                    {item.name} {item.id}{" "}
                  </GlobalText>
                  <View style={{ paddingTop: 32 }}>
                    <Text>
                      <MapPin color={"#000"} style={{ marginRight: 16 }} />
                      12.5 km
                    </Text>
                  </View>
                </View>
                <View
                  style={{
                    alignItems: "center",
                    justifyContent: "flex-end",
                    padding: 16,
                  }}
                >
                  <Text>Book now</Text>
                </View>
              </Card>
            </View>
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 16,
    paddingHorizontal: 16,
  },
  card: {
    padding: 16,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    margin: 16,
    paddingHorizontal: 12,
  },
  icon: {
    marginRight: 8,
  },
  input: {
    flex: 1,
    paddingVertical: 12,
  },
});

export default Page;
