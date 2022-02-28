import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import "./App.css"
import Home from "./components/Home"
import JobResults from "./components/JobResults"

function App() {
  return (
    <Router>
      <Home />
      <Routes>
        <Route path="/jobs" element={<JobResults />} />
      </Routes>
    </Router>
  )
}

export default App
