import axios from "axios";
import { useEffect, useState } from "react";
import "./Ticketing.css";
import image from "../assets/ticketG.svg"
import image1 from "../assets/ticketR.svg"

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
              <img src={image} alt="ticketGreen"/>
            ) : (
              <img src={image1} alt="ticketRed"/>
            )}
            {ticket.present === true ? "Ha entrado" : "No ha entrado"}
          </div>
          <div className="col-3">
            ID
            <br />
            {ticket._id}
          </div>
          <div className="col-3">
            Nº de Ticket<br/>
            {ticket.ticket}
          </div>
          <div className="col-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-three-dots"
              viewBox="0 0 16 16"
            >
              <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
            </svg>
          </div>
        </>
      ))}
    </div>
  );
};

export default Ticketing;
