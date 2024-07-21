import { Feather } from "@expo/vector-icons";
import { View, Text, SafeAreaView, FlatList } from "react-native";

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
         
            "main": "Rain",
          
          }
        ],
        

        
      
    }
                                         
]



const Item=(props)=>{
const {dt_txt, min, max , condition}= props
return (

    <View>
<Feather  name= 'sun' size={50} color={'white'}/>

<Text>{dt_txt}</Text>
<Text>{min}</Text>
<Text>{max}</Text>
    </View>
)
}
const UpcomingWeather=()=>{
    const renderItem= ({item})=>{

<Item></Item>
    }

    return (
<SafeAreaView>
            <FlatList  
            data={DATA}
            renderItem={({item})=> <item>{item.title}</item>} />
            
           
           
</SafeAreaView>

    )
}
export default UpcomingWeather;