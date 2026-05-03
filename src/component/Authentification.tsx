import { useState } from "react";
import Connexion from "./Connecter";
import Inscription from "./Inscription";

export default function Auth() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div>
      {isLogin ? (
        <Connexion onSwitch={() => setIsLogin(false)} />
      ) : (
        <Inscription onSwitch={() => setIsLogin(true)} />
      )}
    </div>
  );
}