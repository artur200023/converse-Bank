import React from "react";
import { NavLink } from "react-router-dom";
import img from "../../images";
import { BsArrowRightShort } from "react-icons/bs";
import { SiFacebook } from "react-icons/si";
import { BsTwitter } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { RiLinkedinBoxFill } from "react-icons/ri";
import { BsYoutube } from "react-icons/bs";
import { IoLogoVk } from "react-icons/io";
import "./footer.css";

const Footer = () => {
  return (
    <>
      <div className=" footer">
        <div className="  conv_footer">
          <nav>
            <ul>
              <li>
                <NavLink to="">Մեր մասին</NavLink>
              </li>
              <li>
                <NavLink to="">Բանկի մասին</NavLink>
              </li>
              <li>
                <NavLink to="">Բանկի պատմությունը</NavLink>
              </li>
              <li>
                <NavLink to="">Կառուցվածքը</NavLink>
              </li>
              <li>
                <NavLink to="">Նշանակալից մասնակիցներ</NavLink>
              </li>
              <li>
                <NavLink to="">Ղեկավարներ</NavLink>
              </li>
              <li>
                <NavLink to="">Բաժնետերեր և ներդրողներ</NavLink>
              </li>
            </ul>
          </nav>
          <nav>
            <ul>
              <li>
                <NavLink to="">Աշխատանք</NavLink>
              </li>
              <li>
                <NavLink to="">Նորություններ</NavLink>
              </li>
              <li>
                <NavLink to="">Հետադարձ կապ</NavLink>
              </li>
              <li>
                <NavLink to="">Սպասարկման Ցանց</NavLink>
              </li>
              <li>
                <NavLink to="">Օգնություն</NavLink>
              </li>
              <li>
                <NavLink to="">Գործընկերներին և մատակարարներին</NavLink>
              </li>
              <li>
                <NavLink to="">Օտարվող գույք</NavLink>
              </li>
            </ul>
          </nav>
          <nav>
            <ul>
              <li>
                <NavLink to="">Հաշվետվություններ</NavLink>
              </li>
              <li>
                <NavLink to="">Իրավական ակտեր</NavLink>
              </li>
              <li>
                <NavLink to="">Հաճախորդների իրավունքներ</NavLink>
              </li>
              <li>
                <NavLink to="">Ֆինանսական համակարգի հաշտարար</NavLink>
              </li>
              <li>
                <NavLink to="">Մատուցվող ծառայություններ</NavLink>
              </li>
              <li>
                <NavLink to="">ԿԲՀՏ/Հաշվարկային տոկոսադրույք</NavLink>
              </li>
            </ul>
          </nav>

          <div className=" container subscribe">
            <div>
              <ul className="disp_ul">
                <li className="logo">C</li>
                <li>Converse Mobile</li>
              </ul>
              <ul>
                <li>Download our app to gain the best from modern banking</li>
              </ul>
              <div className="foot_img">
                <img className="foot_app" src={img.logo} alt="" />
                <img className="foot_goog" src={img.logo2} alt="" />
              </div>
              <ul>
                <li>Բաժանորդագրվել</li>
                <li>
                  <div className="sub">
                    <input className="sub_inp" type="text" />
                    <BsArrowRightShort className="icon_right" />
                  </div>
                </li>
              </ul>
            </div>
            <div className="foot_icons">
              <SiFacebook />
              <BsTwitter />
              <BsInstagram />
              <RiLinkedinBoxFill />
              <BsYoutube />
              <IoLogoVk />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
