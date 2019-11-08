import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import discogs, { token } from '../api/discogs';

const ResultDetailScreen = ({ navigation }) => {
  const [result, setResult] = useState(null);
  const [resultMaster, setResultMaster] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  const id = navigation.getParam('id');

  const getResult = async id => {
    try {
      const response = await discogs.get(`/releases/${id}`, {
        params: {
          token,
        },
      });
      const release = response.data;
      setResult(release);

      const responseMaster = await discogs.get(`/masters/${release.master_id}`, {
        params: {
          token,
        },
      });

      setResultMaster(responseMaster.data);
    } catch (err) {
      setErrorMessage(`Something went wrong: ${err.message}`);

      setResult(null);
      setResultMaster(null);
    }
  };

  useEffect(() => {
    getResult(id);
  }, []);

  if (result) {
    return (
      <View>
        <Text>{result.title}</Text>
        {resultMaster ? <Text>{resultMaster.notes}</Text> : null}
      </View>
    )
  }

  return (
    <View>
      <Text>Detail could not be found!</Text>
      {errorMessage ? <Text>{errorMessage}</Text> : null}
    </View>
  )
}

const styles = StyleSheet.create({});

export default ResultDetailScreen;
