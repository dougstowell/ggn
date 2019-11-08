import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

const ResultDetail = ({ result }) => {
  return (
    <View style={styles.containerStyle}>
      {result.thumb ? <Image style={styles.imageStyle} source={{ uri: result.thumb }} /> : null}
      <Text style={styles.titleStyle}>{result.title}</Text>
      {result.catno ? <Text>{result.catno}</Text> : null}
    </View>
  )
}

const styles = StyleSheet.create({
  containerStyle: {
    marginLeft: 15,
  },
  imageStyle: {
    width: 150,
    height: 150,
    borderRadius: 4,
    marginBottom: 5,
  },
  titleStyle: {
    fontWeight: 'bold',
  }
});

export default ResultDetail;
