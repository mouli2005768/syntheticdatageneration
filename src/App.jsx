import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [isLogin, setIsLogin] = useState(true);

  const openPopup = (type) => {
    setIsLogin(type === "login");
    setShowPopup(true);
  };

  const closePopup = (e) => {
    if (e.target.classList.contains("popup-overlay")) {
      setShowPopup(false);
    }
  };

  return (
    <div className="container">
      {/* Navbar */}
      <header className="header">
        
        <nav>
          <ul className="nav-links">
            <li className="login-text" onClick={() => openPopup("login")}>Login</li>
            <li className="signup-box" onClick={() => openPopup("signup")}>Sign Up</li>
          </ul>
        </nav>
      </header>

      {/* Main Content */}
      <div className="main-content">
        <aside className="sidebar left">
          <div className="content-box">
            <h2>Clearbit</h2>
            <h1>Synthetic Data</h1>
            <p>
            Datasets are generated using algorithms, AI models, or statistical techniques while preserving the patterns and relationships found in actual data.
            </p>
          </div>
        </aside>

        <main className="center-content">
          <img src="./logo.png" alt="Example" />
        </main>

        <aside className="sidebar right">
          <div className="content-box">
            <h2>Predictable growth starts here.</h2>
            <p>
            A systematic and data-driven approach to expanding a business, product, or service. It involves strategies that help organizations scale in a measurable, sustainable, and repeatable way.


            </p>
            <button   className="cta-button" onClick={() => openPopup("signup")}>Get Started </button>
          </div>
        </aside>
      </div>

      {/* Popup Modal */}
      {showPopup && (
        <div className="popup-overlay" onClick={closePopup}>
          <div className={`popup-content ${!isLogin ? "signup-border-box" : ""}`}>
            <h2>{isLogin ? "Login" : "Sign Up"}</h2>

            {!isLogin && <input type="text" placeholder="Username" />}
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            {!isLogin && <input type="password" placeholder="Confirm Password" />}

            <button className="popup-button">{isLogin ? "Login" : "Sign Up"}</button>

            {/* Register/Login Link Instead of Close Button */}
            <p className="switch-text">
              {isLogin ? "Don't have an account? " : "Already have an account? "}
              <span onClick={() => setIsLogin(!isLogin)}>
                {isLogin ? "Register" : "Login"}
              </span>
            </p>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="footer">
        <div className="footer-links">
          <a href="#">About</a>
          <a href="#">Contact Us</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
        </div>
        <p>&copy; 2025 YourCompany. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;
