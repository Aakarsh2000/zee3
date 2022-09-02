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
        <Route path ='/firsthook' element={<FirstHook/>}></Route>
        <Route path ='/formshook' element={<FormsHook/>}></Route>
        <Route path ='/arrayhook' element={<ArrayHook/>}></Route>
        <Route path ='/demoue' element={<DemoUE/>}></Route>
        <Route path ='/demouehooks' element={<DemoUEHooks/>}></Route>
        <Route 
          path ='/demolastnode' 
          element={<UserContext.Provider value = "Sai">
        <DemoLastNode/>
      </UserContext.Provider>}></Route>
      </Routes>

      <Link to="/firsthook"><h2>First Hook page</h2></Link>
      <Link to="/formshook"><h2>Forms Hook page</h2></Link>
      <Link to="/arrayhook"><h2>Array Hook page</h2></Link>
      <Link to="/demoue"><h2>Demo UE page</h2></Link>
      <Link to="/demouehooks"><h2>Demo UE Hooks page</h2></Link>
      <Link to="/demolastnode"><h2>Demo Last Node page</h2></Link>





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
