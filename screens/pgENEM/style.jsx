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
    marginTop: 10,
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
});