import { View, Text, SafeAreaView, FlatList, StyleSheet } from 'react-native';
import React from 'react';
import Search_Bar from './components/SearchBar/Search_Bar';
import patika_store from './patika_store.json';
import Products from './components/Products/Products';

const App = () => {
  const searchBar = () => <Search_Bar />
  const productsCard = ({item}) => <Products products={item} />
  

  return (
    <SafeAreaView style = {styles.backView}>
      <View>
        <Text style={styles.header}>PATİKASTORE</Text>
        <FlatList
          ListHeaderComponent={searchBar}
          data={patika_store}
          renderItem={productsCard}
          numColumns={2} 
        />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  backView: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    color: 'purple',
    fontSize: 25,
    marginLeft: 20,
    marginTop: 10,
    fontWeight: '600'
  }
})

export default App