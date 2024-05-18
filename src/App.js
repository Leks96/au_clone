import React from "react";
import "./App.css";
import RootComponent from "./Component/RootComponent";
import Partner from './Component/RegForms/Partner/Partner'
import Register from './Component/RegForms/Registeration/Register'
import SpeakerApp from './Component/RegForms/SpeakerApp/index'
import Contacts from "./Component/RegForms/Contacts/Contacts";
import ComingSoon from "./Component/RegForms/WeAreComing/Index";
import { Route, Routes } from "react-router-dom"; // Changed from BrowserRouter to Routes

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<RootComponent />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/register" element={<Register />} />
        <Route path="/partner" element={<Partner />} />
        <Route path="/speaker-application" element={<SpeakerApp />} />
        <Route path="/coming-soon" element={<ComingSoon />} />
      </Routes>
    </>
  );
}

export default App;
