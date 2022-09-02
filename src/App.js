import logo from './logo.svg';
import React from 'react'
import './App.css';
import FirstHook from './components/FirstHook';
import FormsHook from './components/FormsHook';
import ArrayHook from './components/ArrayHook';
import DemoUE from './components/DemoUE';
import DemoUEHooks from './components/DemoUEHooks';
import DemoLastNode from './components/DemoLastNode';
import {Routes,Route, Link} from 'react-router-dom';

export const UserContext = React.createContext()

function App() {
  return (
    <div className="App">
      <h1>Hook</h1>

      <Routes>
        <Route path ='/' element={<FirstHook/>}></Route>
        <Route path ='/formshook' element={<FormsHook></FormsHook>}></Route>
      </Routes>







      {/* <UserContext.Provider value = "Sai">
        <DemoLastNode/>
      </UserContext.Provider> */}
      
      {/* <FirstHook/> */}
      {/* <FormsHook/> */}
      {/* <ArrayHook/> */}
      {/* <DemoUE/>
      <br></br><br></br>
      <DemoUEHooks/> */}

    </div>
  );
}

export default App;
