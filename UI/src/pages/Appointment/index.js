import { Layout } from "antd";
import HeaderComp from "../../components/Header";
import FooterComp from "../../components/Footer";
import { Content } from "antd/es/layout/layout";
import AppointmentTable from "../../components/AppointmentTable";

const Appointment = () => {
	return (
		<Layout breakpoints='md'>
			<HeaderComp selectedTab={"appointment"} />
			<Content className='doc-app__body'>
        <AppointmentTable />
      </Content>
			<FooterComp />
		</Layout>
	);
};

export default Appointment;
