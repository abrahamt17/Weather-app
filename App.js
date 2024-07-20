import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
  <SafeAreaView style={styles.wrapper}>  
      <View style={styles.container} >
      <Text>weather App</Text>
      <Text style={styles.feels}>6</Text>
      <View style ={styles.highlowwrapper}>
      <Text style ={styles.feels}>Feels Like 5</Text>
      <Text style ={styles.highlow}>High : 8 </Text>
      <Text  style ={styles.highlow}> Low: 7</Text>
      </View>
      {/* <StatusBar style="auto" /> */}
    </View>
    </SafeAreaView>

  );
}


const styles = StyleSheet.create({
  container : {
    
    backgroundColor:"pink",
    alignItems: 'center',
    flex : 1,
    justifyContent :'center',
   
  },
  wrapper:{
    flex:1.
  }
})

