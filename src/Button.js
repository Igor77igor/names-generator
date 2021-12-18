const Button = ({ handleClick}) => {


    return (<div className="button">
        <button onClick={() => handleClick()} className="btn btn-primary my-3 ">Get name from site</button>
        {isLoading && <div> LOADING...</div>}
        

    </div>


    );
}

export default Button;

