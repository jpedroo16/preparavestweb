import React, { useState, useEffect, useContext } from "react";
import { Text, View, Image, Pressable } from "react-native";
import { style } from "./style";
import { useNavigation } from '@react-navigation/native';
import * as Font from 'expo-font';
import KollektifBold from '../../assets/fonts/Kollektif-Bold.ttf';
import Kollektif from '../../assets/fonts/Kollektif.ttf';
import { AvatarContext } from "../avatarcomp/index.jsx";

export default function Cabecalho() {
  const navigation = useNavigation();
  const [fontsLoaded, setFontsLoaded] = useState(false);
  const { selectedAvatar } = useContext(AvatarContext);
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Estado de exemplo para autenticação

  // Carregamento de fontes
  useEffect(() => {
    async function loadFonts() {
      await Font.loadAsync({
        KollektifBold,
        Kollektif,
      });
      setFontsLoaded(true);
    }
    loadFonts();
  }, []);

  // Verifica autenticação e redireciona
  useEffect(() => {
    if (!isAuthenticated) {
      navigation.navigate("Login"); // Redireciona para login se não autenticado
    } else {
      navigation.navigate("Profile"); // Redireciona para perfil se autenticado
    }
  }, [isAuthenticated, navigation]);

  if (!fontsLoaded) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <View style={style.cabecalho}>
      <Image style={style.ImagemLogo} source={require('../../assets/Professores/logopreparavest.jpeg')} />

      <View style={style.subtitulo}>
        <Pressable onPress={() => navigation.navigate("Home")}>
          <Text style={{ fontSize: 22 }}>Home</Text>
        </Pressable>
        <Pressable onPress={() => navigation.navigate("Pagina Enem")}>
          <Text style={{ fontSize: 22 }}>Provas</Text>
        </Pressable>
        <Pressable onPress={() => navigation.navigate("Informacoes")}>
          <Text style={{ fontSize: 22 }}>Informações Gerais</Text>
        </Pressable>
        <Pressable onPress={() => navigation.navigate("Conteudo relevante")}>
          <Text style={{ fontSize: 22 }}>Conteúdo Relevante</Text>
        </Pressable>
        <Pressable onPress={() => navigation.navigate("Dicas")}>
          <Text style={{ fontSize: 22 }}>Dicas de Estudos</Text>
        </Pressable>
        <Pressable onPress={() => navigation.navigate("Estatisticas")}>
          <Text style={{ fontSize: 22 }}>Estatísticas</Text>
        </Pressable>
      </View>

      {/* Ícone do avatar que abre o modal de perfil */}
      <Pressable onPress={() => navigation.navigate("Login")}>
        <Image source={selectedAvatar} style={style.avatarIcon} />
      </Pressable>
    </View>
  );
}
