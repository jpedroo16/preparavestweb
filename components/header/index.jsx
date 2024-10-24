import React, { useState, useEffect, useContext } from "react";
import { Text, View, Image, Modal, Pressable, Alert } from "react-native";
import { style } from "./style";
import { useNavigation } from '@react-navigation/native';
import * as Font from 'expo-font';
import KollektifBold from '../../assets/fonts/Kollektif-Bold.ttf';
import Kollektif from '../../assets/fonts/Kollektif.ttf';
import { AvatarContext } from "../avatarcomp";
import AvatarSelection from "../../screens/avatar";

export default function Cabecalho() {
  const navigation = useNavigation();
  const [fontsLoaded, setFontsLoaded] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalVisible1, setModalVisible1] = useState(false); // Adicionando estado para modal de avatar
  //const [menuVisible, setMenuVisible] = useState(false);

  const { selectedAvatar } = useContext(AvatarContext); // Usa o avatar do contexto


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

  if (!fontsLoaded) {
    return <View><Text>Loading...</Text></View>;
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
      <Pressable onPress={() => setModalVisible(true)}>
          <Image source={selectedAvatar} style={style.avatarIcon} />
        </Pressable>

        {/* Modal de perfil */}
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            setModalVisible(!modalVisible);
          }}
        >
          <View style={style.perfilmodal}>
            <View style={style.modal}>
              <Text style={style.titulomodal}>Perfil</Text>
              <Pressable onPress={() => setModalVisible(true)}>
                <Image source={selectedAvatar} style={style.imagemavatar} />
                </Pressable>
              <Text style={style.textomodal}>Email </Text>
              <Pressable onPress={() => setModalVisible1(true)} style={style.botal}>
                <Text>Alterar foto</Text>
              </Pressable>

              {/* Modal para alterar avatar */}
              <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible1}
                onRequestClose={() => {
                  Alert.alert("Modal has been closed.");
                  setModalVisible1(!modalVisible1);
                }}
              >
                <View style={style.avatarmodal}>
                  <AvatarSelection />
                  <Pressable onPress={() => setModalVisible1(!modalVisible1)}>
                    <Text style={style.titulomodal1}>Voltar a página anterior</Text>
                  </Pressable>
                </View>
              </Modal>

              <Pressable style={style.botal}>
                <Text>Sair da conta</Text>
              </Pressable>
              <Pressable onPress={() => setModalVisible(false)}>
                <Text style={style.titulomodal1}>Voltar à página anterior</Text>
              </Pressable>

              
            </View>
          </View>
        </Modal>
    </View>
  );
}
