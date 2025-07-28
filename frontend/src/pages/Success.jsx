import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import toast from 'react-hot-toast';

const Success = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const reservation = location.state?.reservation;

  const handleDelete = async () => {
    try {
      await axios.delete(`https://foodorder-1-6zj6.onrender.com/api/v1/reservation/delete/${reservation._id}`);
      toast.success('Reservation deleted successfully');
      navigate('/');
    } catch (error) {
      toast.error('Failed to delete reservation');
      console.error(error);
    }
  };

  if (!reservation) {
    return <p>No reservation data available.</p>;
  }

  return (
    <div className="success-page container mx-auto p-6 text-center">
      <h1 className="text-3xl font-bold mb-4 text-green-600">Reservation Successful!</h1>
      
      <div className="bg-white shadow-md rounded-lg p-6 inline-block text-left">
        <p><strong>Name:</strong> {reservation.firstName} {reservation.lastName}</p>
        <p><strong>Email:</strong> {reservation.email}</p>
        <p><strong>Phone:</strong> {reservation.phone}</p>
        <p><strong>Date:</strong> {reservation.date}</p>
        <p><strong>Time:</strong> {reservation.time}</p>
      </div>

      <button
        className="mt-6 px-6 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
        onClick={handleDelete}
      >
        Delete Reservation
      </button>
    </div>
  );
};

export default Success;
