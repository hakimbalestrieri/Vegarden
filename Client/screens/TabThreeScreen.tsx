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


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginVertical:30
    //justifyContent: 'space-around',
  },
  title: {
    textAlignVertical:0,
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
    width: 500,
    height: 500,
    marginVertical:50
  },
});
