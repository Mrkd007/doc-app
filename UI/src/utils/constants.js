import DENTAL_IMG from "../assets/images/dental.png";
import BONES_IMG from "../assets/images/bone.png";
import DIAGNOSIS_IMG from "../assets/images/diagnosis.png";
import CARDIOLOGY_IMG from "../assets/images/cardiology.png";
import SURGERY_IMG from "../assets/images/surgery.png";
import PHYSICIAN_IMG from "../assets/images/physician.png";
import MRI_IMG from "../assets/images/MRI.PNG";
import EYE_IMG from "../assets/images/eye_care.png";
import DOCTOR1 from "../assets/images/male_doc.png";
import DOCTOR2 from "../assets/images/male_doc1.png";
import DOCTOR3 from "../assets/images/male_doc2.png";
import DOCTOR4 from "../assets/images/female_doc.png";
import DOCTOR5 from "../assets/images/female_doc1.png";

export const ROUTES = {
	HOME: "/",
	CONTACT: "/contact",
	LOGIN: "/login",
	REGISTER: "/register",
	ACCOUNT: "/account",
	PROFILE: "/profile",
	SETTINGS: "/settings",
	ADMIN: "/admin",
	DOCTOR: "/doctor",
	USER: "/user",
	EMPLOYEE: "/employee",
	EMPLOYEE_LOGIN: "/employee/login",
	PATIENT: "/patient",
	PATIENT_LIST: "/patient/list",
	APPOINTMENT: "/appointment",
	MEDICAL_RECORD: "/medical-record",
	MEDICAL_TEST: "/medical-test",
	MEDICAL_TREATMENT: "/medical-treatment",
};

export const menuItems = [
	{
		key: "home",
		label: "Home",
	},
	{
		key: "appointment",
		label: "Appointment",
	},
	{
		key: "about",
		label: "About",
	},
	{
		key: "contact",
		label: "Contact",
	},
];

export const serviceList = [
	{
		id: "service1",
		image: DENTAL_IMG,
		imageType: "cover",
		title: "Dental treatments",
		desc: "Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalaracc lacus vel facilisis volutpat est velitolm.",
		learnMoreBtn: true,
	},
	{
		id: "service2",
		image: BONES_IMG,
		imageType: "cover",
		title: "Bones treatments",
		desc: "Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalaracc lacus vel facilisis volutpat est velitolm.",
		learnMoreBtn: true,
	},
	{
		id: "service3",
		image: DIAGNOSIS_IMG,
		imageType: "cover",
		title: "Diagnosis",
		desc: "Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalaracc lacus vel facilisis volutpat est velitolm.",
		learnMoreBtn: true,
	},
	{
		id: "service4",
		image: CARDIOLOGY_IMG,
		imageType: "cover",
		title: "Cardiology",
		desc: "Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalaracc lacus vel facilisis volutpat est velitolm.",
		learnMoreBtn: true,
	},
	{
		id: "service5",
		image: SURGERY_IMG,
		imageType: "cover",
		title: "Surgery",
		desc: "Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalaracc lacus vel facilisis volutpat est velitolm.",
		learnMoreBtn: true,
	},
	{
		id: "service6",
		image: EYE_IMG,
		imageType: "cover",
		title: "Eye care",
		desc: "Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalaracc lacus vel facilisis volutpat est velitolm.",
		learnMoreBtn: true,
	},
	{
		id: "service7",
		image: PHYSICIAN_IMG,
		imageType: "cover",
		title: "Physician",
		desc: "Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalaracc lacus vel facilisis volutpat est velitolm.",
		learnMoreBtn: true,
	},
	{
		id: "service8",
		image: MRI_IMG,
		imageType: "cover",
		title: "MRI",
		desc: "Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalaracc lacus vel facilisis volutpat est velitolm.",
		learnMoreBtn: true,
	},
];

export const doctorsList = [
	{
		id: "doctor1",
		image: DOCTOR1,
		imageType: "centerCircle",
		title: "John Carter",
		designation: "HOD & Co-Founder",
		desc: "Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalaracc lacus vel facilisis volutpat est velitolm.",
		learnMoreBtn: false,
		socialMedia: true,
		rating: 5,
	},
	{
		id: "doctor2",
		image: DOCTOR4,
		imageType: "centerCircle",
		title: "Sophie Moore",
		designation: "dental specialist",
		desc: "Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalaracc lacus vel facilisis volutpat est velitolm.",
		learnMoreBtn: false,
		socialMedia: true,
		rating: 4.8,
	},
	{
		id: "doctor3",
		image: DOCTOR2,
		imageType: "centerCircle",
		title: "Matt Cannon",
		designation: "orthopedic",
		desc: "Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalaracc lacus vel facilisis volutpat est velitolm.",
		learnMoreBtn: false,
		socialMedia: true,
		rating: 5,
	},
	{
		id: "doctor4",
		image: DOCTOR3,
		imageType: "centerCircle",
		title: "Andy Smith",
		designation: "brain surgeon",
		desc: "Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalaracc lacus vel facilisis volutpat est velitolm.",
		learnMoreBtn: false,
		socialMedia: true,
		rating: 4.9,
	},
	{
		id: "doctor5",
		image: DOCTOR5,
		imageType: "centerCircle",
		title: "Lily Woods",
		designation: "heart specialist",
		desc: "Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalaracc lacus vel facilisis volutpat est velitolm.",
		learnMoreBtn: false,
		socialMedia: true,
		rating: 5,
	},
	{
		id: "doctor6",
		image: DOCTOR3,
		imageType: "centerCircle",
		title: "Patrick Meyer",
		designation: "eye specialist",
		desc: "Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalaracc lacus vel facilisis volutpat est velitolm.",
		learnMoreBtn: false,
		socialMedia: true,
		rating: 5,
	},
	{
		id: "doctor7",
		image: DOCTOR2,
		imageType: "centerCircle",
		title: "Mr. Rajan",
		designation: "General Physician",
		desc: "Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalaracc lacus vel facilisis volutpat est velitolm.",
		learnMoreBtn: false,
		socialMedia: true,
		rating: 4.9,
	},
	{
		id: "doctor8",
		image: DOCTOR4,
		imageType: "centerCircle",
		title: "Miss Adya",
		designation: "Heart Surgeon",
		desc: "Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalaracc lacus vel facilisis volutpat est velitolm.",
		learnMoreBtn: false,
		socialMedia: true,
		rating: 4.9,
	},
];

export const BASE_URL = 'http://localhost:8080/api/v1'
