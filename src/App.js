import React from 'react';
import './App.css';
// import ComponentC from './components/ComponentC';
import HookMouse from './components/HookMouse';
import MouseContainer from './components/MouseContainer';

export const userContext = React.createContext()
export const channelContext = React.createContext()

function App() {
  return (
    <div className="App">
      {/* <userContext.Provider value={'Khilmi Aminudin'}>
        <channelContext.Provider value='Codevolution'>
          <ComponentC/>
        </channelContext.Provider>
      </userContext.Provider>   */}
      {/* <HookMouse/> */}
      <MouseContainer/>
    </div>
  );
}

export default App;
