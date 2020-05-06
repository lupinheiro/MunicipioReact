/**
 * Trabalho Pratico MunicipioReact
 *
 *
 * @format
 * @flow strict-local
 */

import * as React from 'react';

import Navigator from './routes/StackLogin';
import {Provider as PaperProvider } from 'react-native-paper'
import {Provider as StoreProvider} from 'react-redux'
import store from './reducer/store'

function App() {
   return (
    <StoreProvider store = {store}>
    <PaperProvider>
     <Navigator />
    </PaperProvider>
    </StoreProvider>
   );
 }

 export default App;
