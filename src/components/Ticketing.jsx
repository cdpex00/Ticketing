import axios from "axios";
import { useEffect, useState } from "react";
import Popup from "reactjs-popup";
import image from "../assets/ticketG.svg";
import image1 from "../assets/ticketR.svg";
import "./Ticketing.css";

const Ticketing = () => {
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://6f7smj4fdc.execute-api.us-east-1.amazonaws.com/default/techJobMission"
      )
      .then((response) => setTickets(response.data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="row align-items-center ">
      {tickets.map((ticket) => (
        /* {ticket.present === true ? <img src="/ticket-fill.svg"></img> : <img src="/ticket.svg"></img>}; */
        <>
          <div className="col-3 ">
            <br />
            {ticket.firstName} {ticket.lastName}
            <br />
            {ticket.present === true ? (
              <img src={image} alt="ticketGreen" />
            ) : (
              <img src={image1} alt="ticketRed" />
            )}
            {ticket.present === true ? "Ha entrado" : "No ha entrado"}
          </div>
          <div className="col-3">
            ID
            <br />
            {ticket._id}
          </div>
          <div className="col-3">
            Nº de Ticket
            <br />
            {ticket.ticket}
          </div>
          <Popup
            trigger={<button className="button"> ... </button>}
            modal
            nested
          >
            {(close) => (
              <div class="bg">
                <div className="modal">
                  <div class="header">
                    <div className="picture">
                      {" "}
                      {ticket.present === true ? (
                        <img src={image} alt="ticketGreen" />
                      ) : (
                        <img src={image1} alt="ticketRed" />
                      )}{" "}
                    </div>
                    <div className="name">
                      {" "}
                      <h4>
                        {ticket.firstName} {ticket.lastName}
                      </h4>
                      <br />
                      <span>
                        {" "}
                        {ticket.present === true
                          ? "Ha entrado"
                          : "No ha entrado"}{" "}
                      </span>
                    </div>
                  </div>
                  <button className="close" onClick={close}>
                    &times;
                  </button>
                  <div>
                    <div className="body-modal">
                      <div className="actions">
                        Fecha de nacimiento
                        <br />
                        <h5>{ticket.birthdate}</h5>
                      </div>
                      <div className="actions">
                        Email
                        <br />
                        <h5>{ticket.email}</h5>
                      </div>
                      <div className="actions">
                        Telefono
                        <br />
                        <h5>{ticket.phone}</h5>
                      </div>
                    </div>
                  </div>
                  <div>
                    {" "}
                    <div className="direction">
                      <h5> Direccion</h5>
                      <span> {ticket.address}</span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </Popup>
        </>
      ))}
    </div>
  );
};

export default Ticketing;
