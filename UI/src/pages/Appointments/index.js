import { Layout } from "antd";
import HeaderComp from "../../components/Header";
import { Content } from "antd/es/layout/layout";
import FooterComp from "../../components/Footer";
import AppointmentTable from "../../components/AppointmentTable";

const Appointments = () => {
	return (
		<Layout breakpoints='md'>
			<HeaderComp selectedTab={"appointments"} />
			<Content className='doc-app__body'>
        <AppointmentTable />
      </Content>
			<FooterComp />
		</Layout>
	);
};

export default Appointments;
