import { Button, DatePicker, Form, Input, Modal, Select } from "antd";
import { useEffect, useState } from "react";
import {
	useAddAptMutation,
	useGetDoctorListMutation,
	useUpdateAptMutation,
} from "../../hooks/userHook";
import { Option } from "antd/es/mentions";
import moment from "moment/moment";
import { getLS } from "../../utils/helperFunctions";

const AppointmentModal = (props) => {
	const {
		openModal,
		setOpenModal,
		fetchAppointmentsList,
		editableData,
		setEditableData,
		toast,
	} = props;
	const [loading, setLoading] = useState(false);
	const [form] = Form.useForm();

	const timeList = [
		{ time: "09:00 AM" },
		{ time: "10:00 AM" },
		{ time: "11:00 AM" },
		{ time: "12:00 PM" },
		{ time: "01:00 PM" },
		{ time: "02:00 PM" },
		{ time: "03:00 PM" },
		{ time: "04:00 PM" },
		{ time: "05:00 PM" },
		{ time: "06:00 PM" },
		{ time: "07:00 PM" },
		{ time: "08:00 PM" },
	];

	const {
		mutate: getDocList,
		isLoading: isLaoding,
		data: docData,
		error: error,
	} = useGetDoctorListMutation();

	const {
		mutate: addApointment,
		isLoading: isLoading,
		data: appointmentData,
		error: appointmentError,
	} = useAddAptMutation();

	const {
		mutate: updateAppointment,
		isLoading: isUpdateLoading,
		data: updatedAppointmentData,
		error: updatError,
	} = useUpdateAptMutation();

	useEffect(() => {
		if(getLS("role") === "doctor" || getLS("role") === "admin") {
			getDocList();
		}
	}, []);

	useEffect(() => {
		if (appointmentError?.response) {
			toast.error(
				appointmentError?.response?.data?.message || "Error in fetching data",
				{
					pauseOnHover: false,
				},
			);
			setLoading(false);
		} else if (appointmentData) {
			toast.success(appointmentData?.message);
			form.resetFields();
			setLoading(false);
			setOpenModal(false);
			fetchAppointmentsList();
		}
	}, [appointmentData, appointmentError]);

	useEffect(() => {
		if (updatError?.response) {
			toast.error(
				updatError?.response?.data?.message || "Error in saving data",
				{
					pauseOnHover: false,
				},
			);
			setLoading(false);
		} else if (updatedAppointmentData) {
			toast.success(updatedAppointmentData?.message);
			form.resetFields();
			setLoading(false);
			setOpenModal(false);
			setEditableData(undefined);
			fetchAppointmentsList();
		}
	}, [updatedAppointmentData, updatError]);

	const getDoctorArray = () => {
		const tempArray = [];
		docData?.data?.forEach((doc) => {
			tempArray.push({
				name: doc.userName,
				id: doc._id,
				speciality: doc.speciality,
			});
		});
		return tempArray;
	};

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
		tempData.role = moment(tempData.date).format("YYYY-MM-DD");
		tempData.address = [tempData.address, tempData.pincode];
		delete tempData.pincode;
		delete tempData.createdAt;
		delete tempData.updatedAt;
		delete tempData.__v;
		if (editableData) {
			tempData.id = editableData?._id;
			tempData.updateId = editableData?._id;
			updateAppointment({ userData: tempData, type: getLS("role") });
		} else {
			addApointment({ userData: tempData });
		}
	};

	useEffect(() => {
		form.setFieldsValue({
			user: {
				name: editableData?.name || "",
				email: editableData?.email || "",
				phone: editableData?.phone || "",
				gender: editableData?.gender || "",
				doctorId: editableData?.doctorId || "",
				mode: editableData?.mode || "",
				time: editableData?.time || "",
				date: moment(editableData?.date) || "",
				reason: editableData?.reason || "",
				address: editableData?.address.split(",")[0] || "",
				pincode: editableData?.address.split(",")[1] || "",
			},
		});
	}, [editableData]);

	const disabledDate = (current) => {
		return current && current < moment().endOf("day");
	};

	return (
		<div className='doc-app__appointment' id='dappointmentModal'>
			<Modal
				open={openModal}
				title='Add details for Appointment booking'
				onOk={handleSubmit}
				onCancel={handleCancel}
				footer={[
					<Button
						key='submit'
						type='primary'
						loading={loading}
						onClick={handleSubmit}
						// form='addApointmentForm'
						htmlType='submit'
					>
						Submit
					</Button>,
				]}
			>
				<Form
					name='addApointmentForm'
					onFinish={onFormSubmit}
					form={form}
					className='doc-app__appointment-form'
					layout='vertical'
				>
					<div className='doc-app__appointment-form-section'>
						<Form.Item
							name={["user", "name"]}
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
					<div className='doc-app__appointment-form-section'>
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
								<Option value='others'>Others</Option>
							</Select>
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
					<div className='doc-app__appointment-form-section'>
						<Form.Item
							name={["user", "doctorId"]}
							label='Doctor'
							rules={[
								{
									required: true,
									message: "Please select gender!",
								},
							]}
						>
							<Select placeholder='Select doctor...'>
								{getDoctorArray().map((doc, index) => (
									<Option key={index + "_time"} value={doc.id}>{`${
										doc.name
									} (${doc.speciality.toUpperCase()})`}</Option>
								))}
							</Select>
						</Form.Item>
						<Form.Item
							name={["user", "mode"]}
							label='Consultaion Mode'
							rules={[
								{
									required: true,
									message: "Please select consultaion mode!",
								},
							]}
						>
							<Select placeholder='Select one...'>
								<Option value='telephonic'>Telephonic</Option>
								<Option value='video'>Video</Option>
								<Option value='hospital'>Hospital</Option>
							</Select>
						</Form.Item>
					</div>

					<div className='doc-app__appointment-form-section'>
						<Form.Item
							name={["user", "date"]}
							label='Date'
							rules={[
								{
									required: true,
									message: "Please input the date!",
								},
							]}
						>
							<DatePicker disabledDate={disabledDate} />
						</Form.Item>
						<Form.Item
							name={["user", "time"]}
							label='Time'
							rules={[
								{
									required: true,
									message: "Please input the time!",
								},
							]}
						>
							<Select
								placeholder='Select time...'
								style={{ maxHeight: "100px" }}
							>
								{timeList.map((time, index) => (
									<Option key={index + "_time"} value={time.time}>
										{time.time}
									</Option>
								))}
							</Select>
						</Form.Item>
					</div>
					<div className='doc-app__appointment-form-section'>
						<Form.Item
							name={["user", "reason"]}
							label='Reason'
							rules={[
								{
									required: true,
									message: "Please enter the description!",
								},
							]}
						>
							<Input.TextArea placeholder='Type desc here...' rows={3} />
						</Form.Item>
					</div>
				</Form>
			</Modal>
		</div>
	);
};

export default AppointmentModal;
