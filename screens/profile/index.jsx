import React, { useState, useEffect, useContext } from "react";
import { Text, View, Image, Modal, Pressable, Alert } from "react-native";
import { style } from "./style";
import { useNavigation } from '@react-navigation/native';
import * as Font from 'expo-font';
import KollektifBold from '../../assets/fonts/Kollektif-Bold.ttf';
import Kollektif from '../../assets/fonts/Kollektif.ttf';
import { AvatarContext } from "../../components/avatarcomp";
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

        {/* Modal de perfil */}

          <View style={style.perfilmodal}>
            <View style={style.modal}>
              <Text style={style.titulomodal}>Perfil</Text>
              <Pressable onPress={() => setModalVisible(true)}>
                <Image source={selectedAvatar} style={style.imagemavatar} />
              
                
                </Pressable>
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
                  <Pressable onPress={() => navigation.goBack()}>
                    <Text style={style.titulomodal1}>Voltar a página anterior</Text>
                  </Pressable>
                </View>
              </Modal>

              <Pressable 
               onPress={() => navigation.navigate("Login")}
              style={style.botal}>
                <Text>Sair da conta</Text>
              </Pressable>
              <Pressable onPress={() => navigation.goBack()}>
                <Text style={style.titulomodal1}>Voltar à página anterior</Text>
              </Pressable>

              
            </View>
          </View>
    </View>
  );
}
