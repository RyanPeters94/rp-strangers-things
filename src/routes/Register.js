import AuthForm from "../components/AuthForm.js";

const Register = ({ setToken }) => {
  return (
    <main>
      <AuthForm registerOrLogin="register" setToken={setToken} />
    </main>
  );
};
export default Register;
