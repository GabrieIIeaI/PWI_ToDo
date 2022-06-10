import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { Provider } from 'react-redux';
import { Store } from './src/store';

import Home from './src/screens/home';


function App() {
  return (
    <Provider store={Store} >
      <SafeAreaView style={styles.masterView}>
          <Home />
      </SafeAreaView>
    </Provider>
  );
}

const styles = StyleSheet.create({
  masterView: {
    flex: 1
  }
})

export default App;
