import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomePage from "./screens/home/index.jsx";
import PaginaEnem from "./screens/pgENEM/index.jsx";
import Informacoes from "./screens/InfoGerais/index.jsx";
import Conteudorel from "./screens/ContRelevante/index.jsx";
import EstatisticasENEM from "./screens/Professores/index.jsx";
import Login from "./screens/Login/index.jsx";
import Cadastro from "./screens/Cadastro/index.jsx";
import Avatar from "./screens/avatar/index.jsx";
import StudyTips from "./screens/Questoes/index.jsx"; // Certifique-se de que o caminho está correto
import Profile from "./screens/profile/index.jsx";
import { AvatarProvider } from "./components/avatarcomp/index.jsx";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <AvatarProvider>
    <NavigationContainer>
    <Stack.Screen name="Login" component={Login}/>
      <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown: false}}>
        <Stack.Screen name="Conteudo relevante" component={Conteudorel} />
        <Stack.Screen name="Questoes" component={StudyTips} />
        <Stack.Screen name="Home" component={HomePage} />
        <Stack.Screen name="Informacoes" component={Informacoes} />
        <Stack.Screen name="Pagina Enem" component={PaginaEnem} />
        <Stack.Screen name="Estatisticas" component={EstatisticasENEM} />
        <Stack.Screen name="Cadastro" component={Cadastro} />
        <Stack.Screen name="avatar" component={Avatar} />
        <Stack.Screen name="Dicas" component={StudyTips} />
        <Stack.Screen name="Profile" component={Profile} />

      </Stack.Navigator>
    </NavigationContainer>
    </AvatarProvider>
  );
}
