import { Layout } from "antd";
import HeaderComp from "../../components/Header";
import { Content } from "antd/es/layout/layout";
import FooterComp from "../../components/Footer";

const Appointments = () => {
	return (
		<Layout breakpoints='md'>
			<HeaderComp selectedTab={"appointments"} />
			<Content className='doc-app__body'></Content>
			<FooterComp />
		</Layout>
	);
};

export default Appointments;
