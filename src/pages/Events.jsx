import { useNavigate } from "react-router-dom";

const Events = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Events</h1>
      <p>List of all events with filter and search options.</p>
      <div className="mt-4">
        <button className="btn btn-primary" onClick={() => navigate("/book-ticket")}>Book Ticket</button>
      </div>
    </div>
  );
};

export default Events;