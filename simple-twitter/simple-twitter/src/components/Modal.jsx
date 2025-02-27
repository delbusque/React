import { useNavigate } from "react-router-dom";
import styles from "./Modal.module.css";

const Modal = ({ children }) => {
  const navigate = useNavigate();
  const closeModalHandler = () => {
    navigate("/");
  };

  return (
    <>
      <div className={styles.backdrop} onClick={closeModalHandler}></div>
      <dialog className={styles.modal} open>
        {children}
      </dialog>
    </>
  );
};

export default Modal;
