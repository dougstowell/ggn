import React, { useState } from 'react';
import { Text, StyleSheet, ScrollView } from 'react-native';
import SearchBar from '../components/SearchBar';
import ResultsList from '../components/ResultsList';
import useResults from '../hooks/useResults';

const SearchScreen = () => {
  const [term, setTerm] = useState('');
  const [searchApi, results, errorMessage] = useResults();

  const filterResults = (type) => {
    if (!type) {
      return true;
    }

    return results.filter(result => {
      return type === 'got'
        ? (result.user_data || {}).in_collection
        : (result.user_data || {}).in_wantlist;
    })
  };

  return (
    <>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <ScrollView>
        <ResultsList
          title="All"
          results={results}
        />
        <ResultsList
          title="You have it"
          results={filterResults('got')}
        />
        <ResultsList
          title="You want it"
          results={filterResults('want')}
        />
      </ScrollView>
    </>
  )
}

const styles = StyleSheet.create({});

export default SearchScreen;
