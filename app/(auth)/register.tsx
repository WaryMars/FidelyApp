import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import { useRouter } from "expo-router";
import { registerUser } from "../services/authService";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userType, setUserType] = useState<"client" | "commercant">("client");
  const router = useRouter();

  const handleRegister = async () => {
    try {
      await registerUser({
        email,
        password,
        name,
        role: userType,
      });

      // Redirection vers login ou dashboard
      router.push("/(auth)/login"); // ou ton écran d'accueil selon le type
    } catch (error: any) {
      console.error("Erreur d'inscription :", error.message);
      alert("Échec de l'inscription : " + error.message);
    }

    console.log("Inscription avec :", email, password, userType);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Inscription</Text>

      <TextInput
        style={styles.input}
        placeholder="Nom complet"
        value={name}
        onChangeText={setName}
      />

      <TextInput
        style={styles.input}
        placeholder="Adresse email"
        value={email}
        onChangeText={setEmail}
      />

      <TextInput
        style={styles.input}
        placeholder="Mot de passe"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <View style={styles.switchContainer}>
        <Button
          title="Client"
          onPress={() => setUserType("client")}
          color={userType === "client" ? "blue" : "gray"}
        />
        <Button
          title="Commerçant"
          onPress={() => setUserType("commercant")}
          color={userType === "commercant" ? "blue" : "gray"}
        />
      </View>
      <Text style={styles.link} onPress={() => router.push("/(auth)/login")}>
        Déjà un compte ? Connectez-vous
      </Text>

      <Button title="Créer un compte" onPress={handleRegister} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: "center" },
  title: { fontSize: 24, marginBottom: 20, textAlign: "center" },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 12,
    marginBottom: 12,
    borderRadius: 8,
  },
  switchContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 20,
  },
  link: {
    color: "blue",
    marginTop: 20,
    textAlign: "center",
  },
});
