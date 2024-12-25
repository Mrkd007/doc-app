import { Button, Form, Input } from "antd";
import { LockOutlined, MailOutlined, UserOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import DOC_IMAGE from "../../assets/images/male_doc.png";
import LOGO from "../../assets/images/logo.png";
import { useLoginMutation, useRegisterMutation } from "../../hooks/userHook";
import { ToastContainer, toast } from "react-toastify";
import { setLS } from "../../utils/helperFunctions";

const RegisterLogin = (props) => {
	const { type } = props;
	const navigate = useNavigate();
	const [currentState, setCurrState] = useState(type || "login");

	const {
		mutate: loginUser,
		isLoading: loginLaoding,
		data: loginData,
		error: loginError,
	} = useLoginMutation();

	const {
		mutate: registerUser,
		isLoading: registerLaoding,
		data: registerData,
		error: registerError,
	} = useRegisterMutation();

	const userRegisterFun = (values) => {
		if (
			!values.userName ||
			!values.email ||
			!values.password ||
			!values.cnfmPassword
		) {
			toast.error("All fields are required", {
				pauseOnHover: false,
			});
			return;
		} else if (values.password !== values.cnfmPassword) {
			toast.error("Password and confirm password should be same", {
				pauseOnHover: false,
			});
			return;
		}
		registerUser({ userData: values });
	};

	const userLoginFun = (values) => {
		if (type === "doctor") {
			loginUser({ userData: values, type: "doctor" });
		} else {
			loginUser({ userData: values, type: "user" });
		}
	};

	useEffect(() => {
		setCurrState(type);
	}, [type]);

	useEffect(() => {
		if (registerError?.response) {
			toast.error(registerError?.response?.data?.message || "Error in login", {
				pauseOnHover: false,
			});
		} else if (registerData) {
			toast.success(registerData?.message);
			toast.success("Please login to continue");
			navigate("/login");
		}
	}, [registerData, registerError, navigate]);

	useEffect(() => {
		if (loginError?.response) {
			toast.error(loginError?.response?.data?.message || "Error in login", {
				pauseOnHover: false,
			});
		} else if (loginData) {
			toast.success(loginData?.message);
			setLS("user", JSON.stringify(loginData?.user));
			setLS("token", loginData?.token);
			setLS("role", loginData?.user?.role);
			navigate("/");
		}
	}, [loginData, loginError, navigate]);

	const loadLoginView = () => {
		return (
			<>
				<div className='authview-container__left'>
					<h1 className='authview-container__form-title'>Hello !!</h1>
					<h3 className='authview-container__form-subtitle'>
						Welcome back, Enter details to login
					</h3>
					<Form
						name='normal_login'
						className='authview-container__form login-form'
						initialValues={{
							remember: true,
						}}
						onFinish={userLoginFun}
					>
						<Form.Item
							name='email'
							rules={[
								{
									required: true,
									message: "Please input your Email!",
								},
							]}
						>
							<Input
								suffix={<MailOutlined className='site-form-item-icon' />}
								placeholder='Enter your email'
								size='large'
							/>
						</Form.Item>
						<Form.Item
							name='password'
							rules={[
								{
									required: true,
									message: "Please input your Password!",
								},
							]}
						>
							<Input
								suffix={<LockOutlined className='site-form-item-icon' />}
								type='password'
								placeholder='Password'
								size='large'
							/>
						</Form.Item>
						<Form.Item>
							<div className='authview-container__form-footer'>
								<Button
									type='primary'
									htmlType='submit'
									className='authview-container__form-btn'
									size='large'
								>
									Log in
								</Button>
								<span>
									Don't have an account,{" "}
									<Link
										to={"/register"}
										onClick={() => {
											setCurrState("register");
										}}
									>
										{" "}
										Create account
									</Link>
								</span>
							</div>
						</Form.Item>
					</Form>
				</div>
				<div className='authview-container__right'>
					<h1 className='authview-container__header'>
						Stay healthy with <br />
						<span
							style={{
								display: "flex",
								alignItems: "center",
								justifyContent: "center",
								gap: "0.5rem",
								cursor: "default",
							}}
						>
							<img src={LOGO} alt='logo' />
							HealthCare
						</span>
					</h1>
					<img
						className='authview-container__header-img'
						src={DOC_IMAGE}
						name='doc'
						alt='Doctor'
					/>
				</div>
			</>
		);
	};

	const loadRegisterView = () => {
		return (
			<>
				<div className='authview-container__left'>
					<h1 className='authview-container__header'>
						Stay healthy with <br />
						<span
							style={{
								display: "flex",
								alignItems: "center",
								justifyContent: "center",
								gap: "0.5rem",
								cursor: "default",
							}}
						>
							<img src={LOGO} alt='logo' />
							HealthCare
						</span>
					</h1>
					<img
						className='authview-container__header-img'
						src={DOC_IMAGE}
						name='doc'
						alt='Doctor'
					/>
				</div>
				<div className='authview-container__right'>
					<h1 className='authview-container__form-title'>Hello !!</h1>
					<h3 className='authview-container__form-subtitle'>
						Enter the details to create your account
					</h3>
					<Form
						name='normal_login'
						className='authview-container__form login-form'
						initialValues={{
							remember: true,
						}}
						onFinish={userRegisterFun}
					>
						<Form.Item
							name='userName'
							rules={[
								{
									required: true,
									message: "Please input your Username",
								},
							]}
						>
							<Input
								suffix={<UserOutlined className='site-form-item-icon' />}
								placeholder='Enter username'
								size='large'
							/>
						</Form.Item>
						<Form.Item
							name='email'
							rules={[
								{
									required: true,
									message: "Please input your Email!",
								},
							]}
						>
							<Input
								suffix={<MailOutlined className='site-form-item-icon' />}
								placeholder='Enter your email'
								size='large'
							/>
						</Form.Item>
						<Form.Item
							name='password'
							rules={[
								{
									required: true,
									message: "Please input your Password!",
								},
							]}
						>
							<Input
								suffix={<LockOutlined className='site-form-item-icon' />}
								type='password'
								placeholder='Password'
								size='large'
							/>
						</Form.Item>
						<Form.Item
							name='cnfmPassword'
							rules={[
								{
									required: true,
									message: "Please input the Confirm Password!",
								},
							]}
						>
							<Input
								suffix={<LockOutlined className='site-form-item-icon' />}
								type='password'
								placeholder='Confirm Password'
								size='large'
							/>
						</Form.Item>
						<Form.Item>
							<div className='authview-container__form-footer'>
								<Button
									type='primary'
									htmlType='submit'
									className='authview-container__form-btn'
									size='large'
								>
									Register
								</Button>
								<span>
									Already have an account,{" "}
									<Link
										to={"/login"}
										onClick={() => {
											setCurrState("login");
										}}
									>
										{" "}
										Login
									</Link>
								</span>
							</div>
						</Form.Item>
					</Form>
				</div>
			</>
		);
	};

	return (
		<div className='authview'>
			<div
				className={
					"authview-container" +
					(currentState === "register" ? " register-view" : " login-view")
				}
			>
				{currentState === "register" ? loadRegisterView() : loadLoginView()}
			</div>
			<ToastContainer />
		</div>
	);
};

export default RegisterLogin;
