import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app you'd validate and send to backend. We'll just set a flag.
    localStorage.setItem("isRegistered", "true");
    alert("Registration successful. Please login.");
    navigate("/login");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="w-full max-w-md p-8 bg-card rounded-lg shadow">
        <h2 className="text-2xl font-bold mb-6">Register</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 border rounded"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 border rounded"
            required
          />
          <div className="flex items-center justify-between">
            <button type="submit" className="px-4 py-2 bg-primary text-primary-foreground rounded">Register</button>
            <button type="button" className="text-sm text-muted-foreground underline" onClick={() => navigate('/login')}>Already have an account?</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
