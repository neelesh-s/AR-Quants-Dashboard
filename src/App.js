import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NoPage from "./pages/NoPage";
import Main from "./components/Main";
import Login from "./pages/Login/Login";
import UserAuthentication from "./pages/UserAuthenticate/UserAuthentication";
import UserNuvama from "./pages/UserNuvama/UserNuvama";
import Zerodha from "./pages/Zerodha/Zerodha";
import KeyAuthentication from "./pages/KeyAuthentication/KeyAuthentication";
import BackTest from "./pages/BackTest/BackTest";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<NoPage />} />
        <Route path="/" element={<Main />} />
        <Route path="login" element={<Login />} />
        <Route path="user-authentication" element={<UserAuthentication />} />
        <Route path="user-nuvama" element={<UserNuvama />} />
        <Route path="user-zerodha" element={<Zerodha />} />
        <Route path="key-authentiaction" element={<KeyAuthentication/>} />
        <Route path="BackTest" element={<BackTest/>}/>


      </Routes>
    </BrowserRouter>
  );
}

export default App;
