import './App.css';
import SalonsList from "./components/SalonsList";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import SalonDetails from "./components/SalonDetails";

function App() {
  return (
  <Router>
    <Routes>
      <Route path="/CloudNineProject" element={<SalonsList />} />
      <Route path="/CloudNineProject/salon/:id" element={<SalonDetails />} />
    </Routes>
  </Router>
  );
}

export default App;
