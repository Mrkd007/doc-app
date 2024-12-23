import { Button, Checkbox, Form, Input } from "antd";
import { LockOutlined, MailOutlined, UserOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import DOC_IMAGE from "../../assets/images/male_doc.png";
import LOGO from '../../assets/images/logo.png'

const RegisterLogin = (props) => {
	const { type } = props;
	const [currentState, setCurrState] = useState(type || "login");

  useEffect(() => {
    setCurrState(type)
  }, [type])

	const onFinish = (values) => {
		console.log(values);
	};

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
						onFinish={onFinish}
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
						{/* <Form.Item>
							<Form.Item name='remember' valuePropName='checked' noStyle>
								<Checkbox>Remember me</Checkbox>
							</Form.Item>

							<a className='login-form-forgot' href=''>
								Forgot password
							</a>
						</Form.Item> */}

						<Form.Item>
							<div className='authview-container__form-footer'>
								<Button
									type='primary'
									htmlType='submit'
									className='authview-container__form-btn'
                  size="large"
								>
									Log in
								</Button>
								<span>
									Don't have an account, <Link to={"/register"} onClick={() => {setCurrState('register')}}> Create account</Link>
								</span>
							</div>
						</Form.Item>
					</Form>
				</div>
				<div className='authview-container__right'>
					<h1 className='authview-container__header'>
						Stay healthy with <br /> 
						<span style={{display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', cursor: 'default'}}>
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
						<span style={{display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', cursor: 'default'}}>
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
						onFinish={onFinish}
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
						{/* <Form.Item>
							<Form.Item name='remember' valuePropName='checked' noStyle>
								<Checkbox>Remember me</Checkbox>
							</Form.Item>

							<a className='login-form-forgot' href=''>
								Forgot password
							</a>
						</Form.Item> */}

						<Form.Item>
							<div className='authview-container__form-footer'>
								<Button
									type='primary'
									htmlType='submit'
									className='authview-container__form-btn'
                  size="large"
								>
									Register
								</Button>
								<span>
									Already have an account, <Link to={"/login"} onClick={() => {setCurrState('login')}}> Login</Link>
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
		</div>
	);
};

export default RegisterLogin;
