import { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { loginService } from "../services/authService";

export default function Login() {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Simulación de login (aquí iría la llamada a la API real)
    if (email && password) {
      const loginResult = await loginService(email, password)

      if (loginResult) {
        login({ email, name: loginResult.name });
        setError("");
        navigate("/");
        return;
      } 
      setError("Correo o contraseña incorrectos");
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center">Iniciar Sesión</h2>
      <form onSubmit={handleSubmit} className="mx-auto mt-4" style={{ maxWidth: "400px" }}>
        <div className="mb-3">
          <label className="form-label">Correo electrónico</label>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="usuario@correo.com"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Contraseña</label>
          <input
            type="password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="********"
          />
        </div>
        <span style={{color: 'red'}} >{error}</span>
        <button className="btn btn-primary w-100" type="submit">
          Ingresar
        </button>
      </form>
    </div>
  );
}
