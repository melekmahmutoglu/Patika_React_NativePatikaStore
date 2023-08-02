import { Text, View, Image } from 'react-native';
import React from 'react';
import styles from './Products.style';

const Products = ({products}) => {
  return (
    <View style={styles.container}>
        <Image style={styles.image} source={{uri: products.imgURL}}/>
        <Text style={styles.title}>{products.title}</Text>
        <Text style={styles.price}>{products.price}</Text>
        <Text style={styles.inStock}>{products.inStock ? '' : 'STOK YOK'}</Text>
    </View>
  )
}

export default Products;
