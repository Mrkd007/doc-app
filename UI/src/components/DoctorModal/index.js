import { Button, Form, Input, Modal, Select } from "antd";
import { Option } from "antd/es/mentions";
import { useEffect, useState } from "react";
import { useAddDocMutation, useUpdateMutation } from "../../hooks/userHook";
import { ToastContainer, toast } from "react-toastify";

const AppointmentModal = (props) => {
	const {
		openModal,
		setOpenModal,
		fetchDocList,
		editableData,
		setEditableData,
	} = props;
	const [loading, setLoading] = useState(false);
	const [form] = Form.useForm();

	const {
		mutate: addDoctor,
		isLoading: isLoading,
		data: docData,
		error: error,
	} = useAddDocMutation();

	const {
		mutate: updateDoctor,
		isLoading: isUpdateLoading,
		data: updatedDocData,
		error: updatError,
	} = useUpdateMutation();

	useEffect(() => {
		console.log(docData, error?.response?.data);
		if (error?.response) {
			toast.error(error?.response?.data?.message || "Error in saving data", {
				pauseOnHover: false,
			});
			setLoading(false);
		} else if (docData) {
			toast.success(docData?.message);
			form.resetFields();
			setLoading(false);
			setOpenModal(false);
			fetchDocList();
		}
	}, [docData, error]);

	useEffect(() => {
		if (updatError?.response) {
			toast.error(
				updatError?.response?.data?.message || "Error in saving data",
				{
					pauseOnHover: false,
				},
			);
			setLoading(false);
		} else if (updatedDocData) {
			toast.success(updatedDocData?.message);
			form.resetFields();
			setLoading(false);
			setOpenModal(false);
			setEditableData(undefined);
			fetchDocList();
		}
	}, [updatedDocData, updatError]);

	const handleSubmit = () => {
		setLoading(true);
		form.submit();
	};

	const handleCancel = () => {
		form.resetFields();
		setLoading(false);
		setOpenModal(false);
	};

	const onFormSubmit = (values) => {
		const tempData = { ...values.user };
		tempData.role = tempData.role.toLowerCase();
		tempData.rating = parseInt(tempData.rating) || 1;
		tempData.address = [tempData.address, tempData.pincode];
		delete tempData.pincode;
		delete tempData.createdAt;
		delete tempData.updatedAt;
		delete tempData.__v;
		if (editableData) {
			tempData.id = editableData?._id;
			updateDoctor({ userData: tempData, type: "doctor" });
		} else {
			addDoctor({ userData: tempData });
		}
	};

	useEffect(() => {
		form.setFieldsValue({
			user: {
				userName: editableData?.userName || "",
				email: editableData?.email || "",
				phone: editableData?.phone || "",
				gender: editableData?.gender || "",
				speciality: editableData?.speciality || "",
				role: editableData?.role || "",
				designation: editableData?.designation || "",
				rating: editableData?.rating || "",
				profile: editableData?.profile || "",
				address: editableData?.address.split(",")[0] || "",
				pincode: editableData?.address.split(",")[1] || "",
				about: editableData?.about || "",
			},
		});
	}, [editableData]);

	return (
		<div className='doc-app__docmodal'>
			<Modal
				open={openModal}
				title='Add Doctor Profile'
				onOk={handleSubmit}
				onCancel={handleCancel}
				footer={[
					<Button
						key='submit'
						type='primary'
						loading={loading}
						onClick={handleSubmit}
						// form='addDoctorForm'
						htmlType='submit'
					>
						Submit
					</Button>,
				]}
			>
				<Form
					name='addDoctorForm'
					onFinish={onFormSubmit}
					form={form}
					className='doc-app__docmodal-form'
					layout='vertical'
				>
					<div className='doc-app__docmodal-form-section'>
						<Form.Item
							name={["user", "userName"]}
							label='Name'
							rules={[
								{
									required: true,
								},
							]}
						>
							<Input />
						</Form.Item>
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
									required: true,
									message: "Please input your phone number!",
								},
							]}
						>
							<Input />
						</Form.Item>
					</div>
					<div className='doc-app__docmodal-form-section'>
						<Form.Item
							name={["user", "gender"]}
							label='Gender'
							rules={[
								{
									required: true,
									message: "Please select gender!",
								},
							]}
						>
							<Select placeholder='Select one...'>
								<Option value='male'>Male</Option>
								<Option value='female'>Female</Option>
								<Option value='others'>Others</Option>\
							</Select>
						</Form.Item>
						<Form.Item
							name={["user", "speciality"]}
							label='Speciality'
							rules={[
								{
									required: true,
									message: "Please select speciality!",
								},
							]}
						>
							<Select placeholder='Select one...'>
								<Option value='physician'>Physician</Option>
								<Option value='dental'>Dental</Option>
								<Option value='orthopedists'>Orthopedists</Option>
								<Option value='cardiologist'>Cardiologist</Option>
								<Option value='ophthalmologist'>Ophthalmologist</Option>
								<Option value='researcher'>Researcher</Option>
							</Select>
						</Form.Item>
						{!editableData && (
							<Form.Item
								name={["user", "password"]}
								label='Password'
								rules={[
									{
										required: true,
										message: "Please input the password!",
									},
								]}
							>
								<Input />
							</Form.Item>
						)}
					</div>
					<div className='doc-app__docmodal-form-section'>
						<Form.Item
							name={["user", "role"]}
							label='Role'
							rules={[
								{
									required: true,
									message: "Please input the role!",
								},
							]}
						>
							<Input />
						</Form.Item>
						<Form.Item
							name={["user", "designation"]}
							label='Designation'
							rules={[
								{
									required: true,
									message: "Please input the designation!",
								},
							]}
						>
							<Input />
						</Form.Item>
						<Form.Item
							name={["user", "rating"]}
							label='Ratings: 1-5'
							rules={[
								{
									required: true,
									message: "Please input the rating!",
								},
							]}
						>
							<Input />
						</Form.Item>
					</div>

					<div className='doc-app__docmodal-form-section'>
						<Form.Item
							name={["user", "profile"]}
							label='Profile Image'
							rules={[
								{
									required: true,
									message: "Please input the profile image name!",
								},
							]}
						>
							<Input />
						</Form.Item>
						<Form.Item
							name={["user", "address"]}
							label='Address'
							rules={[
								{
									required: true,
									message: "Please input the address!",
								},
							]}
						>
							<Input />
						</Form.Item>
						<Form.Item
							name={["user", "pincode"]}
							label='Pincode'
							rules={[
								{
									required: true,
									message: "Please input the pincode!",
								},
							]}
						>
							<Input />
						</Form.Item>
					</div>
					<div className='doc-app__docmodal-form-section'>
						<Form.Item
							name={["user", "about"]}
							label='About'
							rules={[
								{
									required: true,
									message: "Please enter the description!",
								},
							]}
						>
							<Input.TextArea placeholder='Type desc here ...' rows={2} />
						</Form.Item>
					</div>
				</Form>
			</Modal>
			<ToastContainer/>
		</div>
	);
};

export default AppointmentModal;
