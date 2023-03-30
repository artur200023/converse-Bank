export const CustomDots = ({ dotsTitile, dotsDec }) => {
  return (
    <>
      <div className="container">
        <div className="dots">
          <span className="dots_title">{dotsTitile}</span>
          <span className="dots_desc">{dotsDec}</span>
        </div>
      </div>
    </>
  );
};

export default CustomDots;
