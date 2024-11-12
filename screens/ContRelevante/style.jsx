import { StyleSheet } from 'react-native';

export const estilo = StyleSheet.create({
  contentContainer: {
    padding: 20,
    backgroundColor: '#f8f9fa',
  },
  texto: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'center',
    padding: 20,
    marginTop: 10,
    borderBottomWidth: 2,
    borderBottomColor: '#ddd',
    paddingVertical: 20,
    alignSelf: 'center', 
    width: 'fit-content', 
  }
  ,
  
  accordionContainer: {
    marginBottom: 15,
    backgroundColor: '#ffffff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 5,
    width: "100%",
  },
  accordionHeader: (expanded) => ({
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    backgroundColor: expanded ? '#357ABD' : '#4a90e2', // Cor muda quando expandido
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  }),
  accordionTitle: {
    fontFamily: 'KollektifBold',
    fontSize: 18,
    color: '#ffffff',
  },
  arrow: (expanded) => ({
    fontSize: 18,
    color: '#ffffff',
    transform: expanded ? [{ rotate: '90deg' }] : [{ rotate: '0deg' }], // Animação da seta
  }),
  accordionContent: {
    padding: 15,
    backgroundColor: '#f1f1f1',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  texto1: {
    fontFamily: 'Kollektif',
    fontSize: 16,
    color: '#333',
    marginBottom: 10,
  },
  tituloProf: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'center',
    padding: 20,
    marginTop: 10,
    borderBottomWidth: 2,
    borderBottomColor: '#ddd',
    paddingVertical: 20,
    alignSelf: 'center', 
    width: 'fit-content', 
  },
  titulo1: {
    fontFamily: 'Roboto-Bold',
    fontWeight: 'bold',
    fontSize: 24,
    color: '#333',
    textAlign: "center",
    marginBottom: 40,
    marginTop: 20
  },

  bloco: {
    marginBottom: 50,
    textAlign: 'center',
  },
  Materias: {
    marginTop: 50,
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
    textAlign: 'center',
  },
  professores: {
    marginTop: 30,
    alignItems: 'center',
    marginBottom: 16,
  },
  Perfil: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 12,
    marginBottom: 10,
    marginRight: 250,
  },
  textosMaterias: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#555',
  },

  textoss:{
    fontSize: 16,
    fontWeight: 'bold',
    color: '#d00000',
  

},
  biografia: {
    fontSize: 14,
    color: '#777',
    marginTop: 4,
    height: 100,
    width: 300,
  },
  mat: {
    flexDirection: 'row',
    gap: 60,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container1: {
    flexDirection: 'row',
    justifyContent: 'space-between', 
    flexWrap: 'wrap', 
    margin:45
  },
  coluna: {
    flex: 1,
    marginHorizontal: 5, 
    minWidth: '48%', 
  },
});

 