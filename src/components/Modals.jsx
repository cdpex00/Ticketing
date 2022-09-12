import React from 'react'

import axios from "axios";
import { useEffect, useState } from "react";
import { useModal } from './hooks/useModal';
import Modal from './Modal';

const Modals = () => {
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
    <div>
      <h1> ME LLAMO CHRISTIAN</h1>
    </div>
  )
}

export default Modals
