import { Layout } from "antd";
import HeaderComp from "../../components/Header";
import { Content } from "antd/es/layout/layout";
import FooterComp from "../../components/Footer";

const Doctors = () => {
	return (
		<Layout breakpoints='md'>
			<HeaderComp selectedTab={"doctors"} />
			<Content className='doc-app__body'></Content>
			<FooterComp />
		</Layout>
	);
};

export default Doctors;
