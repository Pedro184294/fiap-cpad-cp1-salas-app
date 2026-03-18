import { StyleSheet, Text, View } from 'react-native'

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>FIAP Salas App 🚀</Text>
      <Text style={styles.subtexto}>Bem-vindo ao seu projeto!</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    justifyContent: 'center',
    alignItems: 'center'
  },
  texto: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold'
  },
  subtexto: {
    color: '#aaa',
    marginTop: 10
  }
})
