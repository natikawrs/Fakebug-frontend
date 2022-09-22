import { useEffect, useRef, useState } from "react";
import { Modal as BsModal } from "bootstrap";

function Modal({ title, children, open, onClose }) {
  const modalEl = useRef();
  //   const obj = { current: undefined };

  const [modal, setModal] = useState(null);

  useEffect(() => {
    const modalObj = new BsModal(modalEl.current);
    setModal(modalObj);
  }, []);

  useEffect(() => {
    if (open) {
      modal?.show();
    }
    if (!open) {
      modal?.hide();
    }
  }, [open, modal]);

  return (
    <div className="modal fade" tabIndex="-1" ref={modalEl} onClick={onClose}>
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
              onClick={onClose}
            ></button>
          </div>
          <div className="modal-body"> {children}</div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
