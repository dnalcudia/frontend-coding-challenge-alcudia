import React from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from '@mui/material/styles';
import { store } from './store/store';
import { DevFinder } from './views/DevFinder';
import { theme } from './styles/customTheme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <div className='App'>
          <DevFinder />
        </div>
      </Provider>
    </ThemeProvider>
  );
}

export default App;
