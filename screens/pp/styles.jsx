import { StyleSheet } from "react-native";

export const pagina_inicial = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 20,
    backgroundColor: '#38B6FF',
},
imagem: {
    width: '40%',
    height: '40%',
  
    marginTop: 40,
},
container2: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
},
textoPrincipal: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333333',  // Cor escura para contraste
    textAlign: 'center',
    marginBottom: 20,
},
botao: {
    backgroundColor: '#f5f5f5',  // Cor azul sólida
    borderRadius: 25,
    paddingVertical: 12,
    paddingHorizontal: 50,
    marginBottom: 15,
    elevation: 3,  // Sombra leve para destaque
},
textoBotao: {
    fontSize: 18,
    color: '#000303',  // Texto branco para contraste
    fontWeight: 'bold',
    textAlign: 'center',
},
inscrever: {
    borderWidth: 2,
    borderColor: '#008CBA',  // Borda azul
    borderRadius: 25,
    paddingVertical: 12,
    paddingHorizontal: 50,
    marginBottom: 20,
},
textoInscrever: {
    fontSize: 18,
    color: '#008CBA',  // Texto azul para consistência com o botão
    fontWeight: 'bold',
    textAlign: 'center',
},
imagem2: {
    width: '20%',
    height: '35%',
    resizeMode: 'cover',
},
});