import { Layout } from "antd";
import HeaderComp from "../../components/Header";
import { Content } from "antd/es/layout/layout";
import FooterComp from "../../components/Footer";
import DoctorBody from "../../components/DoctorBody";

const Doctors = () => {
	return (
		<Layout breakpoints='md'>
			<HeaderComp selectedTab={"doctors"} />
			<Content className='doc-app__body'>
        <DoctorBody />
      </Content>
			<FooterComp />
		</Layout>
	);
};

export default Doctors;
