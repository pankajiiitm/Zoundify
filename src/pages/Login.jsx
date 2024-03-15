import Form from "../components/Form/Form";
import Header from "../components/Header/Header";
import "./Login.css";

const Login = () => {
  return (
    <div className="login-page-new">
      <Header />
      <div className="login-page-new__main">
        {/*Background Image */}
        <div className="login-page-new__main-bg "></div>
        <div className="login-page-new__main-container">
          <Form />
        </div>
      </div>
    </div>
  );
};

export default Login;
