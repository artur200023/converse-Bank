import "./index.css";
import CalcMonth from "../calculateMonth";
import { useDispatch, useSelector } from "react-redux";
import { buttonList } from "../calculateDeposit/utils";

import {
  handleConfig,
  selectInp,
} from "../../redux/slices/calculateDataSlice/calculateData";
import { useState } from "react";
const Deposit = () => {
  const [activeId, setActiveId] = useState(1);
  const configs = useSelector(selectInp);
  const dispatch = useDispatch();
  const userInput = useSelector(selectInp);

  const handleClick = (id) => {
    setActiveId(id);
    const clonedData = { ...configs };
    clonedData.iso = id;
    dispatch(handleConfig(clonedData));
  };

  const onAmountChange = (e) => {
    const clonedData = { ...configs };
    clonedData.amount = Number(e.target.value);
    dispatch(handleConfig(clonedData));
  };

  return (
    <>
      <div className="container">
        <div className="deposit_calc">
          <div className="departments">
            <p>Ամենաշահավետ</p>
            <p>Աենապահանջված</p>
            <p>Custom</p>
          </div>
          <div className="dep_amount">
            <p>Նշեք ավանդի գումարը</p>

            <div className="dep_icons">
              {buttonList.map((button, index) => (
                <span
                  key={index}
                  className={activeId === button.id ? "active-button" : ""}
                  onClick={() => handleClick(button.iso)}
                >
                  {button.component}
                </span>
              ))}
            </div>
          </div>
          <div>
            <div className="amount_inps">
              <input
                className="offered"
                type="number"
                value={configs.amount}
                onChange={onAmountChange}
              />
              <span className="data_span" data-value={configs.iso}>
                <span className="hidden_span">{configs.amount}</span>
                {configs.iso}
              </span>
            </div>

            <input
              className="inp_amount"
              value={configs.amount}
              onChange={onAmountChange}
              type="range"
              id="amount"
              name="amount"
              min="50000"
              max="5000000"
            />
            <div className="money">
              <p>50 հազար</p>
              <p>25 մլն․</p>
              <p>50 մլն․</p>
            </div>
          </div>
          <CalcMonth userInput={userInput} />
        </div>
      </div>
    </>
  );
};

export default Deposit;
