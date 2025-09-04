import { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading (e.g. waiting for assets / API / router)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Adjust time as needed (2 sec here)

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="loader-container">
        <div className="spinner"></div>
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default App;
