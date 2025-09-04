import React from "react";
import Header from "./components/Header";
import ProfileCard from "./components/ProfileCard";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Header />
      <main className="container" id="home">
        <ProfileCard
          name="just"
          email="alim@mail.ru"
          avatar="https://i.pinimg.com/736x/a0/3c/84/a03c84db5d9a959620e9a72852ebc838.jpg"
        />
      </main>
      <Footer />
    </div>
  );
}

export default App;
