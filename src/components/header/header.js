import React, { useState, useEffect } from "react";
import { json, NavLink, useParams } from "react-router-dom";
import "./header.css";
import { FaDollarSign } from "react-icons/fa";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { CiSearch } from "react-icons/ci";
import { FiGlobe } from "react-icons/fi";
import Customer from "../customerPopup/customerPopup";
import Exchange from "../exchangePopup";
import { useTranslation } from "react-i18next";
import Menu from "../languageSelect/language-dropdown";
import { useDispatch } from "react-redux";
import { setLanguage } from "../../redux/slices/languageSlice/languageSlice";

const Header = () => {
  const dispatch = useDispatch();
  const [customerPopup, setCustomerPopup] = useState(false);
  const [changePopup, setChangePopup] = useState(false);
  const [langPopup, setLangPopup] = useState(false);
  const {  i18n } = useTranslation();
  const {lang} = useParams()
  console.log('lang', lang);
  const openLangPopup = (value) => () => {
    setLangPopup(value);
  };

  const closeLangPopup = () => {
    setLangPopup(false);
  };

  const { t } = useTranslation();

  const openPopup = () => {
    setCustomerPopup(true);
    document.body.classList.add("bg-salmon");
  };

  const closePopup = () => {
    setCustomerPopup(false);
    document.body.classList.remove("bg-salmon");
  };

  const openChange = () => {
    setChangePopup(true);
  };

  const closeChange = () => {
    setChangePopup(false);
  };

  let text = "How are you doing today?";
  const myArray = text.split(" ");
  console.log(myArray,'myArray');

  useEffect(() => {
      dispatch(setLanguage(lang));
      i18n.changeLanguage(lang);  
  }, [dispatch, lang]);

  return (
    <>
      <div className="links">
        <nav className="nav_links">
          <ul>
            <li>
              <NavLink to="/">{t("header.links.0")}</NavLink>
            </li>
            <li>
              <NavLink to="/business">{t("header.links.1")}</NavLink>
            </li>
            <li>
              <NavLink to="">{t("header.links.2")}</NavLink>
            </li>
          </ul>
          <div className="links_btn">
            <a href="tel:+37410511211">+ 374 10 511 211</a>
            <button className="customer—btn" onClick={openPopup}>
              {t("header.buttons.0")}
            </button>
            <button className="banking_btn">{t("header.buttons.1")}</button>
            <div className="icon">
              <FaDollarSign onClick={openChange} className="dollarSign" />
              <HiOutlineLocationMarker className="location" />
              <CiSearch className="search" />
              <FiGlobe onClick={openLangPopup(!langPopup)} className="globe" />
              {langPopup && (
                <Menu
                  handleLanguageChange={(e) => handleLanguageChange(e)}
                  closeLangPopup={(e) => closeLangPopup(e)}
                />
              )}
            </div>
          </div>
        </nav>
      </div>
      <div className="about_convers">
        <span className="converse">Converse</span>
        <span className="bank">Bank</span>
        <div className="converse_links">
          <NavLink to="">{t("header.aboutLinks.0")}</NavLink>
          <NavLink to="">{t("header.aboutLinks.1")}</NavLink>
          <NavLink to="">{t("header.aboutLinks.2")}</NavLink>
          <NavLink to="">{t("header.aboutLinks.3")}</NavLink>
          <NavLink to="">{t("header.aboutLinks.4")}</NavLink>
          <NavLink to="">{t("header.aboutLinks.5")}</NavLink>
          <NavLink to="">{t("header.aboutLinks.6")}</NavLink>
          <NavLink to="">{t("header.aboutLinks.7")}</NavLink>
          <button>{t("header.buttons.2")}</button>
        </div>
      </div>
      <Customer
        customerPopup={customerPopup}
        setCustomerPopup={setCustomerPopup}
        closePopup={() => closePopup()}
      />
      <Exchange
        changePopup={changePopup}
        openChange={() => openChange()}
        closeChange={() => closeChange()}
      />
    </>
  );
};

export default Header;
