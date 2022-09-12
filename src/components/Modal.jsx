import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import "./Modal.css"

const Modal = (isOpen, closeModal) => {
  

  return (
    <contenedor className={'modal ${isOpen && "is-open"}'} onClick={closeModal}>
      <div className="modal-container">
        <button className="modal-close" onClick={closeModal}>
          {" "}
          X{" "}
        </button>
      </div>
    </contenedor>
  );
};

export default Modal;
