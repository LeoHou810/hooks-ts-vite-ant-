import LoginForm from "./components/LoginForm";
import SwitchDark from "@/components/SwitchDark";
import loginLeft from "@/assets/images/login_left.png";
import logo from "@/assets/images/logo.png";
import "./index.less";
import { connect } from "react-redux";

const Login = () => {
	return (
		<div className="login-container">
			<SwitchDark />
			<div className="login-box">
				<div className="login-left">
					<img src={loginLeft} alt="login" />
				</div>
				<div className="login-form">
					<div className="login-logo">
						<img className="login-icon" src={logo} alt="logo" />
						<span className="logo-text">Hooks-Admin</span>
					</div>
					<LoginForm />
				</div>
			</div>
		</div>
	);
};
function filter(state) {
	return state;
}
export default connect(filter)(Login);
