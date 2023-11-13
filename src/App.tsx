import React from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from '@mui/material/styles';
import { store } from './store/store';
import { DevFinder } from './views/DevFinder';
import { theme } from './styles/customTheme';
import { DarkModeProvider } from './context/DarkModeContext';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <DarkModeProvider>
          <div className='App'>
            <DevFinder />
          </div>
        </DarkModeProvider>
      </Provider>
    </ThemeProvider>
  );
}

export default App;
