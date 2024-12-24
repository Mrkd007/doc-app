import { Layout } from "antd";
import HeroArea from "../../components/HeroArea";
import Body from "../../components/Body";
import HeaderComp from "../../components/Header";
import FooterComp from "../../components/Footer";
const { Content } = Layout;
const Home = () => {
	return (
		<Layout breakpoints='md'>
			<HeaderComp />
			<Content className='doc-app__body'>
				<HeroArea />
				<Body />
			</Content>
			<FooterComp />
		</Layout>
	);
};
export default Home;
