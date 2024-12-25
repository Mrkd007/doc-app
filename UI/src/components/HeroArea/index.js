import { Button } from "antd";
import DOC_IMAGE from "../../assets/images/male_doc1.png";
import AppointmentModal from "../AppointmentModal";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";

const HeroArea = () => {
	const [openModal, setOpenModal] = useState(false);
	return (
		<>
			<AppointmentModal
				openModal={openModal}
				setOpenModal={setOpenModal}
				fetchAppointmentsList={() => {}}
				toast={toast}
			/>
			<div className='doc-app__herocomp'>
				<img className='doc-app__herocomp-img' src={DOC_IMAGE} alt='Doctor' />
				<div className='doc-app__herocomp-text'>
					<h1 className='doc-app__herocomp-text-title'>
						Providing Quality{" "}
						<span style={{ color: "#007E85" }}>Healthcare</span> for a{" "}
						<span style={{ color: "#6EAB36" }}>Brighter</span> and{" "}
						<span style={{ color: "#6EAB36" }}>Healthy</span> Future
					</h1>
					<p className='doc-app__herocomp-text-desp'>
						At our hospital, we are dedicated to providing exceptional medical
						care to our patients and their families. Our experienced team of
						medical professionals, cutting-edge technology, and compassionate
						approach make us a leader in the healthcare industry
					</p>
					<Button
						className='doc-app__herocomp-text-btn'
						type='primary'
						size='large'
            onClick={() => setOpenModal(true)}
					>
						Schedule an Appontment
					</Button>
				</div>
			</div>
			<ToastContainer />
		</>
	);
};

export default HeroArea;
