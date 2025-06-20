import './App.css'
import Flashcard from "./components/Flashcard.jsx";
import CardWrapper from "./components/CardWrapper.jsx";
import {cardsData} from "./utils/mockup-data.js";
import HomePage from "./pages/HomePage.jsx";
import AdminPage from "./pages/AdminPage.jsx";
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import {CategoryProvider} from "./context/CategoryContext.jsx";

function App() {

  return (
      <div className="App w-100% bg-amber-50">
      <BrowserRouter>
          <CategoryProvider>
              <Navbar />
              <main className="flex-grow p-6">
                  <Routes>
                      <Route path="/" element={<HomePage />} />
                      <Route path="/admin" element={<AdminPage />} />
                  </Routes>
              </main>
          </CategoryProvider>
      </BrowserRouter>
      </div>
  )
}

export default App
