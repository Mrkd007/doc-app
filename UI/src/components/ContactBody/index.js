import { Button, Form, Input, Select, Spin } from "antd";
import HOSPITAL from "../../assets/images/hospital.png";
import { Option } from "antd/es/mentions";
import { SendOutlined } from "@ant-design/icons";
import emailjs from "emailjs-com";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";

const ContactBody = () => {
	const [isSending, setIsSending] = useState(false);
	const [contactform] = Form.useForm();
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

	const handleSubmit = (values) => {
		const USER_ID = process.env.REACT_APP_EMAILJS_USER_ID;
		const SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
		const TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
		const REPLY_ID = process.env.REACT_APP_REPLY_MAIL_ID;

		if (!USER_ID || !SERVICE_ID || !TEMPLATE_ID) {
			return console.error(
				"EmailJS user ID or service ID or template ID not found",
			);
		} else {
			setIsSending(true);
			emailjs.init(USER_ID);
			const templateParams = {
				name: `${values.user.firstName} ${values.user.lastName}`,
				email: values.user.email,
				reply_to: REPLY_ID,
				message: `The contact issue is realted to ${values.user.topic} \n\n The reason for contact is \n ${values.user.message} \n Phone: ${values.user.phone}\n`,
			};
			emailjs
				.send(SERVICE_ID, TEMPLATE_ID, templateParams)
				.then((response) => {
					console.log(
						"Email sent successfully!",
						response.status,
						response.text,
					);
					setIsSending(false);
					contactform.resetFields();
					toast.success("Email sent successfully!");
				})
				.catch((err) => {
					setIsSending(false);
					toast.error("Failed to send email!");
					console.error("Failed to send email:", err);
				});
		}
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
					onFinish={handleSubmit}
					validateMessages={validateMessages}
					className='doc-app__contact-form'
					layout='vertical'
					form={contactform}
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
								<Option value='Treatment'>Treatment</Option>
								<Option value='Payment'>Payment</Option>
								<Option value='Doctor'>Doctor</Option>
								<Option value='Appointment'>Appointment</Option>
								<Option value='General'>General</Option>
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
							<Button type='primary' htmlType='submit' size='large'>
								Send Message <SendOutlined />
							</Button>
						</Form.Item>
					</div>
				</Form>
			</div>
			<Spin spinning={isSending} tip='Loading' size='large' fullscreen />
			<ToastContainer />
		</>
	);
};

export default ContactBody;
