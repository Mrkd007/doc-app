import { Layout } from "antd";
import HeaderComp from "../../components/Header";
import { Content } from "antd/es/layout/layout";
import FooterComp from "../../components/Footer";
import ContactBody from "../../components/ContactBody";

const Contact = () => {
	return (
		<Layout breakpoints='md'>
			<HeaderComp selectedTab={"contact"} />
			<Content className='doc-app__body'>
				<ContactBody />
			</Content>
			<FooterComp />
		</Layout>
	);
};

export default Contact;
