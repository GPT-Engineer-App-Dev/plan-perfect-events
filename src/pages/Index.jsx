import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="text-center">
      <h1 className="text-3xl font-bold mb-4">Welcome to Event Manager</h1>
      <p className="mb-6">Manage your events efficiently and effortlessly.</p>
      <Button onClick={() => navigate("/create-event")} variant="primary">
        Create New Event
      </Button>
    </div>
  );
};

export default Index;