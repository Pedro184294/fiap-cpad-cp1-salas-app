import { useEffect, useState } from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'

export default function Salas() {
  const [salas, setSalas] = useState([
    { id: 1, nome: 'Sala 101', status: 'Livre' },
    { id: 2, nome: 'Sala 102', status: 'Ocupada' },
    { id: 3, nome: 'Sala 201', status: 'Livre' }
  ])

  useEffect(() => {
    console.log('Tela de salas carregada')
  }, [])

  const atualizarSalas = () => {
    setSalas(prevSalas =>
      prevSalas.map(sala => ({
        ...sala,
        status: sala.status === 'Livre' ? 'Ocupada' : 'Livre'
      }))
    )
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Salas Disponíveis</Text>

      {salas.map(sala => (
        <Text
          key={sala.id}
          style={[
            styles.sala,
            { color: sala.status === 'Livre' ? 'green' : 'red' }
          ]}
        >
          {sala.nome} - {sala.status}
        </Text>
      ))}

      <View style={styles.botao}>
        <Button title="Atualizar Salas" onPress={atualizarSalas} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    padding: 20
  },
  titulo: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20
  },
  sala: {
    fontSize: 18,
    marginBottom: 10
  },
  botao: {
    marginTop: 20
  }
})