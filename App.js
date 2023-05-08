import React, { useState, useEffect, useRef } from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';

const App = () => {

  const [basit, setBasit] = useState(1)
  const [eff, setEff] = useState('')

  useEffect(() => {
    console.log('Basit is getting amended')
  }, [basit, setBasit])

  const handleBasitIncreament = () => {
    console.log('Increamenting')
    setBasit(basit + 1)
  }

  const handleBasitDecreament = () => {
    console.log('Decreamenting')
    if (basit <= 1) {
      setBasit(1)
    } else {
      setBasit(basit - 1)
    }
  }

  const handleWatcher = () => {
    console.log('TestingEffect')
    setEff('Watcher Clicked')
  }


  return (
    <ScrollView style={styles.container}>
      <View style={{ paddingHorizontal: 20, marginTop: 50 }}>
        <Text>The value of Basit now is: {basit}</Text>
        <Text>Watcher now is: {eff}</Text>
      </View>

      <View style={styles.btnView}>
        <TouchableOpacity onPress={() => handleBasitIncreament()}>
          <View style={styles.btn}>
            <Text style={styles.btnText}>Increament Basit</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => handleBasitDecreament()}>
          <View style={styles.btn}>
            <Text style={styles.btnText}>Decreament Basit</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => handleWatcher()}>
          <View style={styles.btn}>
            <Text style={styles.btnText}>TestingEffect</Text>
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    width: '100%'
  },
  btn: {
    backgroundColor: '#004050',
    marginTop: 50,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 16,
    borderRadius: 4
  },
  btnText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '700',
    lineHeight: 24
  },
  btnView: {
    width: '100%',
    paddingHorizontal: 20
  }
});
