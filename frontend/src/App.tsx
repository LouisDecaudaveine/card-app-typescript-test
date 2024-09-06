import React, { useState } from "react";
import NavBar from './components/NavBar'
import ThemeSwitch from "./components/ThemeSwitch";
import AllEntries from './routes/AllEntries'
import NewEntry from './routes/NewEntry'
import EditEntry from './routes/EditEntry'
import { EntryProvider } from './utilities/globalContext'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

export default function App() {

  const [isDarkMode, setIsDarkMode] = useState<boolean>(false)

  const toggleDarkMode  = () => {
    setIsDarkMode(prevState => !prevState);
  }

  return (
    <section className={`min-h-screen ${isDarkMode ? "dark bg-slate-800" : ""}`}>
      <Router>
        <EntryProvider >
        <NavBar></NavBar>
        <ThemeSwitch toggleDarkMode={toggleDarkMode}/>
          <Routes>
            <Route path="/" element={<AllEntries/>}>
            </Route>
            <Route path="create" element={<NewEntry/>}>
            </Route>
            <Route path="edit/:id" element={<EditEntry/>}>
            </Route>
          </Routes>
        </EntryProvider>
        </Router>
    </section>
    
  );
}
