import {
  faDoorOpen,
  faEye,
  faEyeSlash,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/ui/Button/Button";
import SearchInput from "../../components/ui/SearchInput/SearchInput";
import "./Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error] = useState("");
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const switchPasswordType = () => {
    setShowPassword((prevState) => !prevState);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setIsLoading(true);

    setTimeout(() => {
      navigate("/home");
      setIsLoading(false);
    }, 2000);
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="container-content-title-login">
          <h2>Login</h2>
        </div>
        {error && <div className="error">{error}</div>}
        <form onSubmit={handleSubmit}>
          <SearchInput
            label="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            width="100%"
            height="50px"
            type="text"
            icon={<FontAwesomeIcon icon={faUser} />}
          />
          <SearchInput
            label="Senha"
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            width="100%"
            height="50px"
            icon={
              <FontAwesomeIcon
                icon={showPassword ? faEye : faEyeSlash}
                onClick={switchPasswordType}
              />
            }
          />
          <Button
            text="Logar"
            icon={faDoorOpen}
            background="#006d77"
            hoverColor="#004f59"
            borderRadius="5px"
            fullWidth={true}
            type="submit"
            isLoading={isLoading}
            loadingText="Logando"
            typeSppiner="bars"
          />
        </form>
        <div className="recovery-link">
          <a href="/auth/recovery">Esqueci minha senha</a>
        </div>
      </div>
    </div>
  );
}

export default Login;
