import "./index.css";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { useEffect, useState } from "react";
import Popup from "../smallPopup";
import DepositPopup from "../depositpopup";
import { useDispatch, useSelector } from "react-redux";
import {  selectInp, selectPercent, selectResult, handleResult } from "../../redux/slices/calculateDataSlice/calculateData";
import { capitalPracent, onCalculation } from "../calculateDeposit/utils";

const Percent = () => {
  const [popup, setPopup] = useState(false);
  const [depPopup, setDepPopup] = useState(false);
  const configs = useSelector(selectInp)
  const rate = useSelector(selectPercent)
  const dispatch = useDispatch()
  const openPopup = () => {
    setPopup(true);
  };
  useEffect(()=>{
    dispatch(handleResult(onCalculation({amount: configs.amount,rate, duration:configs.duration})));
      dispatch(handleResult(capitalPracent({amount: configs.amount,rate, duration:configs.duration})));
  },[])

  const { amountPercent, amount, overallAmount , } = useSelector(selectResult)

  const closePopup = () => {
    setPopup(false);
  };

  const openDepPopup = () => {
    setDepPopup(true);
    document.body.classList.add("popup_dep");
  };

  const closeDepPopup = () => {
    setDepPopup(false);
    document.body.classList.remove("popup_dep");
  };


  return (
    <>
      <div className="container">
        <DepositPopup
          depPopup={depPopup}
          openDepPopup={openDepPopup}
          closeDepPopup={closeDepPopup}
        />
        <div className="percent">
          <div className="interest_rate">
            <h2>Մեր առաջարկը</h2>
          </div>
          <div className="info_perc">
            <ul className=" info_percԼinks">
              <li>
                <p>Տոկոսադրույք</p>
              </li>
              <li>
                <span>
                  {rate} %
                  <IoIosInformationCircleOutline
                    onClick={() => openPopup()}
                    className="info_icon"
                  />
                </span>
              </li>
            </ul>
            <ul className="info_percԼinks">
              <li>
                <p>Մայր գումար ժամկետի ավարտին</p>
              </li>
              <li>
                <span> {+ amount} {configs.iso}</span>
              </li>
            </ul>
            <ul className="info_percԼinks">
              <li>
                <p> Ստացվող տոկոսագումար  </p>
              </li>
              <li>
                <span> +  { Number(amountPercent).toFixed(2)} {configs.iso}</span>
              </li>
            </ul>
            <ul className="info_percԼinks">
              <li>
                <p>Ընդհանուր գումար</p>
              </li>
              <li>
                <span>{   (Number(overallAmount).toFixed(2)) }  {configs.iso}</span>
              </li>
            </ul>
          </div>
          <div className="graph">
           {configs.capitalization && (
            <p onClick={() => openDepPopup()}>Տեսնել Գրաֆիկը</p>
           )}  
            <button>Բացել Ավանդ</button>
          </div>
        </div>
      </div>

      <Popup
        popup={popup}
        openPopup={(e) => openPopup(e)}
        setPopup={setPopup}
        closePopup={(e) => closePopup(e)}
      />
    </>
  );
};

export default Percent;
