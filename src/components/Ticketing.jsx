import axios from "axios";
import { useEffect, useState } from "react";
import image from "../assets/ticketG.svg";
import image1 from "../assets/ticketR.svg";
import { useModal } from "./hooks/useModal";
// import image2 from "../assets/dots.png";
import Modal from "./Modal";



const Ticketing = () => {
  const [isOpen, openModal, closeModal]= useModal(false);
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
          <div className="col-3">
            <button onClick={openModal}> ... </button>
            <Modal isOpen={openModal} closeModal ={closeModal}> </Modal>
          </div>
        </>
      ))}
    </div>
  );
};

export default Ticketing;
