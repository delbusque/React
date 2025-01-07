import styles from "./Modal.module.css";

const Modal = ({ children, hideModal }) => {
  return (
    <>
      <div className={styles.backdrop} onClick={hideModal}></div>
      <dialog className={styles.modal} open>
        {children}
      </dialog>
    </>
  );
};

export default Modal;
