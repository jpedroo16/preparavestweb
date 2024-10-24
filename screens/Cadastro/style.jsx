// style.jsx

import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#38B6FF",
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    width: 350,
    height: 800,
    backgroundColor: "#FCFCFC",
    borderRadius: 20,
    padding: 20,
    alignItems: "center",
  },
  logo: {
    width: 350,
    height: 150,
    marginBottom: 10,
  },
  title: {
    fontSize: 30,
    marginBottom: 20,
  },
  input: {
    height: 60,
    width: 300,
    borderRadius: 10,
    padding: 10,
    backgroundColor: "#fcfcfc",
  },
  inputError: {
    borderColor: "red",
    borderWidth: 1,
  },
  button: {
    height: 50,
    width: 250,
    backgroundColor: "#4776DF",
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },
  buttonText: {
    color: "#fff",
    fontSize: 22,
  },
  link: {
    marginTop: 10,
    textDecorationLine: "underline",
    color: "#A2A3BB",
  },
});
