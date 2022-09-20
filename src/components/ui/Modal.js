import { useEffect, useRef, useState } from "react";
import { Modal as BsModal } from "bootstrap";

function Modal({ title, children, isOpen, setIsOpen }) {
  const modalEl = useRef();
  //   const obj = { current: undefined };

  const [modal, setModal] = useState(null);

  useEffect(() => {
    const modalObj = new BsModal(modalEl.current);
    setModal(modalObj);
  }, []);

  useEffect(() => {
    if (isOpen) {
      modal?.show();
    }
    if (!isOpen) {
      modal?.hide();
    }
  }, [isOpen, modal]);

  return (
    <div className="modal fade" tabIndex="-1" ref={modalEl} onClick={setIsOpen}>
      <div
        className="modal-dialog modal-dialog-centered"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal-content">
          <div className="modal-header">
            <button type="button" className="btn-close invisible"></button>
            <h5 className="modal-title">{title}</h5>
            <button
              type="button"
              className="btn-close"
              onClick={setIsOpen}
            ></button>
          </div>
          <div className="modal-body"> {children}</div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
