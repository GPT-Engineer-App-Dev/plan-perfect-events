const Dashboard = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
      <p>Overview of upcoming events and key metrics.</p>
      <div className="mt-4">
        <button className="btn btn-primary">Create Event</button>
        <button className="btn btn-secondary ml-2">View Reports</button>
      </div>
    </div>
  );
};

export default Dashboard;