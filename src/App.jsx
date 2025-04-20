import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Home from "./components/Home";
import VideoDetail from "./components/VideoDetail";  

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  return (
    <Router>
      <div className="flex flex-col h-screen">
        {/* Header */}
        <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

        {/* Main content: Sidebar + Pages */}
        <div className="flex flex-1 overflow-hidden">
          {/* Sidebar */}
          <Sidebar
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />

          <div className="flex-1 overflow-auto">
            <Routes>
              <Route
                path="/"
                element={<Home searchQuery={searchQuery} selectedCategory={selectedCategory} />}
              />
              <Route path="/video/:id" element={<VideoDetail />} />  {/* VideoDetail component */}
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
