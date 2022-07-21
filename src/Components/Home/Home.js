import React from "react";
import axios from "axios";
import "./index.css";
import snowflake from "./snowflake.png"
import DataDisney from "../Characters/DataDisney";


const Home = () => {
  return (
    <section className="body">
      <nav className="home">
        <div className="animate">
          <img src={snowflake} alt="snowflake" />
          <img src={snowflake} alt="snowflake" />
          <img src={snowflake} alt="snowflake" />
        </div>
        <div className="animate2">
          <img src={snowflake} alt="snowflake" />
          <img src={snowflake} alt="snowflake" />
        </div>
        <div className="content">
          <h1 className="welcome">Welcome to Disneyland !</h1>
          <h2>Where all your dream comes true</h2>

          <button onClick={DataDisney} className="btn">
            EXPLORE OUR MAGICAL WORLD
          </button>
          <p className="footer">© 2022 D-JAMZ Group</p>
        </div>
      </nav>
    </section>
  );
};

export default Home;
