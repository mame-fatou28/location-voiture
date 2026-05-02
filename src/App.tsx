import { useState } from 'react'

import './App.css'
import Inscription from './component/Inscription'

function App() {

  const handleSwitch = () => {
    console.log("switch vers login");
  };
const [isLogin, setIsLogin] = useState(false);

  return (
    
    <>
     <div className="App">
      {isLogin ? (
        <Connexion onSwitch={() => setIsLogin(false)} />
      ) : (
        <Inscription onSwitch={() => setIsLogin(true)} />
      )}
    </div>
      <Inscription  onSwitch={handleSwitch} />
    </>
  )
}

export default App
