import img from "../../images";
import "./converseMobile.css";

const Mobile = () => {
  return (
    <>
      <div className="">
        <div className="mobile">
          <div className="mobile_text">
            <h3>Converse Mobile</h3>
            <p>
              Հայտնի է, որ ընթերցողը, կարդալով հասկանալի տեքստ, չի կարողանա
              կենտրոնանալ տեքստի ձևավորման վրա։
            </p>
            <div className="imgs">
              <img className="app" src={img.logo} alt="" />
              <img className="goog" src={img.logo2} alt="" />
            </div>
          </div>
          <div className="mobile_img">
            <img src={img.img6} alt="" />
            <img className="white_mob" src={img.img5} alt="" />
          </div>
          <div className="after_imgs">
            <img className="blue" src={img.img7} alt="" />
            <img className="orange" src={img.img8} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Mobile;
