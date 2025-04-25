import Login from './Login';
import Register from './Register';
//import AppraisalForm from './AppraisalForm'; // ✅ Correct import
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div style={{ marginTop: '-3.5rem' }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Register />} />
          <Route path="/login" element={<Login />} />
          {/* <Route path="/appraisal" element={<AppraisalForm />} /> ✅ Corrected Route */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}


export default App;
