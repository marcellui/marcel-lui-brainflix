import "./App.scss";
import NavBar from "./components/NavBar/NavBar";
import VideoDetails from "./pages/VideoDetails/VideoDetails";
import { BrowserRouter,Routes, Route } from "react-router-dom";
import VideoUpload from "./pages/VideoUpload/VideoUpload";


function App() {


  
  return (
    
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<VideoDetails/>} />
          <Route path="upload" element={<VideoUpload/>} />
          <Route path="video/:id" element={<VideoDetails/>} />
        </Routes>
      </BrowserRouter>
      
      
  );
}

export default App;
