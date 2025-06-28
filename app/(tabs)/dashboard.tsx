import { useAuth } from "../context/authContext";
import CustomerDashboard from "../(protected)/client/CustomerDashboard";
import ShopDashboard from "../(protected)/shop/shopDashboard";
import { ActivityIndicator, View } from "react-native";

export default function DashboardRouter() {
  const { userData } = useAuth();

  if (!userData) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return userData.role === "client" ? <CustomerDashboard /> : <ShopDashboard />;
}
