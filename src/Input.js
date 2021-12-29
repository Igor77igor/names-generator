const Input = ({ handleChange, handleSubmit, inputName }) => {
  return (
    <div className="list">
      <form onSubmit={handleSubmit}>
        <input
          className="form-control m-auto"
          type="text"
          onChange={(e) => handleChange(e)}
          placeholder="add new name"
          autoComplete="off"
          value={inputName}
        />
      </form>
    </div>
  );
};

export default Input;
