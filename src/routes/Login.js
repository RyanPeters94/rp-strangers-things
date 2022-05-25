import { AuthForm } from "../imports";

const Login = ({ setToken }) => {
  return (
    <main>
      <AuthForm registerOrLogin="login" setToken={setToken} />
    </main>
  );
};
export default Login;
