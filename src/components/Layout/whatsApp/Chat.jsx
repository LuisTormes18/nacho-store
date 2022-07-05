import { AiOutlineClose } from "react-icons/ai";
import { BsHeadphones } from "react-icons/bs";
import useForm from "./../../../hooks/useForm";
import Message from "./Message";

const Chat = ({ visible, setVisible }) => {
  const [state, hanleInputChange] = useForm({ message: "" });
  const { message } = state;
  function handleSubmit(e) {
    e.preventDefault();
  }
  function handleClick() {
    setVisible(false);
  }
  return (
    <div className={`chat__container ${visible && "chat__container-visible"}`}>
      <div className="chat d-flex flex-column h-100">
        <header className="chat__header d-flex justify-content-between align-items-center p-2">
          <div className="headphones p-2">
            <BsHeadphones size="30" />
          </div>
          <div className="pt-3">
            <span>Payco</span>
            <p className="font-size-14px">
              {" "}
              Responderemos en las siguientes 24hrs{" "}
            </p>
          </div>

          <AiOutlineClose
            className="pointer"
            size="20"
            color="#f5f5f5"
            onClick={handleClick}
          />
        </header>
        <div className="chat__body">
          <Message text={`Hola! 👋\n\n ¿En qué podemos ayudarte?`} />
        </div>
        <footer className="chat__footer p-2">
          <form className="from form-message" onSubmit={handleSubmit}>
            <div className="form-group mb-1 mt-1">
              <input
                className="form-control"
                onChange={hanleInputChange}
                type="text"
                name="name"
                value={message}
                placeholder="Type a message"
              />
            </div>

            <div className="form-group m-2">
              <input
                type="submit"
                className="btn btn-send w-100"
                value="Enviar"
              />
            </div>
          </form>
        </footer>
      </div>
      ;
    </div>
  );
};

export default Chat;
