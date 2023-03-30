import { Link } from "react-router-dom";
import "./index.css";
import { FiDownload } from "react-icons/fi";
import { useSelector } from "react-redux";
import {
  selectInp,
  selectPercent,
} from "../../redux/slices/calculateDataSlice/calculateData";
import moment from "moment";

const DepositPopup = ({ depPopup, closeDepPopup }) => {
  const percent = useSelector(selectPercent);
  const userInput = useSelector(selectInp);


  const calculateTable = (duration) => {
    const arr = [];
    const today = moment(new Date());
    const lastDay = today.add(duration, "days");
    const diff = lastDay.diff(new Date(), "months");


    const calcPayment = (duration) => {
     return ((duration * (percent / 365)) / 100) * Number(userInput.amount);
    };

    const current = moment(new Date());

    for (let i = 0; i < diff; i++) {
      const startDay = moment(new Date(current));
      current.add(1, "month");
      const clonedStartDay = moment(new Date(current));
      const diff = clonedStartDay.diff(startDay, "days");
      const row = {
        date: current.format("DD-MM-YYYY"),
        rate: percent,
        amount:Number(calcPayment(diff).toFixed(0)) ,
        days: diff,
      };
      arr.push(row);
    }
    return arr;
  };

  const table = calculateTable(userInput.duration);


  return (
    <div className="wrapper">
      <div className="container">
        {depPopup && (
          <div className="dep_popup">
            <div className="show_depPopup">
              <h2>Ավանդի գրաֆիկ</h2>
              <div className="link_dep">
                <FiDownload className="download" />
                <Link  className="dep_link" to="">
                  Ներբեռնել գրաֆիկը
                </Link>
              </div>
              <div className="dep_category">
                <p>Ամիս</p>
                <p>Տոկոսադրույք</p>
                <p>Գումար</p>
              </div>
              <div className="dep_info">
                <div className="dep_popup">
                  {table.map((line) => (
                      <ul className="graph" key={Math.random()}>
                        <li>{line.date}</li>
                        <li>{line.rate} %</li>
                        <li>{line.amount} ֏</li>
                      </ul>
                    ))}
                </div>
                <span
                  onClick={() => closeDepPopup()}
                  className="close_depPopoup"
                >
                  X
                </span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DepositPopup;
