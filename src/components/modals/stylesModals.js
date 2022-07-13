const styles_M_Options = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.3)",
    zIndex: "10000000000000",
  },
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "#FFF",
    border: "none",
    width: "90%",
    maxWidth: "900px",
    minHeight: "450px",
    maxHeight: "700px",
    padding: "0px",
  },
};
const styles_M_Login = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.75)",
    zIndex: "10000000000000",
  },
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    padding: "10px",
    backgroundColor: "#FFF",
    border: "none",
    width: "90%",
    maxWidth: "400px",
    minHeight: "250px",
  },
};
const styles_M_Cart = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.3)",
    zIndex: "5000",
  },
  content: {
    top: "80px",
    left: "auto",
    right: "5%",
    padding: "0px",
    backgroundColor: "#FFF",
    border: "none",
    borderRadius: "8px",
    width: "340px",
    height: "450px",
  },
};
export { styles_M_Cart, styles_M_Login, styles_M_Options };
