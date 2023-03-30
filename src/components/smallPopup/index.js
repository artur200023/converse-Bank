import "./index.css";

const Popup = ({ popup, closePopup }) => {
  return (
    <>
      {popup && (
        <div className="popUp_container">
          <div className="popup_info">
            <p>
              Ներկայացված է արդեն հարկված գումարն ու դրույքաչափերը՝ ՀՀ-ում 10%
            </p>
            <span onClick={() => closePopup()}>X</span>
          </div>
        </div>
      )}
    </>
  );
};

export default Popup;
