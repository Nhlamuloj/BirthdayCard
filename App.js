import * as React from 'react';
import { StyleSheet, Text, View,Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';


export default function App() {


  
  return (
    <View style={[styles.container, styles.elevation]}>
      <LinearGradient
        colors={['rgba(0,0,0,0.9)', 'transparent']}
        style={styles.background}
      />

      <View style={styles.card}>

        <Text style= {styles.Header}>
          HAPPY BIRTHDAY TO 
        YOU
        </Text>
        <br></br>

        <Image
          style={styles.picture}
          source={require('./assets/gift2.jpg')}
        />

        <br></br>
      
        <Text style={styles.paragraph}>
          I think a lot of who I am today is due to the friendship
          we've shared through this years... And now that your 
          birthday is here, i'd just like to say thanks... For all
          the ways you've been a really good friend to me.
        </Text>

       

      </View>
    </View>
 
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'lightblue',
  },

  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: 300,
  },
    card:{
      alignItems:'center',
      justifyContent:'center',
      padding:24,
    },
Header:{
  fontWeight:'bold',
  fontSize:40,
},

picture:{
width:300,
height:250,
},

paragraph:{
width:300,
fontSize:20,
},

elevation: {
  elevation: 20,
  shadowColor: '#52006A',
},

});