import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    backgroundColor: '#F4F6F8',
    alignItems: 'center',
  },
  container: {
    width: '100%',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'center',
    padding: 20,
    marginTop: 80,
    borderBottomWidth: 2,
    borderBottomColor: '#ddd',
    paddingVertical: 20,
    alignSelf: 'center', 
    width: 'fit-content', 
  },
  sectionHeader: {
    fontSize: 26,
    fontWeight: 'bold',
    backgroundColor: '#4361ee',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 8,
    color: '#FFFFFF',
    textAlign: 'center',
    marginBottom: 15,
  },
  itemContainer: {
    backgroundColor: '#ffffff',
    padding: 15, // Diminuído para dar mais leveza
    marginVertical: 8,
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 6,
  },
  itemContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textContainer: {
    marginLeft: 10, // Diminuído para um espaçamento mais compacto
  },
  yearText: {
    fontSize: 18, // Diminuído para manter harmonia
    fontWeight: 'bold',
    color: '#34495E',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
  },
  modalContent: {
    width: '50%',
    padding: 25,
    backgroundColor: '#ffffff',
    borderRadius: 12,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 10,
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#2C3E50',
  },
  button: {
    backgroundColor: '#38b6ff',
    paddingVertical: 12,
    borderRadius: 30,
    alignItems: 'center',
    marginVertical: 6,
    width: '50%',
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: '600',
  },
  buttonClose: {
    marginTop: 15,
    backgroundColor: '#B0BEC5',
    paddingVertical: 12,
    borderRadius: 30,
    alignItems: 'center',
    width: '25%',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around', // Ajustado para melhor espaçamento
    width: '100%',
    marginVertical: 15,
    marginTop: 50
  },
  examContainer: {
    flex: 0.4, // Diminuído para deixar as divs menores
    marginHorizontal: 5, // Menos espaço entre as divs
    paddingVertical: 10,
    backgroundColor: '#f0f4f8',
    borderRadius: 10,
  },
  calculadoraContainer: {
    padding: 16,
    backgroundColor: '#FFFFFF',
    marginTop: 20,
    borderRadius: 10,
    marginLeft: "-10%",
    alignItems: "center",
    width: '60%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 4,
  },
  calculadoraTitle: {
    fontSize: 22,
    
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
    
  },
  calculadoraLabel: {
    fontSize: 15,
    color: '#777',
    marginBottom: 5,
    
  },
  areaLabel: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#4A4A4A',
    marginLeft: '-18%',
    marginTop: "1%"


  },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'left',
    justifyContent: 'space-between',
    width: '30%',
    marginBottom: "2%",
  },
  pesoPicker: {
    width: '28%',           
    height: 40,             
    borderColor: '#E0E0E0', 
    borderWidth: 1,        
    borderRadius: 8,       
    backgroundColor: '#FAFAFA', 
    color: '#333',       
    paddingHorizontal: 8,   
    fontSize: 15,          
    justifyContent: 'center', 
    overflow: 'hidden', 
  },

  
  calculadoraInput: {
    width: '58%',
    height: 40,
    borderColor: '#E0E0E0',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 12,
    fontSize: 15,
    backgroundColor: '#FAFAFA',

  },
  pesoInput: {
    width: '20%',
    height: 40,
    borderColor: '#E0E0E0',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 12,
    fontSize: 15,
    backgroundColor: '#FAFAFA',
  },
  calculadoraButton: {
    width: '35%',
    height: 42,
    backgroundColor: '#38b6ff',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    marginVertical: 12,
  },
  calculadoraButtonText: {
    color: '#FFFFFF',
    fontSize: 17,
    fontWeight: 'bold',
  },
  resultContainer: {
    marginTop: 18,
    padding: 14,
    backgroundColor: '#E8F5E9',
    borderRadius: 8,
    width: '85%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 4,
  },
  resultText: {
    fontSize: 18,
    color: '#388E3C',
    fontWeight: '600',
  },

  info:{
    padding: 16,
    backgroundColor: '#38b6ff',
    marginTop: 20,
    borderRadius: 10,
    marginLeft: "10%",
    height: "50%",
    marginTop: "15%",
    alignItems: "center",
    width: '50%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 4,

  },
  informacaoTitle: {
    fontSize: 18,

    fontWeight: 'bold',
    color: '#ffff',
    marginBottom: 8,
  },
  informacaoText: { 
    fontSize: 14,
    color: "#ffff",
  
  
    marginBottom: 4,
    marginTop: "2%"
  },
  ViewRow: {
    flexDirection:'row',
    marginTop: "2%"
  }
});