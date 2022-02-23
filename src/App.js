import Homepage from "./pages/Home";
import AboutPage from "./pages/About";
import {
  BrowserRouter as Router,
  Route,
  Link,
  BrowserRouter,
  Routes
} from "react-router-dom";
import Login from "./pages/components/Layout/register";
import StadiumDetail from "./pages/StadiumDetail"
import StadiumCreate from "./pages/StadiumCreate"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<AboutPage/>} />
        <Route path="/register" element={<Login/>} />
        <Route path="/stadium/:banana" element={<StadiumDetail />} />
        <Route path="/stadium/create" element={<StadiumCreate />} />
      </Routes>
    </BrowserRouter>
    );
}

export default App;
