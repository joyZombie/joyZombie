import {React, Fragment} from "react";
import logo from "./logo.svg";
import "./App.css";
import {Routes, Route} from "react-router-dom";
import {MyProfile, EditMyProfile, MyProjects, AboutEODP, Projects, Login, SignUp} from "./pages";
import MainPage from "./MainPage";

function App() {

  return (
    //<div className="App">
    <Routes>
      <Fragment>
        <Route path="/" element={<MainPage />} />
        <Route path="/myprofile" element={<MyProfile />} />
        <Route path="/editmyprofile" element={<EditMyProfile />} />
        <Route path="/myprojects" element={<MyProjects />} />
        <Route path="/abouteodp" element={<AboutEODP />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/login" element={<Login /> } />
        <Route path="/signup" element={<SignUp />} />
      </Fragment>
    </Routes>
    //</div>
  );
}

export default App;