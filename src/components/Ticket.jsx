import { useState } from "react";
import { Modal } from "antd";
import image from "../assets/ticketG.svg";
import image1 from "../assets/ticketR.svg";
import "./Ticket.css"


const Ticket = ({ ticket }) => {
  
  return (
    
    <>
      <div className="modal-header">
        <div>
          {ticket.present ? (
            <img src={image}></img>
          ) : (
            <img src={image1}></img>
          )}
        </div>
        <div className="modal-title">
          <h2>
            {ticket.firstName}
            {ticket.lastName}
          </h2>
          <span>{ticket.present ? "Ha entrado" : "No ha entrado"}</span>
        </div>
      </div>
      <div className="modal-body">
        <div className="modal-body-1">
          <div>
            <div>
              <strong>ID</strong>
            </div>
            <div>{ticket._id}</div>
          </div>
          <div>
            <div>
              <strong>Nº Ticket</strong>
            </div>
            <div>{ticket.ticket}</div>
          </div>
          <div>
            <div></div>
            <div></div>
          </div>
        </div>
        <div className="modal-body-2">
          <div>
            <div>
              <strong>Fecha Nacimiento</strong>
            </div>
            <div>{ticket.birthdate}</div>
          </div>
          <div>
            <div>
              <strong>Email</strong>
            </div>
            <div>{ticket.email}</div>
          </div>
          <div>
            <div>
              <strong>Télefono</strong>
            </div>
            <div>{ticket.phone}</div>
          </div>
        </div>
        <div className="modal-body-2">
          <div className="">
            <div>
              <strong>Dirección</strong>
            </div>
            <span className="modal-addres">{ticket.address}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Ticket;
