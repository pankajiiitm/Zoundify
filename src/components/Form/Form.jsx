import GoogleLogin from "@leecheuk/react-google-login";
import "./Form.css";
export default function Form() {
  const responseGoogle = (response) => {
    console.log(response);
  };
  return (
    <div className="login-page-new__main-form">
      <div className="login-page-new__main-form-title-brand">
        <h1 className="login-page-new__main-form-title">Welcome Back!</h1>
        <div className="login-page-new__main-form-router-outlet login-page-new__main-form-login">
          <form>
            <div className="login-page-new__main-form-row">
              <label className="login-page-new__main-form-row-label">
                Email
              </label>
              <input
                type="email"
                placeholder="Enter Your Email
                    "
              />
              <div
                className="login-page-new__main-form-row-icon"
                aria-hidden={true}>
                <img src="/map.svg" alt="Map Image" />
              </div>
            </div>
            <div className="login-page-new__main-form-row">
              <label className="login-page-new__main-form-row-label">
                Password
              </label>
              <input
                type="password"
                placeholder="Enter Your Password
                    "
              />
              <div
                className="login-page-new__main-form-row-icon"
                aria-hidden={true}>
                <img
                  src="https://app.clickup.com/map.44f9e6cba501ed75ba37f30439219108.svg#svg-sprite-global__lock"
                  alt="SVG"
                />
              </div>
            </div>
            <button className="login-page-new__main-form-button " type="submit">
              <span className="login-page-new__main-form-button-text">
                Log In
              </span>
            </button>

            <GoogleLogin
              clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
              onSuccess={responseGoogle}
              onFailure={responseGoogle}
              cookiePolicy={"single_host_origin"}
              className="custom-google-login">
              <span> Sign in with Google</span>
            </GoogleLogin>
          </form>
        </div>
      </div>
    </div>
  );
}
