import { Feather } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";
import { View, Text, SafeAreaView, FlatList, StyleSheet } from "react-native";

// ... (DATA array remains the same)

const DATA=[

                         
    {
      
            "dt_txt": "2022-08-30 16:00:00",
            "main": {
              
              "temp_min": 296.2,
              "temp_max": 296.31,
            
            },
            "weather": [
              {
                
                "main": "Rain",
               
              }
            ],
        },
                               
  
        {
            "dt_txt": "2022-08-30 17:00:00",
            "main": {
            
              "temp_min": 292.84,
              "temp_max": 294.94,
           
            },
            "weather": [
              {
                "main": "rain",
              }
            ], }, 
        {



            "dt_txt": "2022-08-30 17:00:01",
            "main": {
            
              "temp_min": 292.84,
              "temp_max": 294.94,
           
            },
            "weather": [
              {
             
                "main": "Rain",
              
              }
            ],
            
    
            
          
        }
                                             
    ]

    const weatherIcons = {
        Rain: "rainbow",
        Snow: "snowflake",
        Clear: "sun",
        Clouds: "rainbow",
        // Add more icons as needed
      };
      
      const Item = (props) => {
        const { dt_txt, min, max, condition } = props;
        const iconName = weatherIcons[condition] || "cloud"; // Default to cloud icon if condition is not found
      
        return (
          <View style={styles.itemContainer}>
            <Feather name={iconName} size={50} color={"white"} />
            <Text style={styles.itemText}>{dt_txt}</Text>
            <Text style={styles.itemText}>{min}°C</Text>
            <Text style={styles.itemText}>{max}°C</Text>
          </View>
        );
      };
const UpcomingWeather = () => {
  const renderItem = ({ item }) => {
    return (
      <Item
        condition={item.weather[0].main}
        dt_txt={item.dt_txt}
        min={Math.round(item.main.temp_min - 273.15)} // Convert Kelvin to Celsius
        max={Math.round(item.main.temp_max - 273.15)} // Convert Kelvin to Celsius
      />
    );
  };

  return (
    <LinearGradient colors={["#FF6F91", "#D83357"]} style={styles.wrapper}>
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>Upcoming Weather</Text>
        <FlatList data={DATA} 
        renderItem={renderItem}
        keyExtractor={(item) => item.dt_txt} />
          
      </SafeAreaView>
    </LinearGradient>
  );
};

export default UpcomingWeather;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
    marginBottom: 20,
    alignSelf: 'center'
  },
  itemContainer: {
    padding: 20,
    marginVertical: 5,
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  itemText: {
    fontSize: 16,
    color: "white",
    marginLeft: 10,
  },
});