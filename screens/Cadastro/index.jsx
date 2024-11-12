import React, { useState } from "react";
import { View, Text, Image, Pressable, Alert, StyleSheet } from "react-native";
import { Input } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import apiConfig from "../../utils/api";

export default function Cadastro() {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [isEmailError, setIsEmailError] = useState(false);
  const [isPasswordError, setIsPasswordError] = useState(false);
  const [isConfirmPasswordError, setIsConfirmPasswordError] = useState(false);

  async function handleRegister() {
    const emailIsValid = email.includes("@");
    const passwordIsValid = password.length >= 6;
    const passwordsMatch = password === confirmPassword;

    setIsEmailError(!emailIsValid);
    setIsPasswordError(!passwordIsValid);
    setIsConfirmPasswordError(!passwordsMatch);

    if (emailIsValid && passwordIsValid && passwordsMatch) {
      try {
        const res = await apiConfig.post("/user/novo", { email, senha: password });
        if (res.status === 201 || res.status === 200) {
          alert("Sucesso: Cadastro realizado com sucesso!"); // Usando alert para web
          navigation.navigate("Login");
        } else {
          alert("Erro: Ocorreu um erro. Tente novamente.");
        }
      } catch (error) {
        console.error("Erro ao cadastrar:", error);
        alert("Cadastro já utilizado");
      }
    } else {
      alert("Erro: Preencha os campos corretamente.");
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          style={styles.logo}
          source={require("../../assets/Professores/WhatsApp_Image_2024-10-03_at_14.09.22-removebg-preview.png")}
        />
        <Text style={styles.title}>Cadastro</Text>
        <Input
          placeholder="Email"
          onChangeText={setEmail}
          errorMessage={isEmailError ? "Email inválido!" : ""}
          inputContainerStyle={[styles.input, isEmailError && styles.inputError]}
        />
        <Input
          placeholder="Senha"
          onChangeText={setPassword}
          secureTextEntry
          errorMessage={isPasswordError ? "Senha deve ter pelo menos 6 caracteres!" : ""}
          inputContainerStyle={[styles.input, isPasswordError && styles.inputError]}
        />
        <Input
          placeholder="Confirme a Senha"
          onChangeText={setConfirmPassword}
          secureTextEntry
          errorMessage={isConfirmPasswordError ? "As senhas não coincidem!" : ""}
          inputContainerStyle={[styles.input, isConfirmPasswordError && styles.inputError]}
        />
        <Pressable style={styles.button} onPress={handleRegister}>
          <Text style={styles.buttonText}>Cadastrar</Text>
        </Pressable>
        <Pressable onPress={() => navigation.navigate("Login")}>
          <Text style={styles.link}>Já tem uma conta? Entre aqui</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#38B6FF",
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    width: 350,
    height: 520,
    marginTop: 100,
    backgroundColor: "#FCFCFC",
    borderRadius: 20,
    padding: 20,
    alignItems: "center",
  },
  logo: {
    width: 350,
    height: 150,
    marginBottom: 10,
    marginTop: -100,
  },
  title: {
    fontSize: 30,
    marginBottom: 20,
  },
  input: {
    height: 60,
    width: 300,
    borderRadius: 10,
    padding: 10,
    backgroundColor: "#fcfcfc",
  },
  inputError: {
    borderColor: "red",
    borderWidth: 1,
  },
  button: {
    height: 50,
    width: 250,
    backgroundColor: "#4776DF",
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },
  buttonText: {
    color: "#fff",
    fontSize: 22,
  },
  link: {
    marginTop: 10,
    textDecorationLine: "underline",
    color: "#A2A3BB",
  },
});