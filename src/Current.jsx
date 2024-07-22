// App.js

import React from 'react';
import { SafeAreaView, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';
import { Feather } from '@expo/vector-icons';


const  Current=()=> {
  return (
    <LinearGradient
      colors={['#FF6F91', '#D83357']}
      style={styles.wrapper}
    >
      <SafeAreaView style={styles.wrapper}>  
      <View style={styles.container} >
        <Feather name='sun' size={60} color='white'/>
          <Text style={styles.temp}>6</Text>
          <Text style={styles.feels}>Feels Like 5</Text>
          <View style={styles.highlowwrapper}>
            <Text style={styles.highlow}>High : 8</Text>
            <Text style={styles.highlow}>Low: 7</Text>
          </View>
        </View>
        <View style={styles.bodywrapper}>
          <Text style={styles.description}>It's sunny</Text>
          <Text style={styles.message}>It's perfect T-shirt weather</Text>
          <TouchableOpacity style={styles.buttonContainer}>
            <LinearGradient
              colors={['#4c669f', '#3b5998', '#192f6a']}
              style={styles.button}
            >
              <Text style={styles.buttonText}>Press Me</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      <StatusBar style='autoo'></StatusBar>
      </SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1, 
    marginTop: StatusBar.currentHeight || 0
  },
  autoo:{
    backgroundColor:'blue'
  },
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center'
  },
  temp: {
    fontSize: 48,
    color: 'white',
  },
  feels: {
    fontSize: 40,
    color: 'white',
  },
  highlowwrapper: {
    flexDirection: 'row',
  },
  highlow: {
    fontSize: 20,
    color: 'white',
  },
  bodywrapper: {
    alignItems: 'center',
    padding: 20,
  },
 message : {
    fontSize: 16,
    color: '#fff',
  },
  description : {
    fontSize: 16,
    color: '#fff',
  },
  gradientTextWrapper: {
    alignItems: 'center',
  },
  transparentText: {
    backgroundColor: 'black',
  },
  buttonContainer: {
    marginTop: 20,
    borderRadius: 25,
  },
  button: {
    paddingVertical: 15,
    paddingHorizontal: 25,
    borderRadius: 25,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
    color: '#fff',
    textAlign: 'center',
  },
});

export default Current;