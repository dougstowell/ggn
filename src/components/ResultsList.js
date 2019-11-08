import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';
import ResultDetail from './ResultDetail';

const ResultsList = ({ title, results, navigation }) => {
  return (
    <View style={styles.containerStyle}>
      <Text style={styles.titleStyle}>{title}</Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={results}
        keyExtractor={result => result.id.toString()}
        renderItem={({ item }) =>
          <View>
            <TouchableOpacity
              onPress={() => navigation.navigate('ResultDetail', { id: item.id })
            }>
              <ResultDetail result={item} />
            </TouchableOpacity>
          </View>
        }
      />
    </View>
  )
}

const styles = StyleSheet.create({
  containerStyle: {
    marginBottom: 10,
  },
  titleStyle: {
    marginLeft: 15,
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  }
});

export default withNavigation(ResultsList);
