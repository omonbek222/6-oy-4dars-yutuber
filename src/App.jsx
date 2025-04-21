import { Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import ProtectedRoute from './components/ProtectedRoute';
import Home from './pages/Home';
import VideoDetail from './pages/VideoDetail';
import Header from './components/Header'; 

function App() {
  return (
    <>
      <Header /> 
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route
          path="/video/:id"
          element={
            <ProtectedRoute>
              <VideoDetail />
            </ProtectedRoute>
          }
        />
      </Routes>
    </>
  );
}

export default App;
