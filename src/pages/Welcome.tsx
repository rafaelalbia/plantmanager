import React, { useState } from 'react';
import { SafeAreaView, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

import wateringImage from '../assets/watering.png';
import { Button } from '../components/Button';
import colors from '../styles/colors';

export function Welcome() {
  const [visible, setVisible] = useState(false);

  function handleVisibility() {
    setVisible(true);
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>
        Gerencie {'\n'}
        suas plantas {'\n'}
        de forma fácil
      </Text>
      
      {
        visible &&
        <Image source={wateringImage} style={styles.image} />
      }

      <Text style={styles.subtitle}>
        Não esqueça mais de regar suas plantas. 
        Nós cuidamos de lembrar você sempre que precisar.
      </Text>

      <Button title='>' />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    color: colors.heading,
    marginTop: 38
  },
  subtitle: {
    textAlign: 'center',
    fontSize: 18,
    padding: 20,
    color: colors.heading
  },
  button: {
    backgroundColor: colors.green,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 16,
    marginBottom: 10,
    height: 56,
    paddingHorizontal: 10
  },
  image: {
    height: 284,
    width: 292
  },
  buttonText: {
    color: colors.white,
    fontSize: 24
  }
})