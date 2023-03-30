import React from "react";
import { Link } from "react-router-dom";
import DefaultLayouts from "../../layouts/DefaultLayouts";
import { SiFacebook } from "react-icons/si";
import { BsTwitter } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { RiLinkedinBoxFill } from "react-icons/ri";
import { BsYoutube } from "react-icons/bs";
import { IoLogoVk } from "react-icons/io";
import img from "../../images";
import "./home.css";
import { useTranslation } from "react-i18next";

const Home = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className=" working">
        <DefaultLayouts>
          <div className="about">
            <p>{t("home.text.0")}</p>
            <p>{t("home.text.1")}</p>
            <span>{t("home.text.2")}</span>
          </div>
          <div className="direction">
            <button>{t("home.buttons.0")}</button>
            <Link className="direction_link" to="">
              {t("home.buttons.1")}
            </Link>
          </div>
          <div className="site_marks">
            <div className="marks">
              <p>+ 374 10 511 211</p>
              <SiFacebook />
              <BsTwitter />
              <BsInstagram />
              <RiLinkedinBoxFill />
              <BsYoutube />
              <IoLogoVk />
            </div>
            <div className="img">
              <img className="app" src={img.logo} alt="" />
              <img className="google" src={img.logo2} alt="" />
            </div>
          </div>
        </DefaultLayouts>
      </div>

      
    </>
  );
};

export default Home;
