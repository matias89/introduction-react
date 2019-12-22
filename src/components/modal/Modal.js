import React, { useState } from "react";

const buildModal = (isOpen, showModal) => {
  return (
    <div className="modal show" style={{ display: isOpen ? "block" : "none" }} tabIndex="-1" role="dialog">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Modal title</h5>
            <button onClick={() => showModal(false)} type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <p>Modal body text goes here.</p>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-dismiss="modal">
              Close
            </button>
            <button type="button" className="btn btn-primary">
              Save changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const Modal = () => {
  const [isOpen, showModal] = useState(false);
  return (
    <div>
      {buildModal(isOpen, showModal)}
      <button className="btn btn-primary" onClick={() => showModal(true)}>
        Open
      </button>
    </div>
  );
};

export default Modal;
