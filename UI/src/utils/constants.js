import DENTAL_IMG from '../assets/images/dental.png'
import BONES_IMG from '../assets/images/bone.png'
import DIAGNOSIS_IMG from '../assets/images/diagnosis.png'
import CARDIOLOGY_IMG from '../assets/images/cardiology.png'
import SURGERY_IMG from '../assets/images/surgery.png'
import EYE_IMG from '../assets/images/eye_care.png'

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
		key: 'home',
		label: "Home",
	},
	{
		key: 'appointment',
		label: "Appointment",
	},
	{
		key: 'about',
		label: "About",
	},
	{
		key: 'contact',
		label: "Contact",
	},
];

export const serviceList = [
	{
		id: 'service1',
		image: DENTAL_IMG,
		imageType: 'cover',
		title: "Dental treatments",
		desc: "Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalaracc lacus vel facilisis volutpat est velitolm.",
		learnMoreBtn: true,
	},
	{
		id: 'service2',
		image: BONES_IMG,
		imageType: 'cover',
		title: "Bones treatments",
		desc: "Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalaracc lacus vel facilisis volutpat est velitolm.",
		learnMoreBtn: true,
	},
	{
		id: 'service3',
		image: DIAGNOSIS_IMG,
		imageType: 'cover',
		title: "Diagnosis",
		desc: "Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalaracc lacus vel facilisis volutpat est velitolm.",
		learnMoreBtn: true,
	},
	{
		id: 'service4',
		image: CARDIOLOGY_IMG,
		imageType: 'cover',
		title: "Cardiology",
		desc: "Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalaracc lacus vel facilisis volutpat est velitolm.",
		learnMoreBtn: true,
	},
	{
		id: 'service5',
		image: SURGERY_IMG,
		imageType: 'cover',
		title: "Surgery",
		desc: "Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalaracc lacus vel facilisis volutpat est velitolm.",
		learnMoreBtn: true,
	},
	{
		id: 'service6',
		image: EYE_IMG,
		imageType: 'cover',
		title: "Eye care",
		desc: "Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalaracc lacus vel facilisis volutpat est velitolm.",
		learnMoreBtn: true,
	},
]
