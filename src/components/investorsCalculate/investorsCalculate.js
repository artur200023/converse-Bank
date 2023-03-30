import { useState } from "react";
import "./investorsCalculate.css";

const Invcalc = () => {
  const [necessary, setNecessary] = useState("250.000");
  return (
    <>
      <div className="container">
        <div className="invcalc_block">
        <div className="calc">
          <h1>Հաշվիչ</h1>
          <div className="calc_links">
            <p>Վարկ</p>
            <p>Ավանդ</p>
            <p>Պարտատոմսեր</p>
          </div>
          <div className="calc_inps">
            <input
              value={necessary}
              onChange={(e) => setNecessary(e.target.value)}
              className="offered"
              type="text"
              placeholder="Որքան գումար է անհրաժեշտ"
            />
          <input  value={necessary}
              onChange={(e) => setNecessary(e.target.value)}
              type="range"
              id="necessary"
              name="necessary"
              min="250000"
              max="10000000"/>
            <div className="size_money">
              <p>Սկսած 250․000 ֏</p>
              <p>Մինչև 10․000․000 ֏</p>
            </div>
            <input
              className="offered"
              type="text"
              placeholder="Վարկի ժամկետը"
            />
            <input
              type="range"
              id="term"
              name="term"
              min="6 ամիս"
              max="5 տարի"
            />
            <div className="size_term">
              <p>Սկսած 6 ամսից</p>
              <p>Մինչև 5 տարի</p>
            </div>
          </div>
        </div>
        <div className="monthly">
        <div className="monthly_fee">
            <p>Ամսական վճար</p>
            <span>320.000 ֏</span>
        </div>
        <hr />
        <div className="percent_approx">
            <p>Տոկոսադրույք</p>
            <span>16.9 %</span>
        </div>
        <p>Հաշվարկները կրում են մոտավոր բնույթ</p>
        <button>Մանրամասն</button>
        </div>
        </div>
       
        
      </div>
    </>
  );
};

export default Invcalc;
