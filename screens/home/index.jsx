import React from "react";
import { View, Text, Pressable, ScrollView, Image } from "react-native";
import Cabecalho from "../../components/header";
import styles from "./style";
import FooterComponent from "../../components/footer";
import Icon from "react-native-vector-icons/MaterialIcons";
import { useNavigation } from "@react-navigation/native";



export default function HomePage() {
  const navigation = useNavigation();

  return (

    <ScrollView contentContainerStyle={styles.container}>
      <Cabecalho />

      <View style={styles.secao}>
        <Text style={styles.titulo}>Bem-vindo ao Preparavest</Text>
        <Text style={styles.texto}>
          Encontre tudo o que você precisa para se preparar para o vestibular:
          conteúdos, provas anteriores, informações gerais, dicas de estudos e estatísticas.
        </Text>
      </View>

      {/* Banner Principal */}
      <Image
        style={styles.logo}
        source={require("../../assets/Professores/BannerPrincipal.jpeg")}
      />
      
{/* Seção de Conteúdos */}
<View style={styles.secao1}>
  <Text style={styles.titulo1}>Nossos Conteúdos</Text>
  <View style={styles.cardContainer}>
    <View style={styles.card}>
      <Icon name="book" size={30} color="#00796b" />
      <Text style={styles.cardtitulo}>Conteúdos por Matéria</Text>
      <Text style={styles.cardTexto}>
        Acesse resumos e dicas dos principais conteúdos cobrados em
        vestibulares.
      </Text>
    </View>

    <View style={styles.card}>
      <Icon name="assignment" size={30} color="#00796b" />
      <Text style={styles.cardtitulo}>Provas Anteriores</Text>
      <Text style={styles.cardTexto}>
        Baixe e resolva provas anteriores de vestibulares renomados.
      </Text>
    </View>

    <View style={styles.card}>
      <Icon name="info" size={30} color="#00796b" />
      <Text style={styles.cardtitulo}>Informações Gerais</Text>
      <Text style={styles.cardTexto}>
        Tudo que você precisa saber sobre os vestibulares.
      </Text>
    </View>
  </View>
</View>


      {/* Seção de Estatísticas */}
      <View style={styles.secao2}>
        <Text style={styles.titulo1}>Estatísticas do Vestibular</Text>
        <View style={styles.cardContainer1}>
          {[
            {
              number: "50%",
              text: "das questões de Matemática são relacionadas a Funções.",
            },
            {
              number: "30%",
              text: "das provas de Ciências Humanas abordam temas de Geopolítica.",
            },
          ].map((stat, index) => (
            <View key={index} style={styles.card1}>
              <Text style={styles.numero}>{stat.number}</Text>
              <Text style={styles.texto1}>{stat.text}</Text>
            </View>
          ))}
        </View>
      </View>

      {/* Seção de Dicas */}
      <View style={styles.secao3}>
        <Text style={styles.titulo1}>Dicas de Estudo</Text>
        <View style={styles.cardContainer2}>
          {[
            "Crie um cronograma de estudos e dedique mais tempo às suas matérias de dificuldade.",
            "Resolva o máximo de questões de provas anteriores para se acostumar com o formato.",
          ].map((tip, index) => (
            <View key={index} style={styles.tipCard}>
              <Icon name="star" size={20} color="#ffb300" />
              <Text style={styles.tipText}>{tip}</Text>
            </View>
          ))}
        </View>
      </View>

      {/* Rodapé */}
      <FooterComponent />
    </ScrollView>
  );
}
