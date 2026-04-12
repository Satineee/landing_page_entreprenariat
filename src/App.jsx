import { HashRouter  as Router, Route, Routes } from 'react-router-dom';
import PageNotFound from './lib/PageNotFound';
import Home from './pages/Home';

const AuthenticatedApp = () => {
  
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};


function App() {

  return (
      <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
        <AuthenticatedApp />
      </Router>
  )
}

export default App