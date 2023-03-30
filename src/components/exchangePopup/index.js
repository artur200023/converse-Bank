import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { TiArrowSortedUp } from "react-icons/ti";
import { TiArrowSortedDown } from "react-icons/ti";
import { AiOutlineClose } from "react-icons/ai";
import {
  getChangeFetch,
  selectActiveTab,
  selectChange,
  selectTabs,
  setActiveTab,
} from "../../redux/slices/change/changeSlice";
import "./index.css";

const Exchange = ({ changePopup, closeChange }) => {
  const currencyRates = useSelector(selectChange);
  const activeTab = useSelector(selectActiveTab);
  const [rateList, setRateList] = useState([]);

  const tabs = useSelector(selectTabs);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getChangeFetch());
  }, [dispatch]); //

  useEffect(() => {
    setRateList(currencyRates[activeTab]);
  }, [currencyRates]);

  const changeCurrencyType = (id) => {
    setActiveTab(id);
    setRateList(currencyRates[id]);
  };

  return (
    <>
      <div className="container">
        {changePopup && (
          <div className="change_popup">
            <div className="popup">
              <h2>Արտարժույթ</h2>
              <div className="change_link">
                <ul className="tab_list">
                  {tabs.map((tab, index) => {
                    return (
                      <li
                        className={
                          activeTab === tab.id ? "active-btn" : "btn_hover"
                        }
                        onClick={() => changeCurrencyType(tab.id)}
                        key={index}
                      >
                        {tab.name}
                      </li>
                    );
                  })}
                </ul>
              </div>
              <div className="change_info">
                <div className="info_change">
                  <table className="currency">
                    <thead>
                      <tr className="currency_link">
                        <th>Արտարժույթ</th>
                        <th>Առք</th>
                        <th>Վաճառք</th>
                      </tr>
                    </thead>
                    <tbody className="bay_sell">
                      {rateList.map((rate, index) => {
                        return (
                          <tr
                            key={index}
                            style={
                              index % 2 === 0
                                ? { background: "rgba(0,0,0,.1)" }
                                : { background: "" }
                            }
                          >
                            <td>{rate.currency.iso}</td>
                            <td class="desc">
                              {rate.buy_diff > 0 ? (
                                <TiArrowSortedUp className="up" />
                              ) : (
                                <TiArrowSortedDown className="down" />
                              )}
                              {rate.sell}
                            </td>
                            <td class="desc">
                              {rate.buy_diff > 0 ? (
                                <TiArrowSortedUp className="up" />
                              ) : (
                                <TiArrowSortedDown className="down" />
                              )}
                              {rate.buy}
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
              <AiOutlineClose
                onClick={() => closeChange()}
                className="close_popup"
              ></AiOutlineClose>
              <h5 className="date">Թարամացվել է՝ 19․05․22</h5>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Exchange;
