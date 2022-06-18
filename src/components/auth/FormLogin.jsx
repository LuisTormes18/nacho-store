const FormLogin = () => {
  return (
    <div>
      <form className="form ">
        <h2 className="text-center"> Ingresa tu cuenta </h2>

        <div className="form-group">
          <input
            className="form-control"
            type="email"
            name="email"
            placeholder="youremail@gmil.com"
          />
        </div>

        <div className="form-group">
          <button className="btn btn-warning">Continuar</button>
        </div>
      </form>
    </div>
  );
};

export default FormLogin;
