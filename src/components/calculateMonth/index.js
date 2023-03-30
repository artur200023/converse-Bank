import "./index.css";
import { AiOutlineCalendar } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import {
  getCalculateFetch,
  handleConfig,
  selectInp,
} from "../../redux/slices/calculateDataSlice/calculateData";
import { durationData } from "../calculator/util";
const CalcMonth = () => {
  const [isactiveId, setIsActiveId] = useState(0);
  const dispatch = useDispatch();
  const configs = useSelector(selectInp);

  useEffect(() => {
    dispatch(getCalculateFetch());
  }, [dispatch]);

  const onDurationClick = (duration, id) => {
    setIsActiveId(id);
    const clonedData = { ...configs };
    clonedData.duration = duration;
    dispatch(handleConfig(clonedData));
  };

  const changeCalcConfig = (e, option) => {
    const clonedData = { ...configs };
    clonedData[option] = e.target.checked;
    dispatch(handleConfig(clonedData));
  };

  const renderDurations = () => {
    return durationData.map((duration) => {
      return (
        <li
          className={isactiveId === duration.id ? "isactive-button" : ""}
          key={duration.id}
          onClick={() => onDurationClick(duration.duration, duration.id)}
        >
          {duration.value}
        </li>
      );
    });
  };

  return (
    <>
      <div className="container">
        <div className="deposit_term">
          <div className="term">
            <p>Ավանդի ժամկետ</p>
          </div>
          <div className="month_year">
            <ul className="month">{renderDurations()}</ul>
          </div>
          <div className="two_year">
            <ul>
              <li>
                <AiOutlineCalendar />
                ընտրել նախընտրելի ամսաթվերը
              </li>
            </ul>
          </div>
          <div className="check_inps">
            <label>
              <input
                value={configs.with_partial_withdrawal}
                onChange={(e) => changeCalcConfig(e, "with_partial_withdrawal")}
                className="switch"
                type="checkbox"
              />
              <span className="check"></span>
              <p>Մասնակի նվազեցման իրավունք</p>
            </label>
            <label>
              <input
                value={configs.with_replenishment}
                onChange={(e) => changeCalcConfig(e, "with_replenishment")}
                className="switch"
                type="checkbox"
              />
              <span className="check"></span>
              <p>Ավելացման հնարավորություն</p>
            </label>
            <label>
              <input
                value={configs.capitalization}
                onChange={(e) => changeCalcConfig(e, "capitalization")}
                className="switch"
                type="checkbox"
              />
              <span className="check"></span>
              <p>Ամսեկան տոկոսավճար</p>
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default CalcMonth;
