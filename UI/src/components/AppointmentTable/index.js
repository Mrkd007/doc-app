import {
	DeleteFilled,
	EditFilled,
	ExclamationCircleFilled,
	PlusOutlined,
} from "@ant-design/icons";
import { Button, Modal, Space, Table, Tag } from "antd";
import { useEffect, useState } from "react";
import AppointmentModal from "../AppointmentModal";
import {
	useDeleteAptMutation,
	useGeAptListMutation,
} from "../../hooks/userHook";
import { ToastContainer, toast } from "react-toastify";
import { getLS } from "../../utils/helperFunctions";
import moment from "moment";
const { confirm } = Modal;

const AppointmentTable = () => {
	const [openModal, setOpenModal] = useState(false);
	const [appointmentList, setAppointmentList] = useState([]);
	const [editableData, setEditableData] = useState(undefined);

	const {
		mutate: getAppointments,
		isLoading: isLaoding,
		data: appointmentData,
		error: appointmentError,
	} = useGeAptListMutation();

	const {
		mutate: deleteApt,
		isLoading: isAptLaoding,
		data: delAptData,
		error: aptError,
	} = useDeleteAptMutation();

	const fetchAppointmentsList = () => {
		getAppointments();
	};

	useEffect(() => {
		fetchAppointmentsList();
	}, []);

	useEffect(() => {
		if (appointmentError?.response) {
			toast.error(
				appointmentError?.response?.data?.message || "Error in fetching data",
				{
					pauseOnHover: false,
				},
			);
		} else if (appointmentData) {
			toast.success(appointmentData?.message);
			setAppointmentList(reorganizeData(appointmentData?.data));
		}
	}, [appointmentData, appointmentError]);

	useEffect(() => {
		if (aptError?.response) {
			toast.error(
				aptError?.response?.data?.message || "Error in fetching data",
				{
					pauseOnHover: false,
				},
			);
		} else if (delAptData) {
			toast.success(delAptData?.message);
			fetchAppointmentsList();
		}
	}, [delAptData, aptError]);

	const reorganizeData = (data) => {
		const tempData = data.map((item) => {
			const tempItem = { ...item };
			tempItem.key = item._id;
			tempItem.address = item.address.join(", ");
			return tempItem;
		});
		return tempData;
	};

	const role = getLS("role");

	const showDeleteConfirm = (record) => {
		confirm({
			title: "Are you sure delete the appointment?",
			icon: <ExclamationCircleFilled />,
			content:
				"This is an irreversible action, deleted data can not be recovered.",
			okText: "Yes",
			okType: "danger",
			cancelText: "No",
			onOk() {
				deleteApt({ id: record._id });
				fetchAppointmentsList();
			},
			onCancel() {
				// do nothing
			},
		});
	};

	const onEdit = (record) => {
		setEditableData(record);
		setOpenModal(true);
	};

	const onDelete = (record) => {
		showDeleteConfirm(record);
	};

	const columns = [
		{
			title: "Name",
			dataIndex: "name",
			key: "name",
			render: (text) => (
				<b className='doc-app__appointmentbody-table-userName'>{text}</b>
			),
		},
		{
			title: "Phone",
			dataIndex: "phone",
			key: "phone",
		},
		{
			title: "Email",
			dataIndex: "email",
			key: "email",
		},
		{
			title: "Gender",
			dataIndex: "gender",
			key: "gender",
			render: (text) => (
				<span className='doc-app__appointmentbody-table-gender'>
					{text.toUpperCase()}
				</span>
			),
		},
		{
			title: "Mode",
			dataIndex: "mode",
			key: "mode",
			render: (text) => (
				<span className='doc-app__appointmentbody-table-mode'>
					{text.toUpperCase()}
				</span>
			),
		},
		{
			title: "Appointment Date",
			dataIndex: "date",
			key: "date",
			render: (text) => (
				<span className='doc-app__appointmentbody-table-speciallity'>
					{moment(text).format('YYYY-MM-DD')}
				</span>
			),
		},
		{
			title: "Appointment Time",
			dataIndex: "time",
			key: "time",
			render: (text) => (
				<span className='doc-app__appointmentbody-table-designation'>
					{text}
				</span>
			),
		},
		{
			title: "Appointment Reason",
			dataIndex: "reason",
			key: "reason",
			render: (text) => (
				<span className='doc-app__appointmentbody-table-designation'>
					{text}
				</span>
			),
		},
		{
			title: "Action",
			key: "action",
			render: (_, record) => (
				<Space size='medium'>
					<Button
						type='secondary'
						size='large'
						title='Edit'
						onClick={() => {
							onEdit(record);
						}}
						style={{ color: "blue" }}
						disabled={getLS("role") === "user"}
					>
						<EditFilled />
					</Button>
					<Button
						type='secondary'
						size='large'
						title='Delete'
						onClick={() => {
							onDelete(record);
						}}
						style={{ color: "red" }}
						disabled={getLS("role") === "user"}
					>
						<DeleteFilled />
					</Button>
				</Space>
			),
		},
	];
	return (
		<>
			<AppointmentModal
				openModal={openModal}
				setOpenModal={setOpenModal}
				fetchAppointmentsList={fetchAppointmentsList}
				editableData={editableData}
				setEditableData={setEditableData}
				toast={toast}
			/>
			<div className='doc-app__appointmentbody'>
				{!appointmentList.length ? (
					<>
						<div
							className='doc-app__appointmentbody-empty'
							style={{ textAlign: "center" }}
						>
							There is no record found for the appointments.
							<br /> Please add record to update the list.
						</div>
						<Button
							size='large'
							type='primary'
							onClick={() => setOpenModal(true)}
						>
							<PlusOutlined />
							Add appointments
						</Button>
					</>
				) : (
					<>
						<div className='doc-app__appointmentbody-header'>
							<div>
								<h1 className='doc-app__appointmentbody-header-title'>
									Appointment List
								</h1>
								<span className='doc-app__appointmentbody-header-subtitle'>
									{getLS("role") !== "admin"
										? "This list contains all the appointments booked and completed so far"
										: "This list contains all the appointments for all the of the doctors"}
								</span>
							</div>
							<Button
								size='large'
								type='primary'
								onClick={() => setOpenModal(true)}
							>
								<PlusOutlined />
								Add appointments
							</Button>
						</div>
						<Table
							className='doc-app__appointmentbody-table'
							columns={columns}
							dataSource={appointmentList || []}
							pagination={{
								pageSize: 10,
							}}
						/>
					</>
				)}
			</div>
			<ToastContainer />
		</>
	);
};

export default AppointmentTable;
