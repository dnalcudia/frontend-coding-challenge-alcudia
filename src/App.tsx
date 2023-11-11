import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { DevFinder } from './views/DevFinder';

function App() {
  return (
      <Provider store={store}>
        <div className="App">
          <DevFinder/>
        </div>
      </Provider>
  );
}

export default App;
