import React, { useState } from 'react';
import { View, Text, SectionList, TouchableOpacity, ScrollView, Modal, Linking, TextInput } from 'react-native';
import { Picker } from '@react-native-picker/picker'; // Adicione este import para o Picker
import Icon from 'react-native-vector-icons/MaterialIcons';
import { styles } from './style';
import Cabecalho from '../../components/header';
import FooterComponent from '../../components/footer';

const examData = [
  {
    title: 'ENEM',
    data: [
      { year: 2023, provas: [{ type: 'DIA 1', link: 'https://download.inep.gov.br/enem/provas_e_gabaritos/2023_PV_impresso_D1_CD1.pdf' }, { type: 'DIA 2', link: 'https://download.inep.gov.br/enem/provas_e_gabaritos/2023_PV_impresso_D2_CD5.pdf' }] },
      { year: 2022, provas: [{ type: 'DIA 1', link: 'https://s1.static.brasilescola.uol.com.br/enem/2022/11/1-dia-caderno-1-azul-enem-2022.pdf' }, { type: 'DIA 2', link: 'https://s2.static.brasilescola.uol.com.br/enem/2022/11/2-dia-enem-2022-prova-amarela.pdf' }] },
      { year: 2021, provas: [{ type: 'DIA 1', link: 'https://download.inep.gov.br/enem/provas_e_gabaritos/2021_PV_impresso_D1_CD1.pdf' }, { type: 'DIA 2', link: 'https://download.inep.gov.br/enem/provas_e_gabaritos/2021_PV_impresso_D2_CD5.pdf' }] },
      { year: 2020, provas: [{ type: 'DIA 1', link: 'https://download.inep.gov.br/enem/provas_e_gabaritos/2020_PV_impresso_D1_CD1.pdf' }, { type: 'DIA 2', link: 'https://download.inep.gov.br/enem/provas_e_gabaritos/2020_PV_impresso_D2_CD5.pdf' }] },

    ],
  },
  {
    title: 'Fuvest (Usp)',
    data: [
      { year: 2023, provas: [{ type: 'Primeira Fase', link: 'https://acervo.fuvest.br/fuvest/2023/fuvest2023_primeira_fase_prova_V.pdf' },     { type: 'Segunda fase-DIA 1', link: 'https://acervo.fuvest.br/fuvest/2023/fuvest_2023_segunda_fase_dia_1.pdf' },{ type: 'Segunda fase-DIA 2', link: 'https://acervo.fuvest.br/fuvest/2023/fuvest_2023_segunda_fase_dia_2.pdf' }] },
      { year: 2022, provas: [{ type: 'Primeira Fase', link: 'https://www.fuvest.br/wp-content/uploads/fuvest_2022_primeira_fase_tipo_K.pdf' }, { type: 'Segunda fase-DIA 1', link: 'https://acervo.fuvest.br/fuvest/2022/fuvest_2022_segunda_fase_dia_1.pdf' },{ type: 'Segunda fase-DIA 2', link: 'https://acervo.fuvest.br/fuvest/2022/fuvest_2022_segunda_fase_dia_2.pdf' }] },
      { year: 2021, provas: [{ type: 'Primeira Fase', link: 'https://acervo.fuvest.br/fuvest/2021/fuvest_2021_primeira_fase.pdf' },            { type: 'Segunda fase-DIA 1', link: 'https://acervo.fuvest.br/fuvest/2021/fuv2021_2fase_dia_1.pdf' },           { type: 'Segunda fase-DIA 2', link: 'https://acervo.fuvest.br/fuvest/2021/fuv2021_2fase_dia_2.pdf' }] },
      { year: 2020, provas: [{ type: 'Primeira Fase', link: 'https://acervo.fuvest.br/fuvest/2020/fuvest_2020_primeira_fase_prova_V.pdf' },    { type: 'Segunda fase-DIA 1', link: 'https://acervo.fuvest.br/fuvest/2020/fuv2020_2fase_dia_1.pdf' },           { type: 'Segunda fase-DIA 2', link: 'https://acervo.fuvest.br/fuvest/2020/fuv2020_2fase_dia_2.pdf' }] },

    ],
  },
  {
    title: 'Comvest (Unicamp)',
    data: [
      { year: 2023, provas: [{ type: 'Primeira Fase', link: 'https://www.comvest.unicamp.br/vest2023/F1/f12023Q_Z.pdf' }]},
      { year: 2022, provas: [{ type: 'Primeira Fase', link: 'https://www.comvest.unicamp.br/vest2022/F1/f12022Q_X.pdf' }]}, 
      { year: 2021, provas: [{ type: 'Primeira Fase', link: 'https://www.comvest.unicamp.br/vest2021/F1/f12021Q_Z.pdf' }]}, 
      { year: 2020, provas: [{ type: 'Primeira Fase', link: 'https://www.comvest.unicamp.br/vest2020/F1/f12020Q_X.pdf' }]},

    ],
  },
  {
    title: 'Vunesp (Unesp)',
    data: [
      { year: 2023, provas: [{ type: 'Prova 1', link: 'https://guiadoestudante.abril.com.br/wp-content/uploads/sites/4/2023/11/prova-unesp-2023.pdf' }, { type: 'Prova 2', link: 'https://guiadoestudante.abril.com.br/wp-content/uploads/sites/4/2023/11/prova-segunda-fase-unesp-2023.pdf' }] },
      { year: 2022, provas: [{ type: 'Prova 1 versão 1', link: 'https://vestibular.unesp.br/Home/documentos/provafase1_biologicas' }, { type: 'Prova 1 versão 2', link: 'https://vestibular.unesp.br/Home/documentos/provafase1_exatashumanas.pdf' }, ] },
      { year: 2021, provas: [{ type: 'Prova 1', link: 'https://www.curso-objetivo.br/vestibular/resolucao-comentada/unesp/2021/1fase/1dia/UNESP2021_1fase_prova.pdf' }, { type: 'Prova 2', link: 'https://vestibular.unesp.br/Home/2021/caderno_2afase_unesp2021_versao_1.pdf' }] },
      { year: 2020, provas: [{ type: 'Prova 1', link: 'https://vestibular.unesp.br/Home/2020/unesp_caderno_de_questoes_prova_de_conhecimentos_gerais_15_nov_2019__v1.pdf' }, { type: 'Prova 2 versão 1', link: 'https://vestibular.unesp.br/Home/unesp-2a-fase-2020-caderno_ciencias_humanas.pdf' }, { type: 'Prova 2 versão 2', link: 'https://vestibular.unesp.br/Home/unesp-2a-fase-2020-caderno_ciencias_natur_matem.pdf' }, { type: 'Prova 2 versão 3', link: 'https://vestibular.unesp.br/Home/unesp-2a-fase-2020-caderno-linguagens.pdf' }] },

    ],
  },
];



const ExamListScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedProvas, setSelectedProvas] = useState([]);
  const [selectedYear, setSelectedYear] = useState(null);
  const [acertos, setAcertos] = useState({
    linguagens: '',
    humanas: '',
    matematica: '',
    natureza: '',
    redacao: ''
  });
  const [pesos, setPesos] = useState({
    linguagens: '',
    humanas: '',
    matematica: '',
    natureza: '',
    redacao: ''
  });

  const openLink = (url) => {
    Linking.openURL(url).catch((err) => console.error("Error opening link: ", err));
  };

  const openModal = (provas, year) => {
    setSelectedProvas(provas);
    setSelectedYear(year);
    setModalVisible(true);
  };

  const handleAcertoChange = (text, area) => {
    const regex = /^[0-9,]*$/; // Permitir apenas números e vírgulas
    if (regex.test(text) && text.length <= 6) { // Limitar a 6 caracteres
      setAcertos({ ...acertos, [area]: text });
    }
  };

  // Função para validar o peso, limitando entre 1 e 5 ou permitindo campo vazio
  const handlePesoChange = (text, area) => {
    const peso = parseInt(text);
    if ((peso >= 1 && peso <= 5) || text === '') {
      setPesos({ ...pesos, [area]: text });
    }
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.itemContainer} onPress={() => openModal(item.provas, item.year)}>
      <View style={styles.itemContent}>
        <Icon name="picture-as-pdf" size={30} color="#FFF" />
        <View style={styles.textContainer}>
          <Text style={styles.yearText}>Prova {item.year}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  const renderSectionHeader = ({ section }) => (
    <Text style={styles.sectionHeader}>{section.title}</Text>
  );

  return (
    <View style={styles.outerContainer}>
      <ScrollView>
        <View style={styles.container}>
          <Cabecalho />
           
          {/* Calculadora */}
          <View style= {styles.ViewRow}>
          
          <View style={styles.calculadoraContainer}>
            <Text style={styles.calculadoraTitle}>Calculadora de Média - ENEM</Text>
            <Text style={styles.calculadoraLabel}>Insira as suas notas e o peso para cada área:</Text>

            <Text style={styles.areaLabel}>Linguagens</Text>
            <View style={styles.inputRow}>
              <TextInput
                style={styles.calculadoraInput}
                keyboardType="numeric"
                value={acertos.linguagens}
                onChangeText={(text) => handleAcertoChange(text, 'linguagens')}
              />
              <TextInput
                style={styles.pesoInput}
                keyboardType="numeric"
                value={pesos.linguagens}
                onChangeText={(text) => handlePesoChange(text, 'linguagens')}
              />
            </View>

            <Text style={styles.areaLabel}>Humanas</Text>
            <View style={styles.inputRow}>
              <TextInput
                style={styles.calculadoraInput}
                keyboardType="numeric"
                value={acertos.humanas}
                onChangeText={(text) => handleAcertoChange(text, 'humanas')}
              />
              <TextInput
                style={styles.pesoInput}
                keyboardType="numeric"
                value={pesos.humanas}
                onChangeText={(text) => handlePesoChange(text, 'humanas')}
              />
            </View>

     
            <Text style={styles.areaLabel}>Matemática</Text>
            <View style={styles.inputRow}>
              <TextInput
                style={styles.calculadoraInput}
                keyboardType="numeric"
                value={acertos.matematica}
                onChangeText={(text) => handleAcertoChange(text, 'matematica')}
              />
              <TextInput
                style={styles.pesoInput}
                keyboardType="numeric"
                value={pesos.matematica}
                onChangeText={(text) => handlePesoChange(text, 'matematica')}
              />
            </View>


            <Text style={styles.areaLabel}>Natureza</Text>
            <View style={styles.inputRow}>
              <TextInput
                style={styles.calculadoraInput}
                keyboardType="numeric"
                value={acertos.natureza}
                onChangeText={(text) => handleAcertoChange(text, 'natureza')}
              />
              <TextInput
                style={styles.pesoInput}
                keyboardType="numeric"
                value={pesos.natureza}
                onChangeText={(text) => handlePesoChange(text, 'natureza')}
              />
            </View>

           
            <Text style={styles.areaLabel}>Redação</Text>
            <View style={styles.inputRow}>
              <TextInput
                style={styles.calculadoraInput}
                keyboardType="numeric"
                value={acertos.redacao}
                onChangeText={(text) => handleAcertoChange(text, 'redacao')}
              />
              <TextInput
                style={styles.pesoInput}
                keyboardType="numeric"
                value={pesos.redacao}
                onChangeText={(text) => handlePesoChange(text, 'redacao')}
              />
            </View>

            {/* Botão */}
            <TouchableOpacity style={styles.calculadoraButton}>
              <Text style={styles.calculadoraButtonText}>Calcular Média Final</Text>
            </TouchableOpacity>
          </View>



          <View style={styles.info}>
          <Text style={styles.informacaoTitle}>Informações</Text>
              <Text style={styles.informacaoText}>
                No ENEM, as áreas do conhecimento têm pesos variados de acordo com o curso e a instituição escolhidos:
              </Text>
              <Text style={styles.informacaoText}>• Linguagens: Peso variável, geralmente entre 1 e 3</Text>
              <Text style={styles.informacaoText}>• Ciências Humanas: Peso variável, geralmente entre 1 e 3</Text>
              <Text style={styles.informacaoText}>• Matemática: Peso elevado em cursos de exatas, de 3 a 5</Text>
              <Text style={styles.informacaoText}>• Ciências da Natureza: Peso médio a alto, entre 2 e 4</Text>
              <Text style={styles.informacaoText}>• Redação: Importante para todos os cursos, peso de 1 a 2</Text>

          </View>
        </View>
      </View>

        <Text style={styles.title}>Provas de Vestibulares</Text>

{/* Containers lado a lado */}
<View style={styles.row}>
  {examData.slice(0, 2).map((exam, index) => (
    <View key={index} style={styles.examContainer}>
      <SectionList
        sections={[exam]}
        renderItem={renderItem}
        renderSectionHeader={renderSectionHeader}
        keyExtractor={(item, index) => `${item.year}-${index}`}
      />
    </View>
  ))}
</View>

<View style={styles.row}>
  {examData.slice(2).map((exam, index) => (
    <View key={index} style={styles.examContainer}>
      <SectionList
        sections={[exam]}
        renderItem={renderItem}
        renderSectionHeader={renderSectionHeader}
        keyExtractor={(item, index) => `${item.year}-${index}`}
      />
    </View>
  ))}
  </View>


        {/* Modal para exibir opções de provas */}
        <Modal
          visible={modalVisible}
          animationType="slide"
          transparent={true}
          onRequestClose={() => setModalVisible(false)}
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Text style={styles.modalTitle}>Escolha a prova de {selectedYear}</Text>
              {selectedProvas.map((prova, index) => (
                <TouchableOpacity
                  key={index}
                  style={styles.button}
                  onPress={() => {
                    setModalVisible(false);
                    openLink(prova.link);
                  }}
                >
                  <Text style={styles.buttonText}>{prova.type}</Text>
                </TouchableOpacity>
              ))}
              <TouchableOpacity style={styles.buttonClose} onPress={() => setModalVisible(false)}>
                <Text style={styles.buttonText}>Fechar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
        <FooterComponent />
      </ScrollView>
    </View>
  );
};

export default ExamListScreen;