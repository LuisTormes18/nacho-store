const Message = ({ emisor, text }) => {
  return (
    <div className="message message__payco mb-2">
      <p className="emisor text-gray">Payco</p>
      {text}
    </div>
  );
};

export default Message;
