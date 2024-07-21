import { View, StyleSheet } from "react-native";
import Current from "./src/Current";
import React from "react";
import UpcomingWeather from "./src/Upcomingweather";
const App =()=>{
  return(
<View style={styles.container}>
<UpcomingWeather/>
  {/* <Current/> */}
</View>
  )
}
const styles= StyleSheet.create({
container:{
  flex:1
}
})

export default App; 