import { Button, Form, Input, Select } from "antd";
import HOSPITAL from "../../assets/images/hospital.png";
import { Option } from "antd/es/mentions";
import { SendOutlined } from "@ant-design/icons";

const ContactBody = () => {
	const validateMessages = {
		required: "${label} is required!",
		types: {
			email: "${label} is not a valid email!",
			phone: "${label} is not a valid phone number!",
		},
		number: {
			range: "${label} must be between ${min} and ${max}",
		},
	};
	const onFinish = (values) => {
		console.log(values);
	};
	return (
		<>
			<img className='doc-app__contact-img' src={HOSPITAL} alt='Hospital' />
			<div className='doc-app__contact'>
				<div className='doc-app__contact-header'>
					<span className='doc-app__contact-header-msg'>Get In Touch</span>
					<h1 className='doc-app__contact-header-title'>Contact Us</h1>
					<p className='doc-app__contact-header-subtitle'>
						Enter your quey with basic info to reach out, we will resolve your
						querries shortly
					</p>
				</div>
				<Form
					name='contactForm'
					onFinish={onFinish}
					validateMessages={validateMessages}
					className='doc-app__contact-form'
					layout='vertical'
				>
					<div className='doc-app__contact-form-section'>
						<Form.Item
							name={["user", "firstName"]}
							label='First Name'
							rules={[
								{
									required: true,
								},
							]}
						>
							<Input />
						</Form.Item>
						<Form.Item
							name={["user", "lastName"]}
							label='Last Name'
							rules={[
								{
									required: true,
								},
							]}
						>
							<Input />
						</Form.Item>
					</div>
					<div className='doc-app__contact-form-section'>
						<Form.Item
							name={["user", "email"]}
							label='Email'
							rules={[
								{
									type: "email",
									required: true,
									message: "Please input your email!",
								},
							]}
						>
							<Input />
						</Form.Item>
						<Form.Item
							name={["user", "phone"]}
							label='Phone'
							rules={[
								{
									type: "phone",
									required: true,
									message: "Please input your phone number!",
								},
							]}
						>
							<Input />
						</Form.Item>
					</div>
					<div className='doc-app__contact-form-section'>
						<Form.Item
							name={["user", "topic"]}
							label='Choose a topic'
							rules={[
								{
									required: true,
									message: "Please choose a topic!",
								},
							]}
						>
							<Select placeholder='Select one...'>
								<Option value='treatment'>Treatment</Option>
								<Option value='payment'>Payment</Option>
								<Option value='doctor'>Doctor</Option>
								<Option value='appointment'>Appointment</Option>
								<Option value='general'>General</Option>
							</Select>
						</Form.Item>
					</div>
					<div className='doc-app__contact-form-section'>
						<Form.Item
							name={["user", "message"]}
							label='Message'
							rules={[
								{
									required: true,
									message: "Please enter the detail message!",
								},
							]}
						>
							<Input.TextArea
								placeholder='Type your message here ...'
								rows={6}
							/>
						</Form.Item>
					</div>
					<div className='doc-app__contact-form-section'>
						<Form.Item label={null}>
							<Button type='primary' htmlType='submit' size="large">
								Send Message <SendOutlined />
							</Button>
						</Form.Item>
					</div>
				</Form>
			</div>
		</>
	);
};

export default ContactBody;
