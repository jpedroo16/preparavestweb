import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './style';
import FooterComponent from '../../components/footer';
import Cabecalho from '../../components/header';

const statisticsData = {

  Enem: {
  Matemática: {
    descricao: 'Estatísticas dos principais tópicos de Matemática no ENEM.',
    dados: [
      { tópico: 'Matemática básica', porcentagem: '33,8%' },
      { tópico: 'Estatística', porcentagem: '12,5%' },
      { tópico: 'Geometria espacial', porcentagem: '11,4%' },
      { tópico: 'Funções', porcentagem: '10,8%' },
      { tópico: 'Geometria plana', porcentagem: '8%' },
    ],
  },
  Física: {
    descricao: 'Principais tópicos abordados em Física no ENEM.',
    dados: [
      { tópico: 'Eletrodinâmica', porcentagem: '20,3%' },
      { tópico: 'Termologia', porcentagem: '15,5%' },
      { tópico: 'Ondulatória', porcentagem: '13,5%' },
      { tópico: 'Cinemática', porcentagem: '11,5%' },
      { tópico: 'Óptica', porcentagem: '8,8%' },
    ],
  },
  Química: {
    descricao: 'Tópicos relevantes de Química no ENEM.',
    dados: [
      { tópico: 'Moléculas e propriedades', porcentagem: '9,7%' },
      { tópico: 'Propriedades dos compostos orgânicos', porcentagem: '7,3%' },
      { tópico: 'Separação de misturas', porcentagem: '6,5%' },
      { tópico: 'Estequiometria', porcentagem: '6,5%' },
      { tópico: 'Funções inorgânicas', porcentagem: '6,5%' },
      { tópico: 'Hidrocarbonetos', porcentagem: '6,5%' },
      { tópico: 'Átomos', porcentagem: '6,5%' },
    ],
  },
  Biologia: {
    descricao: 'Principais tópicos de Biologia no ENEM.',
    dados: [
      { tópico: 'Ecologia', porcentagem: '26,2%' },
      { tópico: 'Botânica', porcentagem: '9,2%' },
      { tópico: 'Bioenergética', porcentagem: '7,7%' },
      { tópico: 'Fisiologia humana', porcentagem: '6,9%' },
      { tópico: 'Citologia', porcentagem: '6,2%' },
    ],
  },
  História: {
    descricao: 'Tópicos mais cobrados em História no ENEM.',
    dados: [
      { tópico: 'Brasil Colônia', porcentagem: '13,7%' },
      { tópico: 'Idade Moderna', porcentagem: '13,7%' },
      { tópico: 'Idade Média', porcentagem: '9,8%' },
      { tópico: 'Tempo Presente', porcentagem: '9,8%' },
      { tópico: 'Estado Novo e Populismo', porcentagem: '8,8%' },
    ],
  },
  Geografia: {
    descricao: 'Tópicos essenciais de Geografia no ENEM.',
    dados: [
      { tópico: 'Geopolítica', porcentagem: '12,7%' },
      { tópico: 'Espaço agrário', porcentagem: '12,7%' },
      { tópico: 'Espaço urbano', porcentagem: '10,6%' },
      { tópico: 'Geologia', porcentagem: '7%' },
      { tópico: 'Clima', porcentagem: '4,9%' },
    ],
  },
  Filosofia: {
    descricao: 'Principais tópicos de Filosofia no ENEM.',
    dados: [
      { tópico: 'Filosofia antiga', porcentagem: '23,6%' },
      { tópico: 'Filosofia moderna', porcentagem: '16,4%' },
      { tópico: 'Mal e justiça', porcentagem: '10,9%' },
      { tópico: 'Filosofia política', porcentagem: '7,3%' },
      { tópico: 'Existencialismo', porcentagem: '7,3%' },
    ],
  },
  Sociologia: {
    descricao: 'Tópicos relevantes de Sociologia no ENEM.',
    dados: [
      { tópico: 'Movimentos sociais', porcentagem: '18,5%' },
      { tópico: 'Estado e cidadania', porcentagem: '16%' },
      { tópico: 'Cultura e sociedade', porcentagem: '16%' },
      { tópico: 'Sociologia brasileira', porcentagem: '16%' },
      { tópico: 'Sociologia contemporânea', porcentagem: '9,9%' },
    ],
  },
  'Língua Portuguesa': {
    descricao: 'Principais tópicos de Língua Portuguesa no ENEM.',
    dados: [
      { tópico: 'Gêneros textuais', porcentagem: '39,8%' },
      { tópico: 'Introdução à Língua Portuguesa', porcentagem: '23,1%' },
      { tópico: 'Linguagem culta e coloquial', porcentagem: '9,3%' },
      { tópico: 'Contexto e imagens', porcentagem: '7,4%' },
      { tópico: 'Funções da linguagem', porcentagem: '6,5%' },
    ],
  },
  Literatura: {
    descricao: 'Tópicos relevantes de Literatura no ENEM.',
    dados: [
      { tópico: 'Literatura contemporânea', porcentagem: '33,3%' },
      { tópico: 'Interpretação de músicas e poemas', porcentagem: '28,3%' },
      { tópico: 'Modernismo', porcentagem: '23,3%' },
    ],
  },
  Inglês: {
    descricao: 'Tópicos de Inglês mais frequentes no ENEM.',
    dados: [
      { tópico: 'Gramática e interpretação', porcentagem: '95,1%' },
      { tópico: 'Vocabulário', porcentagem: '4,9%' },
    ],
  },
  Espanhol: {
    descricao: 'Tópicos de Espanhol no ENEM.',
    dados: [
      { tópico: 'Gramática', porcentagem: '91,1%' },
      { tópico: 'Vocabulário', porcentagem: '8,9%' },
    ],
  },
},

Fuvest:{
  Matemática: {
    descricao: 'Estatísticas dos principais tópicos de Matemática na FUVEST.',
    dados: [
      { tópico: 'Matemática básica', porcentagem: '15,4%' },
      { tópico: 'Trigonometria', porcentagem: '10,9%' },
      { tópico: 'Geometria espacial', porcentagem: '10,9%' },
      { tópico: 'Geometria plana', porcentagem: '9,6%' },
      { tópico: 'Funções', porcentagem: '9,6%' },
    ],
  },
  Física: {
    descricao: 'Principais tópicos abordados em Física na FUVEST.',
    dados: [
      { tópico: 'Termologia', porcentagem: '13,3%' },
      { tópico: 'Eletrodinâmica', porcentagem: '12,8%' },
      { tópico: 'Trabalho e energia', porcentagem: '11,8%' },
      { tópico: 'Ondulatória', porcentagem: '8,4%' },
      { tópico: 'Óptica', porcentagem: '7,4%' },
    ],
  },
  Química: {
    descricao: 'Tópicos relevantes de Química na FUVEST.',
    dados: [
      { tópico: 'Equilíbrio químico', porcentagem: '11,3%' },
      { tópico: 'Reações orgânicas', porcentagem: '11,3%' },
      { tópico: 'Estequiometria', porcentagem: '8,7%' },
      { tópico: 'Átomos', porcentagem: '8,7%' },
      { tópico: 'Moléculas e propriedades', porcentagem: '7,3%' },
      
    ],
  },
  Biologia: {
    descricao: 'Principais tópicos de Biologia na FUVEST.',
    dados: [
      { tópico: 'Ecologia', porcentagem: '22,5%' },
      { tópico: 'Genética', porcentagem: '10,4%' },
      { tópico: 'Botânica', porcentagem: '9,8%' },
      { tópico: 'Microbiologia', porcentagem: '7,5%' },
      { tópico: 'Fisiologia humana', porcentagem: '6,9%' },
    ],
  },
  História: {
    descricao: 'Tópicos mais cobrados em História na FUVEST.',
    dados: [
      { tópico: 'Brasil Colônia', porcentagem: '14,3%' },
      { tópico: 'Idade Contemporânea', porcentagem: '14,3%' },
      { tópico: 'Idade Moderna', porcentagem: '11,8%' },
      { tópico: 'Idade Antiga', porcentagem: '9,9%' },
      { tópico: 'Século 20', porcentagem: '9,3%' },
    ],
  },
  Geografia: {
    descricao: 'Tópicos essenciais de Geografia na FUVEST.',
    dados: [
      { tópico: 'Espaço brasileiro', porcentagem: '9,3%' },
      { tópico: 'Espaço agrário', porcentagem: '9,3%' },
      { tópico: 'Geopolítica', porcentagem: '8,0%' },
      { tópico: 'Questões ambientais', porcentagem: '7,3%' },
      { tópico: 'Biomas', porcentagem: '7,3%' },
    ],
  },
  Filosofia: {
    descricao: 'Principais tópicos de Filosofia na FUVEST.',
    dados: [
      { tópico: 'Conhecimentos gerais', porcentagem: '-' },
      { tópico: 'Filosofia Antiga', porcentagem: '-' },
      { tópico: 'Filosofia Política', porcentagem: '-' },
      { tópico: 'Filosofia Moderna', porcentagem: '-' },
      { tópico: 'Psicanálise e Teoria Crítica', porcentagem: '-' },
    ],
  },
  Sociologia: {
    descricao: 'Tópicos relevantes de Sociologia na FUVEST.',
    dados: [
      { tópico: 'Sociologia política', porcentagem: '29,2%' },
      { tópico: 'Cultura e sociedade', porcentagem: '25,0%' },
      { tópico: 'Movimentos sociais', porcentagem: '16,7%' },
      { tópico: 'Teoria sociológica ', porcentagem: '8,3%' },
      { tópico: 'Estado e Cidadania', porcentagem: '8,3%' },
    ],
  },
  'Língua Portuguesa': {
    descricao: 'Principais tópicos de Língua Portuguesa na FUVEST.',
    dados: [
      { tópico: 'Introdução à Língua Portuguesa', porcentagem: '21,0%' },
      { tópico: 'Gêneros textuais', porcentagem: '17,6%' },
      { tópico: 'Contexto e imagens', porcentagem: '14,3%' },
      { tópico: 'Verbos', porcentagem: '7,6%' },
      { tópico: 'Análise sintática ', porcentagem: '6,7%' }
    ],
  },
  Literatura: {
    descricao: 'Tópicos relevantes de Literatura na FUVEST.',
    dados: [
      { tópico: 'Escolas Literárias', porcentagem: '38,6%' },
      { tópico: 'Modernismo', porcentagem: '30,7%' },
      { tópico: 'Literatura Contemporânea', porcentagem: '11,4%' },
      { tópico: 'Intertextualidade e música brasileira', porcentagem: '11,4%' },
      { tópico: 'Introdução à Literatura', porcentagem: '7,9%' }
    ],
  },
  Inglês: {
    descricao: 'Tópicos de Inglês mais frequentes na FUVEST.',
    dados: [
      { tópico: 'Gramática e interpretação', porcentagem: '83,3%' },
      { tópico: 'Vocabulário', porcentagem: '13,5%' },
      { tópico: 'Adjetivos e pronomes', porcentagem: '3,1%' }
    ],
  },
},

Unicamp:{
  Matemática: {
    descricao: 'Estatísticas dos principais tópicos de Matemática na UNICAMP.',
    dados: [
      { tópico: 'Matemática básica', porcentagem: '13,0%' },
      { tópico: 'Trigonometria', porcentagem: '10,7%' },
      { tópico: 'Funções', porcentagem: '9,6%' },
      { tópico: 'Sequências e progressões', porcentagem: '8,5%' },
      { tópico: 'Geometria plana', porcentagem: '7,9%' },
    ],
  },
  Física: {
    descricao: 'Principais tópicos abordados em Física na UNICAMP.',
    dados: [
      { tópico: 'Cinemática', porcentagem: '19,0%' },
      { tópico: 'Eletrodinâmica', porcentagem: '13,4%' },
      { tópico: 'Trabalho e energia', porcentagem: '11,3%' },
      { tópico: 'Termologia', porcentagem: '9,2%' },
      { tópico: 'Óptica', porcentagem: '8,5%' },
    ],
  },
  Química: {
    descricao: 'Tópicos relevantes de Química na UNICAMP.',
    dados: [
      { tópico: 'Estequiometria', porcentagem: '12,4%' },
      { tópico: 'Soluções', porcentagem: '10,6%' },
      { tópico: 'Meio ambiente', porcentagem: '10,6%' },
      { tópico: 'Estudo da matéria', porcentagem: '8,8%' },
      { tópico: 'Equilíbrio químico', porcentagem: '8,0%' },
    
    ],
  },
  Biologia: {
    descricao: 'Principais tópicos de Biologia na UNICAMP.',
    dados: [
      { tópico: 'Ecologia', porcentagem: '19,5%' },
      { tópico: 'Zoologia', porcentagem: '11,0%' },
      { tópico: 'Evolução', porcentagem: '10,5' },
      { tópico: 'Microbiologia', porcentagem: '10,0%' },
      { tópico: 'Botânica', porcentagem: '9,5%' },
    ],
  },
  História: {
    descricao: 'Tópicos mais cobrados em História na UNICAMP.',
    dados: [
      { tópico: 'Idade Moderna', porcentagem: '18,4%' },
      { tópico: 'Brasil Colônia', porcentagem: '12,3%' },
      { tópico: 'Brasil Monárquico', porcentagem: '10,6%' },
      { tópico: 'Idade Contemporânea', porcentagem: '10,1%' },
      { tópico: 'Guerras e conflitos do século 20', porcentagem: '7,8%' },
    ],
  },
  Geografia: {
    descricao: 'Tópicos essenciais de Geografia na UNICAMP.',
    dados: [
      { tópico: 'Geopolítica', porcentagem: '13,4%' },
      { tópico: 'Volta ao Mundo', porcentagem: '8,6%' },
      { tópico: 'Espaço urbano', porcentagem: '7,5%' },
      { tópico: 'Biomas', porcentagem: '7,0%' },
      { tópico: 'Espaço agrário', porcentagem: '6,5%' },
    ],
  },
  Filosofia: {
    descricao: 'Principais tópicos de Filosofia na UNICAMP.',
    dados: [
      { tópico: 'Filosofia moderna', porcentagem: '25,0%' },
      { tópico: 'Filosofia política', porcentagem: '25,0%' },
      { tópico: 'Filosofia antiga', porcentagem: '18,8%' },
      { tópico: 'Conhecimentos Gerais', porcentagem: '18,8%' },
      { tópico: 'Mal e justiça', porcentagem: '12,5%' },
    ],
  },
  Sociologia: {
    descricao: 'Tópicos relevantes de Sociologia na UNICAMP.',
    dados: [
      { tópico: 'Movimentos sociais', porcentagem: '28,6%' },
      { tópico: 'Teoria Sociológica', porcentagem: '23,8%' },
      { tópico: 'Cultura e sociedade', porcentagem: '23,8%' },
      { tópico: 'Sociologia brasileira', porcentagem: '14,3%' },
      { tópico: 'Estado e Cidadania', porcentagem: '9,5%' },
    ],
  },
  'Língua Portuguesa': {
    descricao: 'Principais tópicos de Língua Portuguesa na UNICAMP.',
    dados: [
      { tópico: 'Gêneros textuais', porcentagem: '34,7%' },
      { tópico: 'Gramática e interpretação', porcentagem: '23,0%' },
      { tópico: 'Introdução à Língua Portuguesa', porcentagem: '12,2%' },
      { tópico: 'Texto e contexto', porcentagem: '7,5%' },
      { tópico: 'Morfologia', porcentagem: '6,1%' },
    ],
  },
  Literatura: {
    descricao: 'Tópicos relevantes de Literatura na UNICAMP.',
    dados: [
      { tópico: 'Escolas Literárias', porcentagem: '40,5%' },
      { tópico: 'Modernismo', porcentagem: '25,0%' },
      { tópico: 'Introdução à Literatura', porcentagem: '20,3%' },
      { tópico: 'Literatura contemporânea', porcentagem: '14,2%' },
    ],
  },
  Inglês: {
    descricao: 'Tópicos de Inglês mais frequentes na UNICAMP.',
    dados: [
      { tópico: 'Gramática e interpretação', porcentagem: '92,2%' },
      { tópico: 'Vocabulário', porcentagem: '6,2%' },
      { tópico: 'Morfologia - substantivo, adjetivos e pronomes', porcentagem: '1,6%' },
    ],
  },
},

Unesp:{

  Matemática: {
    descricao: 'Estatísticas dos principais tópicos de Matemática na UNESP.',
    dados: [
      { tópico: 'Matemática básica', porcentagem: '22,3%' },
      { tópico: 'Funções', porcentagem: '12,8%' },
      { tópico: 'Geometria plana', porcentagem: '12,2%' },
      { tópico: 'Geometria espacial', porcentagem: '10,8%' },
      { tópico: 'Trigonometria', porcentagem: '10,8%' },
    ],
  },
  Física: {
    descricao: 'Principais tópicos abordados em Física na UNESP.',
    dados: [
      { tópico: 'Cinemática', porcentagem: '15,2%' },
      { tópico: 'Eletrodinâmica', porcentagem: '12,6%' },
      { tópico: 'Óptica', porcentagem: '11,3%' },
      { tópico: 'Termologia', porcentagem: '10,0%' },
      { tópico: 'Dinâmica', porcentagem: '9,5%' },
    ],
  },
  Química: {
    descricao: 'Tópicos relevantes de Química na UNESP.',
    dados: [
      { tópico: 'Moléculas e propriedades', porcentagem: '11,0%' },
      { tópico: 'Átomos', porcentagem: '9,2%' },
      { tópico: 'Equilíbrio químico', porcentagem: '6,9%' },
      { tópico: 'Soluções', porcentagem: '6,9%' },
      { tópico: 'Estequiometria', porcentagem: '6,4%' },
    
     
      
    ],
  },
  Biologia: {
    descricao: 'Principais tópicos de Biologia na UNESP.',
    dados: [
      { tópico: 'Ecologia', porcentagem: '11,4%' },
      { tópico: 'Genética', porcentagem: '11,0%' },
      { tópico: 'Fisiologia humana', porcentagem: '10,5%' },
      { tópico: 'Botânica', porcentagem: '9,2%' },
      { tópico: 'Bioenergética', porcentagem: '8,8%' },
      
    ],
  },
  História: {
    descricao: 'Tópicos mais cobrados em História na UNESP.',
    dados: [
      { tópico: 'Idade Moderna', porcentagem: '13,6%' },
      { tópico: 'Brasil Colônia', porcentagem: '12,7%' },
      { tópico: 'Idade Contemporânea', porcentagem: '11,8%' },
      { tópico: 'Idade Média', porcentagem: '9,8%' },
      { tópico: 'Idade Antiga', porcentagem: '8,0%' },
    ],
  },
  Geografia: {
    descricao: 'Tópicos essenciais de Geografia na UNESP.',
    dados: [
      { tópico: 'Geopolítica', porcentagem: '17,6%' },
      { tópico: 'Volta ao mundo', porcentagem: '14,2%' },
      { tópico: 'Questões ambientais', porcentagem: '7,3%' },
      { tópico: 'Espaço urbano', porcentagem: '5,6%' },
      { tópico: 'Clima', porcentagem: '5,4%' },
    ],
  },
  Filosofia: {
    descricao: 'Principais tópicos de Filosofia na UNESP.',
    dados: [
      { tópico: 'Conhecimentos gerais', porcentagem: '32,4%' },
      { tópico: 'Filosofia Moderna', porcentagem: '14,8%' },
      { tópico: 'Psicanálise e Teoria Crítica', porcentagem: '14,8%' },
      { tópico: 'Filosofia Política', porcentagem: '10,2%' },
      { tópico: 'Filosofia Antiga', porcentagem: '10,2%' },
    
    ],
  },
  Sociologia: {
    descricao: 'Tópicos relevantes de Sociologia na UNESP.',
    dados: [
      { tópico: 'Sociologia contemporânea', porcentagem: '27,3%' },
      { tópico: 'Movimentos sociais', porcentagem: '19,5%' },
      { tópico: 'Sociologia política', porcentagem: '13,0%' },
      { tópico: 'Cultura e Sociedade', porcentagem: '11,7%' },
      { tópico: 'As Ciências Sociais', porcentagem: '7,8%' },
    ],
  },
  'Língua Portuguesa': {
    descricao: 'Principais tópicos de Língua Portuguesa na UNESP.',
    dados: [
      { tópico: 'Introdução à Língua Portuguesa', porcentagem: '22,4%' },
      { tópico: 'Gramática e Interpretação', porcentagem: '13,2%' },
      { tópico: 'Figuras de linguagem', porcentagem: '12,6%' },
      { tópico: 'Gêneros textuais', porcentagem: '10,5%' },
      { tópico: 'Conjunções', porcentagem: '7,8%' }
    ],
  },
  Literatura: {
    descricao: 'Tópicos relevantes de Literatura na UNESP.',
    dados: [
      { tópico: 'Introdução à Literatura', porcentagem: '38,4%' },
      { tópico: 'Escolas Literárias', porcentagem: '36,8%' },
      { tópico: 'Modernismo', porcentagem: '21,5%' },
      { tópico: 'Literatura Contemporânea', porcentagem: '2,9%' },
      { tópico: 'Música Brasileira', porcentagem: '0,4%' },
      
    ],
  },
  Inglês: {
    descricao: 'Tópicos de Inglês mais frequentes na UNESP.',
    dados: [
      { tópico: 'Gramática e interpretação', porcentagem: '69,7%' },
      { tópico: 'Vocabulário', porcentagem: '12,5%' },
      { tópico: 'Morfologia', porcentagem: '8,9%' },
      { tópico: 'Verbos', porcentagem: '4,8%' },
      { tópico: 'Pronomes', porcentagem: '3,0%' }
    ],
  },
},

};

const EstatisticasScreen = () => {
  
  return (
    <ScrollView style={styles.container}>
    
    <View style={styles.container}>
      <Cabecalho/>
      {Object.entries(statisticsData).map(([instituicao, materias]) => (
        <View key={instituicao}>
          <Text style={styles.instituicao}>{instituicao}</Text>
          {Object.entries(materias).map(([materia, conteudo]) => (
            <View key={materia} style={styles.card}>
              <View style={styles.header}>
                <Icon name="book" size={20} color="#4F8EF7" />
                <Text style={styles.title}>{materia}</Text>
              </View>
              <Text style={styles.descricao}>{conteudo.descricao}</Text>
              {conteudo.dados.map((item, index) => (
                <View key={index} style={styles.statRow}>
                  <Text style={styles.topico}>{item.tópico}</Text>
                  <Text style={styles.porcentagem}>{item.porcentagem}</Text>
                </View>
              ))}
            </View>
          ))}
        </View>
      ))}
    </View>

  
      <FooterComponent />
    </ScrollView>
  );
};
export default EstatisticasScreen;