import { useState } from "react";
import "../styles/Home.css";
import { IoMicOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const Home = () => {
  const [sideBar, SetSideBar] = useState(false);

  const toggleFunctionality = () => {
    SetSideBar(!sideBar);
  };

  return (
    <>
      <div className="container-full">
      <nav className="header-1">
  <Link to="/Donations">
    <button className="mybtn">
      <span className="text-full">Donate Different</span>
      <span className="text-short">Donate</span>
    </button>
  </Link>
</nav>
        <nav className="header-2">
          <div className="hamburger-container">
            <div
              className={`hamburger ${sideBar ? "hide" : ""}`}
              onClick={toggleFunctionality}
            ></div>
          </div>
        </nav>
        <div className="main">
          <section className="section-1">
            <img src="/logo.png" alt="logo" />
            <p className="logoCaption">micro-donate to charity</p>
            <Link to="/Donations"><button className="mydonatebtn">Donate Different</button></Link>
          </section>
          <section className="section-2">
            <div className="cards">
              <div className="card">
                <img src="/info.svg" alt="info icon" />
                <p>What is Bariki and why should I donate using it</p>
                <p className="card-2">Why use bariki</p>
              </div>
              <div className="card">
                <img src="/compass.svg" alt="info icon" />
                <p>Suggest a charity for me to donate to</p>
                <p className="card-2">Why use bariki</p>
              </div>
              <div className="card">
                <img src="/globe.svg" alt="info icon" />
                <p>I want to learn about the 17 UN SDGs</p>
                <p className="card-2">Why use bariki</p>
              </div>
            </div>

            <div className="input">
              <input type="text" placeholder="Type prompt here" />
              <IoMicOutline className="mic" />
            </div>
          </section>
        </div>

        {sideBar && (
          <aside className="sideBarMenu">
            <section className="section-top">
              <div className="times-icon" onClick={toggleFunctionality}></div>
              <h1>Explore SDGs</h1>
            </section>
            <ul id="sideListData">
              <li>No poverty</li>
              <li>Zero Hunger</li>
              <li>Good Health...</li>
              <li>Quality Education</li>
              <li>Gender Equality</li>
              <li>Clean Water</li>
              <li>Affordable and...</li>
              <li>Decent Work...</li>
            </ul>
            <div className="image">
              <img src="/sdg.png" alt="sdg" width="100" />
            </div>
          </aside>
        )}
      </div>
    </>
  );
};

export default Home;
