import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AllReservations = () => {
  const [reservations, setReservations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchReservations = async () => {
      try {
        const res = await axios.get('https://foodorder-1-6zj6.onrender.com/api/v1/reservation/get');
        console.log("Fetched:", res.data);
        setReservations(res.data.data || []);
      } catch (err) {
        console.error("Fetch error:", err);
        setError('Failed to fetch reservations.');
      } finally {
        setLoading(false);
      }
    };

    fetchReservations();
  }, []);

  return (
    <section className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
          All Reservations
        </h1>

        {loading && (
          <p className="text-center text-gray-500">Loading reservations...</p>
        )}

        {error && (
          <p className="text-center text-red-500">{error}</p>
        )}

        {!loading && !error && reservations.length === 0 && (
          <p className="text-center text-gray-600">No reservations found.</p>
        )}

        <div className="space-y-4">
          {reservations.map((r) => (
            <div
              key={r._id}
              className="bg-white rounded shadow p-5 border border-gray-200"
            >
              <p className="text-lg font-semibold">
                {r.firstName} {r.lastName}
              </p>
              <p className="text-gray-600">{r.email} | {r.phone}</p>
              <p className="text-sm text-gray-500">
                Reservation for <strong>{r.date}</strong> at <strong>{r.time}</strong>
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <button
            onClick={() => navigate('/')}
            className="px-5 py-2 bg-emerald-500 text-white rounded hover:bg-emerald-600 transition"
          >
            Back to Home
          </button>
        </div>
      </div>
    </section>
  );
};

export default AllReservations;
