import { Layout } from "antd";
import HeaderComp from "../../components/Header";
import { Content } from "antd/es/layout/layout";
import FooterComp from "../../components/Footer";
import AboutBody from "../../components/AboutBody";

const About = () => {
	return (
		<Layout breakpoints='md'>
			<HeaderComp selectedTab={"about"} />
			<Content className='doc-app__body'>
				<AboutBody />
			</Content>
			<FooterComp />
		</Layout>
	);
};

export default About;
