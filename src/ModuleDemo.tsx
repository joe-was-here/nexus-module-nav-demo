import { useNavigate } from "react-router-dom";

const ModuleDemo = () => {
  const navigate = useNavigate();

  return (
    <div style={{ border: "1px solid red" }}>
      <h1>Module Demo</h1>
      <p>This red box contains module component</p>
      <button onClick={() => navigate("/test")}>Navigate to test</button>
    </div>
  );
};

export default ModuleDemo;
