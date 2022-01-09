const Button = ({ handleClick, isLoading }) => {
  return (
    <div className="button">
      <button onClick={handleClick} className="btn btn-primary my-3 ">
        Get name from site
      </button>
      {isLoading && <h4> LOADING...</h4>}
    </div>
  );
};

export default Button;
