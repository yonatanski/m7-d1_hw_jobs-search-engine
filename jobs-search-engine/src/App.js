import { BrowserRouter, Routes, Route } from "react-router-dom"
import "./App.css"
import Home from "./components/Home"
import CompanySearchResults from "./components/CompanySearchResults"
import Favourites from "./components/Favourites"
import NavigationBar from "./components/NavigationBar"

function App() {
  return (
    <BrowserRouter>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favourites" element={<Favourites />} />
        <Route path="/:companyName" element={<CompanySearchResults />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
