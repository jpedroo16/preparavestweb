import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center', 
  },
  logo: {
    width: '80%',
    height: width * 0.35, 
    resizeMode: 'cover',
    borderRadius: 15,
    marginBottom: 20,
  },
  secao: {
    width: '100%',
    maxWidth: 800,
    padding: 30,
  
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 20,
   
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 5,
  },
  titulo: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#00796b',
    marginBottom: 10,
    textAlign: 'center',
  },
  texto: {
    fontSize: 16,
    color: '#004d40',
    textAlign: 'center',
  },
 secao1: {
    width: '100%',
    maxWidth: 800, // Limita a largura
    padding: 30,
    backgroundColor: '#ffffff',
    borderRadius: 10,
    marginBottom: 20,
  },
  titulo1: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
    textAlign: 'center',
  },
  cardContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  card: {
    backgroundColor: '#f1f8e9',
    width: '30%', // Ajuste a largura para não esticar
    padding: 20,
    borderRadius: 10,
    elevation: 5,
    marginBottom: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  cardtitulo: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#33691e',
    marginTop: 10,
    marginBottom: 5,
    textAlign: 'center',
  },
  cardTexto: {
    fontSize: 16,
    color: '#555',
    textAlign: 'center',
  },
  secao2: {
    width: '100%',
    maxWidth: 800, // Limita a largura
    padding: 30,
    backgroundColor: '#38B6FF',
    borderRadius: 10,
    marginBottom: 20,
  },
  cardContainer1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  card1: {
    backgroundColor: '#ffffff',
    width: '45%', // Ajuste a largura para não esticar
    padding: 20,
    borderRadius: 10,
    elevation: 5,
    alignItems: 'center',
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  numero: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#333',
  },
  texto1: {
    fontSize: 16,
    color: '#555',
    textAlign: 'center',
  },
  secao3: {
    width: '100%',
    maxWidth: 800, // Limita a largura
    padding: 30,
    backgroundColor: '#ffffff',
    borderRadius: 10,
    marginBottom: 20,
  },
  cardContainer2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  tipCard: {
    backgroundColor: '#f1f8e9',
    width: '48%', // Ajuste a largura para não esticar
    padding: 20,
    borderRadius: 10,
    elevation: 5,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  tipText: {
    fontSize: 16,
    color: '#555',
    textAlign: 'center',
  },
});

export default styles;