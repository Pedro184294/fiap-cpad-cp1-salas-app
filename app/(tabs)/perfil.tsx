import { View, Text, StyleSheet, TextInput, Button } from 'react-native'
import { useState, useEffect } from 'react'

export default function Perfil() {
  const [nome, setNome] = useState('')
  const [curso, setCurso] = useState('')
  const [salvo, setSalvo] = useState(false)

  useEffect(() => {
    console.log('Tela de perfil carregada')
  }, [])

  const salvarPerfil = () => {
    if (nome === '' || curso === '') {
      alert('Preencha todos os campos!')
      return
    }

    setSalvo(true)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Perfil do Usuário</Text>

      <TextInput
        style={styles.input}
        placeholder="Digite seu nome"
        placeholderTextColor="#aaa"
        value={nome}
        onChangeText={setNome}
      />

      <TextInput
        style={styles.input}
        placeholder="Digite seu curso"
        placeholderTextColor="#aaa"
        value={curso}
        onChangeText={setCurso}
      />

      <View style={styles.botao}>
        <Button title="Salvar Perfil" onPress={salvarPerfil} />
      </View>

      {salvo && (
        <View style={styles.resultado}>
          <Text style={styles.texto}>Nome: {nome}</Text>
          <Text style={styles.texto}>Curso: {curso}</Text>
        </View>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    padding: 20,
    justifyContent: 'center'
  },
  titulo: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center'
  },
  input: {
    backgroundColor: '#1e1e1e',
    color: '#fff',
    padding: 10,
    borderRadius: 8,
    marginBottom: 15
  },
  botao: {
    marginTop: 10
  },
  resultado: {
    marginTop: 20
  },
  texto: {
    color: '#fff',
    fontSize: 16
  }
})