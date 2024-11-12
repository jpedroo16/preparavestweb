import { StyleSheet } from "react-native";

export const footerestilo = StyleSheet.create({
    footer: {
        backgroundColor: '#38b6ff',
        paddingVertical: 10,
        paddingHorizontal: 20,
        alignItems: 'center',
        flexDirection:'row',
        justifyContent:'center',
        justifyContent:'space-between'
    },
    section: {
        marginBottom: 20,
        width: '70%',
        marginLeft:100
    },
    titulo: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#fff',
    },
    textosuporte: {
        fontSize: 12,
        color: '#fff',
        marginBottom: 20,
    },
});
