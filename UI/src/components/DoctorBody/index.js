import { DeleteFilled, EditFilled, ExclamationCircleFilled, PlusOutlined } from "@ant-design/icons";
import { Button, Modal, Space, Table, Tag } from "antd";
import { useEffect, useState } from "react";
import DoctorModal from "../DoctorModal";
import { useDeleteMutation, useGetDoctorListMutation } from "../../hooks/userHook";
import { ToastContainer, toast } from "react-toastify";
import { imageObj } from "../../utils/constants";
const { confirm } = Modal;

const DoctorBody = () => {
	const [doctorsList, setDoctorsList] = useState([]);
	const [openModal, setOpenModal] = useState(false);
	const [editableData, setEditableData] = useState(undefined);

	const {
		mutate: getDocList,
		isLoading: isLaoding,
		data: docData,
		error: error,
	} = useGetDoctorListMutation();

	const {
		mutate: deleteDoc,
		isLoading: isDeleteLaoding,
		data: delDocData,
		error: docError,
	} = useDeleteMutation();

	const fetchDocList = () => {
		getDocList();
	};

	useEffect(() => {
		fetchDocList();
	}, []);

	const reorganizeData = (data) => {
		const tempData = data.map((item) => {
			const tempItem = { ...item };
			tempItem.key = item._id;
			tempItem.address = item.address.join(", ");
			return tempItem;
		});
		return tempData;
	};

	useEffect(() => {
		if (error?.response) {
			toast.error(error?.response?.data?.message || "Error in fetching list", {
				pauseOnHover: false,
			});
		} else if (docData) {
			toast.success(docData?.message);
			setDoctorsList(reorganizeData(docData?.data));
		}
	}, [docData, error]);

	useEffect(() => {
		if (docError?.response) {
			toast.error(docError?.response?.data?.message || "Error in deleting data", {
				pauseOnHover: false,
			});
		} else if (delDocData) {
			toast.success(delDocData?.message);
			setDoctorsList(reorganizeData(delDocData?.data));
		}
	}, [delDocData, docError]);

	const showDeleteConfirm = (record) => {
		confirm({
			title: 'Are you sure delete the doctor profile?',
			icon: <ExclamationCircleFilled />,
			content: 'This is an irreversible action, dleted data can not be recovered.',
			okText: 'Yes',
			okType: 'danger',
			cancelText: 'No',
			onOk() {
				deleteDoc({id: record._id, type: 'doctor'});
				fetchDocList();
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
		showDeleteConfirm(record)
	};

	const columns = [
		{
			title: "",
			dataIndex: "profile",
			key: "profile",
			render: (text) => (
				<img
					src={text?.includes("http") ? text : imageObj[text]}
					className='doc-app__doctors-table-img'
					alt='profile'
					style={{ marginRight: "0.5rem" }}
				/>
			),
		},
		{
			title: "Name",
			dataIndex: "userName",
			key: "userName",
			render: (text) => (
				<b className='doc-app__doctors-table-userName'>{text}</b>
			),
		},
		{
			title: "Speciality",
			dataIndex: "speciality",
			key: "speciality",
			render: (text) => (
				<span className='doc-app__doctors-table-speciallity'>{text}</span>
			),
		},
		{
			title: "Role",
			dataIndex: "role",
			key: "role",
		},
		{
			title: "Designation",
			dataIndex: "designation",
			key: "designation",
			render: (text) => (
				<span className='doc-app__doctors-table-designation'>{text}</span>
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
			title: "Action",
			key: "action",
			render: (_, record) => (
				<Space size='medium'>
					<Button type='secondary' size='large' title='Edit' onClick={() => {onEdit(record)}} style={{ color: "blue" }}>
						<EditFilled />
					</Button>
					<Button type='secondary' size='large' title='Delete' onClick={() => {onDelete(record)}} style={{ color: "red" }}>
						<DeleteFilled />
					</Button>
				</Space>
			),
		},
	];

	return (
		<>
			<DoctorModal
				openModal={openModal}
				setOpenModal={setOpenModal}
				fetchDocList={fetchDocList}
				editableData={editableData}
				setEditableData={setEditableData}
			/>
			<div className='doc-app__doctors' id='docBody'>
				{!doctorsList.length ? (
					<>
						<div
							className='doc-app__doctors-empty'
							style={{ textAlign: "center" }}
						>
							There is no record found for the doctor.
							<br /> Please add record to update the list.
						</div>
						<Button
							size='large'
							type='primary'
							onClick={() => setOpenModal(true)}
						>
							<PlusOutlined />
							Add doctors
						</Button>
					</>
				) : (
					<>
						<div className='doc-app__doctors-header'>
							<div>
								<h1 className='doc-app__doctors-header-title'>Doctors List</h1>
								<span className='doc-app__doctors-header-subtitle'>
									This list contains all the basic details of the doctor
								</span>
							</div>
							<Button
								size='large'
								type='primary'
								onClick={() => setOpenModal(true)}
							>
								<PlusOutlined />
								Add doctors
							</Button>
						</div>
						<Table
							className='doc-app__doctors-table'
							columns={columns}
							dataSource={doctorsList || []}
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

export default DoctorBody;
