import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  card: {
    backgroundColor: '#FFF',
    borderRadius: 8,
    padding: 15,
    margin: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginLeft: 10,
  },
  descricao: {
    fontSize: 14,
    color: '#666',
    marginBottom: 10,
  },
  statRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 5,
  },
  topico: {
    fontSize: 16,
    color: '#333',
  },
  porcentagem: {
    fontSize: 16,
    color: '#4F8EF7',
    fontWeight: 'bold',
   
  },
  instituicao:{
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
});

export default styles;
