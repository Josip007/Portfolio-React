import { About } from "./components/About";
import { Home } from "./components/Home";
import { WelcomePage } from "./components/WelcomePage";
import { Education } from "./components/Education";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { createContext, useContext, useState } from "react";
import './css/App.css';
import { WorkExperience } from "./components/WorkExperience";
import { Projects } from "./components/Projects";

const LoadingContext = createContext();

export const useLoading = () => useContext(LoadingContext);

function App() {
   const [isLoading, setIsLoading] = useState(false);
  return (
    <LoadingContext.Provider value={{isLoading, setIsLoading}}>
      <Router>
        {isLoading ?  <div className="loader-container">
          <div className="loader"></div>
          <div className="loader-text">Loading...</div>
        </div> : (
        <Routes>
          <Route path="/" element={ <WelcomePage />} />
          <Route path="/home" element={<Home /> } />
          <Route path="/About me" element={ <About />} />
          <Route path="/Education" element={ <Education /> } />
          <Route path="/experience" element={<WorkExperience />} />
          <Route path="/projects" element={<Projects />} />
        </Routes> )}
      </Router> 
    </LoadingContext.Provider>
  );
}

export default App;


/* <Router>
<Routes>
  <Route path="/" element={
  <div>
  <Enter />
  <Sidebar />
  </div>
  } />
  <Route path="/home" element={ <Home /> } />
  <Route path="/register" element={<RegistrationPage />} />
  <Route path="/login" element={<LoginPage />} />
  <Route path="/welcome" element={<Welcome />} />
  <Route path="/error" element={<ErrorPage />} />
</Routes>
</Router> */
