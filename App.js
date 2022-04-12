/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React, { useState, useEffect } from "react"
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  Button,
  View,
  Image,
} from 'react-native';


const App: () => Node = () => {
  const [count, setCount] = useState(721);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentInsetAdjustmentBehavior="automatic">


      <View style={styles.profileLayout}>
          <Image
            style={{
              width: 100,
              height: 100,
            }}
            source={require('./assets/sample.png')}
          />
          <Text>User</Text>
          <Text>Japan</Text>
        </View>

          <View style={styles.indexLayout}>

            <View style={styles.one_third_width}>
              <Text style={{textAlign: "center"}}>890</Text>
              <Text style={{textAlign: "center"}}>rating</Text>
            </View>

            <View style={styles.one_third_width}>
              <Text style={{textAlign: "center"}}>342</Text>
              <Text style={{textAlign: "center"}}>photos</Text>
            </View>

            <View style={styles.one_third_width}>
              <Text style={{textAlign: "center"}}>{count}</Text>
              <Text style={{textAlign: "center"}}>Followers</Text>
            </View>

          </View>
          
          <Button title="Follow up" onPress={() => setCount(count + 1)} />
          <Button title="Follow down" onPress={() => setCount(count + -1)} />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "rgb(60,180,236)",
  },

  one_third_width: {
    flex: 1,
  },

  profileLayout: {
    flex:1, 
    justifyContent : 'center',
    alignItems : 'center',
    marginTop: 32,
    marginBottom: 32,
  },

  indexLayout: {
    flexDirection: 'row',
    marginTop: 32,
    marginBottom: 32,
  },

  buttonLayout: {
    marginTop:8,
    marginBottom:8,
  }

});

export default App;
