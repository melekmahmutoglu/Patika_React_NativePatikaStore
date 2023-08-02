import { Dimensions, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

const Search_Bar = () => {
  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder='Ara...'
        keyboardType='web-search'
      />
    </View>
  )
}

export default Search_Bar

const styles = StyleSheet.create({
   input: {
    height: 60,
    margin: 20,
    padding: 10,
    borderRadius: 20,
    backgroundColor:'#e6e6e6',
   } 
})