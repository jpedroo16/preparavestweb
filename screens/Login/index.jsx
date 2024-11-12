import {
  View,
  Text,
  Image,
  Pressable,
  Alert,
  StyleSheet,
} from "react-native";
import { styles } from "./style";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { Input } from "react-native-elements";
import apiConfig from "../../utils/api"; // Certifique-se de que o apiConfig esteja importado corretamente

export default function Login() {
  const navigation = useNavigation();

  const [passwordVisible, setPasswordVisible] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isEmailError, setIsEmailError] = useState(false);
  const [isPasswordError, setIsPasswordError] = useState(false);

  async function handleLogin() {
    const emailIsValid = email.trim().includes("@");
    const passwordIsValid = password.length >= 6;

    setIsEmailError(!emailIsValid);
    setIsPasswordError(!passwordIsValid);

    if (emailIsValid && passwordIsValid) {
      try {
        let res = await apiConfig.post("/login", {
          email: email,
          senha: password,
        });

        if (res.status === 200) {
          navigation.navigate("Home");
        } else if (res.status === 401) {
          alert("Usuário ou senha incorretos!"); 
        } else {
          alert("Erro: Ocorreu um erro. Tente novamente.");
        }
      } catch (error) {
        console.error(error);
        alert("Usuário ou senha incorretos!");
      }
    } else {
      alert("Erro: Por favor, preencha os campos corretamente.");
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          style={styles.Logo}
          source={require("../../assets/Professores/WhatsApp_Image_2024-10-03_at_14.09.22-removebg-preview.png")}
        />
        <Text style={styles.texto}>Teste</Text>
        <View style={styles.div_input}>
          <Input
            placeholder="Email"
            onChangeText={(text) => setEmail(text)}
            errorMessage={isEmailError ? "Email inválido!" : ""}
            inputContainerStyle={
              isEmailError ? estilo.input_container_error : estilo.input_container
            }
          />
          <Input
            placeholder="Senha"
            onChangeText={(text) => setPassword(text)}
            secureTextEntry={passwordVisible}
            errorMessage={isPasswordError ? "Senha deve ter pelo menos 6 caracteres!" : ""}
            maxLength={10}
            inputContainerStyle={
              isPasswordError
                ? estilo.input_container_error
                : estilo.input_container
            }
          />
        </View>

        <Pressable style={styles.botao} onPress={handleLogin}>
          <Text style={{ color: "#fff", fontSize: 22 }}>Entrar</Text>
        </Pressable>

        <Pressable style={styles.cadastrar}>
          <Text
            style={{ fontSize: 22, color: "#45455F" }}
            onPress={() => navigation.navigate("Cadastro")}
          >
            Cadastre-se
          </Text>
        </Pressable>

      </View>
    </View>
  );
}

const estilo = StyleSheet.create({
  input_container_error: {
    height: 70,
    width: 300,
    borderRadius: 10,
    padding: 5,
    fontSize: 18,
    borderColor: "red",
    borderWidth: 1,
  },
  input_container: {
    height: 70,
    width: 300,
    borderRadius: 10,
    padding: 5,
    fontSize: 18,
  },
});