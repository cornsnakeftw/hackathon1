import React from "react";
import axios from "axios";
import "./home.css";
import snowflake from "./snowflake.png";
import DataDisney from "../Characters/DataDisney";

const Home = () => {
  return (
    <section>
      <nav>
        {/* <div className="animate">
          <img src={snowflake} alt="snowflake" />
          <img src={snowflake} alt="snowflake" />
          <img src={snowflake} alt="snowflake" />
        </div>
        <div className="animate2">
          <img src={snowflake} alt="snowflake" />
          <img src={snowflake} alt="snowflake" />
        </div> */}
        {/* <div className="content">
          <h1 className="welcome">Welcome to Disneyland !</h1>
          <h2 classname="h2">Where all your dream comes true</h2>

          <button onClick={DataDisney} className="btn">
            EXPLORE OUR MAGICAL WORLD
          </button>
          <p className="footer">© 2022 D-JAMZ Group</p>
        </div> */}
      </nav>
      <div class="content">
        <div className="animate">
          <img src={snowflake} alt="snowflake" />
          <img src={snowflake} alt="snowflake" />
          <img src={snowflake} alt="snowflake" />
        </div>
        <div className="animate2">
          <img src={snowflake} alt="snowflake" />
          <img src={snowflake} alt="snowflake" />
        </div>
        <div className="text">
          <h1 className="h1">
            Welcome to <span class="span">Disneyland!</span>
          </h1>
          <h2 className="h2">Where all your dream comes true</h2>
          <div className="buttons">
            <button className="btn explore_btn" onClick={DataDisney}>
              EXPLORE MAGIC
            </button>
          </div>
        </div>
      </div>
      {/* <div class="footer-links">
        <h1 className="footer_contact">Contact
          <p className="footer_email">Email:d-jamz@gmail.com</p>
        </h1>
      </div> */}

      <p className="footer_copyright">© 2022 D-JAMZ Group</p>
    </section>
  );
};

export default Home;
