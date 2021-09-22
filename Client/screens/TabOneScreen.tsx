import * as React from 'react';
import { StyleSheet } from 'react-native';
import {Image} from 'react-native';
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';

export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>My garden</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />

      <Image style={styles.logo} source={require('../assets/images/empty-garden.png')} />

      <Text style={styles.title}>Your personnal reminders</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />


      {/* now iterate through plants in garden  */}

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginVertical: 0,
    paddingTop:20
    //justifyContent: 'space-around',
  },
  title: {
    //textAlignVertical:0,
    marginVertical:0,
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  logo: {
    backgroundColor: "#FFFFFF",
    width: '50%',
    height: '30%',
    marginVertical:50
  },
});
