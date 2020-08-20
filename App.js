import React from 'react'
import {View,Text,StyleSheet,Image} from 'react-native'

export default function App(){
  return(
    <View style={styles.container}>
      <Text style={styles.text}>
      Hello World
      </Text>
      <Image style={styles.image}
            source={{uri:'https://thepeople.co/wp-content/uploads/2019/03/Catwoman_Website_1200x628.jpg'}}
      />
      <Image style={styles.image}
            source={{uri:'https://s.isanook.com/ga/0/ud/212/1061857/batman-(1).jpg'}}
      />
      <Image style={styles.image}
            source={{uri:'https://www.lcdtvthailand.com/images/topic/spider-man.jpg'}}
      />
    </View>
  )
}
const styles=StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#ff8000',
  },
  text:{
    fontSize:20,
    color:'red',
    backgroundColor:'blue',
    padding:20,
  },
  image:{
    width:400,
    height:200,
  }
})
//export default App;