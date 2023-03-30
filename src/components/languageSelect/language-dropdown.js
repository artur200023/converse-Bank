import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { setLanguage } from "../../redux/slices/languageSlice/languageSlice";
import "./language-dropdown.css";
const Menu = ({ closeLangPopup }) => {
  const { t, i18n } = useTranslation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { lang } = useParams();

  const handleClick = (langId) => () => {
    i18n.changeLanguage(langId);
    dispatch(setLanguage(langId));
    let url;
    if (langId !== "am") {
      if (!lang) {
        url = `/${langId}${pathname}`;
      } else {
        url = pathname.replace(lang, langId);
      }
      // if(){

      // }
      console.log(lang, "langggg");
      navigate(url);
      console.log("pathname", pathname);
    } else {
      const currentPath = pathname.split("/").slice(2).join("/");
      console.log("curent ::: ", currentPath);
      const url = "/" + currentPath;
      navigate(url);
    }
    closeLangPopup();
  };

  return (
    <>
      <div className=".popup_lang">
        <div className="select_lang">
          <span onClick={handleClick("en")}>En</span>
          <span onClick={handleClick("am")}>Am</span>
          <span onClick={handleClick("ru")}>Ru</span>
        </div>
      </div>
    </>
  );
};

export default Menu;
