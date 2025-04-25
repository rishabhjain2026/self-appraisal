import Home from './Home';
import Login from './Login';
import Register from './Register';
import AppraisalForm from './AppraisalForm'; // ✅ Import the appraisal form component
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div style={{ marginTop: '-3.5rem' }}>
      <BrowserRouter>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/appraisal" element={<AppraisalForm />} /> {/* ✅ New route */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
