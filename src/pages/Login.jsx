import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simple client-side check: if registered flag is set, allow login
    const isRegistered = localStorage.getItem("isRegistered") === "true";
    if (!isRegistered) {
      alert("No account found. Please register first.");
      navigate("/register");
      return;
    }

  // For demo purposes, set logged in flag and navigate to home
  localStorage.setItem("isLoggedIn", "true");
  navigate("/");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="w-full max-w-md p-8 bg-card rounded-lg shadow">
        <h2 className="text-2xl font-bold mb-6">Login</h2>
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
            <button type="submit" className="px-4 py-2 bg-primary text-primary-foreground rounded">Login</button>
            <button type="button" className="text-sm text-muted-foreground underline" onClick={() => navigate('/register')}>Register</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
