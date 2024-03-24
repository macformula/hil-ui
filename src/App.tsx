import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Internal from './components/internal';
import Login from './components/login';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/hil" element={<Internal />} />
      </Routes>
    </Router>
  );
}

export default App;
