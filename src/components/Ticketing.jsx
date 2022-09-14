import axios from "axios";
import { useEffect, useState } from "react";
import { Modal, Button, Table } from "antd";
import Ticket from "./Ticket";
import "./Ticketing.css";
import image from "../assets/ticketG.svg";
import image1 from "../assets/ticketR.svg";


const Ticketing = () => {
  const [tickets, setTickets] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [ticket, setTicket] = useState(null);
  

  const columns = [
    {
      title: "",
      dataIndex: "image",
      key: "image",
      render: (_, ticket) => (
        <div>
          <span>
            {ticket.present === true ? (
              <img src={image} alt="ticketGreen" />
            ) : (
              <img src={image1} alt="ticketRed" />
            )}
          </span>
        </div>
      ),
    },
    {
      title: "",
      dataIndex: "firstName",
      key: "firstName",
      render: (_, ticket) => (
        <div className="table-cell">
          <h3>
            {" "}
            {ticket.firstName} {ticket.lastName}{" "}
          </h3>{" "}
          <div> {ticket.present === true ? "Ha entrado" : "No ha entrado"} </div>
        </div>
      ),
    },
    {
      title: "",
      dataIndex: "lastName",
      key: "lastName",
      render: (_, ticket) => (
        <div className="table-cell">
          <h4> ID</h4> <div> {ticket._id} </div>
        </div>
      ),
    },
    {
      title: "",
      dataIndex: "address",
      key: "address",
      render: (_, ticket) => (
        <div>
          <h4> Nº de ticket</h4> <div> {ticket.ticket} </div>
        </div>
      ),
    },
    {
      title: "",
      key: "action",
      render: (_, ticket) => {
        return <Button onClick={()=> showModal(ticket)} >...</Button>;
      },
    },
  ];
  

  useEffect(() => {
    axios
      .get(
        "https://6f7smj4fdc.execute-api.us-east-1.amazonaws.com/default/techJobMission"
      )
      .then((response) => setTickets(response.data))
      .catch((error) => console.error(error));
  }, []);



 
  const showModal = (payload) => {
    setTicket(payload);
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <div>
      <Table
        columns={columns}
        dataSource={tickets}
        showHeader={false}
        size="middle"
        className="table"
      />
      <Modal
        width={700}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
      >
        <Ticket ticket={ticket} />
      </Modal>
    </div>
  );
};

export default Ticketing;
