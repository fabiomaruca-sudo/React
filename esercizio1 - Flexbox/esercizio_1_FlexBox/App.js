import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.column}>
        <View style={styles.riga}></View>

        <View style={styles.riga}>
          <View style={styles.cardRuolo}>
            <View style={styles.riga}>
              <View style={[styles.mr, { flex: 1 }]}>
                <Text style={styles.mrText}>MR</Text>
              </View>

              <View style={{ flex: 3 }}>
                <Text style={styles.nome}>Mario Rossi</Text>
                <Text style={styles.ruolo}>Sviluppatore</Text>
              </View>
            </View>

            <View style={styles.linea} />

            <View style={styles.riga}>
              <View style={styles.column}>
                <Text>Email</Text>
              </View>

              <View style={styles.column}>
                <Text>Tel</Text>
              </View>

              <View style={styles.column}>
                <Text style={styles.info}>Città</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  riga: {
    flexDirection: 'row',
    gap: 8,
  },
  cardRuolo: {
    flex: 1,
    backgroundColor: '#FFFFFF',

    justifyContent: 'center',

    marginVertical: 20,
    paddingVertical: 10,
    paddingLeft: 20,
    maxWidth: 300,
    borderRadius: 10,
  },
  column: {
    paddingHorizontal: 20,
    marginBottom: 10,
    gap: 8,
    flexDirection: 'column',
  },

  mr: {
    backgroundColor: 'purple',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
    borderRadius: 10,
  },

  mrText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },

  nome: {
    flex: 3,
    fontSize: 25,
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 'bold',
  },
  ruolo: {
    flex: 3,
    alignItems: 'center',
    justifyContent: 'center',
  },

  linea: {
    height: 2,
    marginVertical: 15,
    backgroundColor: 'gray',
    width: '90%',
    borderRadius: 10,
  },

  info: {
    
  },
});
