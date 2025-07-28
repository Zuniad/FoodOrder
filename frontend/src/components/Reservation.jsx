import React, { useState } from 'react';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const Reservation = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    date: '',
    time: '',
    phone: ''
  });

  const navigate = useNavigate();

  // ✅ Handle input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // ✅ Handle form submit
  const handleReservation = async (e) => {
    e.preventDefault();

    try {
      const { data } = await axios.post(
        'https://foodorder-1-6zj6.onrender.com/api/v1/reservation/send',
        formData,
        {
          headers: {
            'Content-Type': 'application/json'
          },
          withCredentials: true
        }
      );

      toast.success(`Reservation Successful: ${data.message}`);

      // Reset form
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        date: '',
        time: '',
        phone: ''
      });

      navigate('/success',{ state: { reservation: data.data } });
      
    } catch (error) {
      console.error('Error Occurred:', error);
      toast.error(`Reservation failed: ${error.response?.data?.message || error.message}`);
    }
  };

  return (
    <section className="reservation" id="reservation">
      <div className="container">
        <div className="banner">
          <img src="/reservation.png" alt="Reservation" />
        </div>

        <div className="banner">
          <div className="reservation_form_box">
            <h1>MAKE A RESERVATION</h1>
            <p>For further questions, please call our hotline.</p>

            <form onSubmit={handleReservation}>
              <div>
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                />
              </div>

              <div>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  required
                />
                <input
                  type="time"
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  required
                />
              </div>

              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="email_tag"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>

              <button type="submit">
                RESERVE NOW{' '}
                <span>
                  <HiOutlineArrowNarrowRight />
                </span>
              </button>

            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reservation;
