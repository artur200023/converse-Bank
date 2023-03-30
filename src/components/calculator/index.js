import React, { useState } from "react";
import "./index.css";

const Calculate = () => {
  const [active, setIsActive] = useState(null);

  const handleClick = (index) => {
    setIsActive(index);
  };

  const list = ["Ավանդի հաշվիչ", "Վարկային հաշվիչ", "Հիփոթեքային հաշվիչ"];

  return (
    <>
      <div className="container">
        <div className="contribution">
          <h2>Հաշվիր քո ներդրումը</h2>
          <div className="calc_blocks">
            {list.map((elm, index) => (
              <span
                key={index}
                className={active === index ? "active-button" : ""}
                onClick={() => handleClick(index)}
              >
                {elm}
              </span>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Calculate;
