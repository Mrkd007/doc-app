import { Layout } from "antd";
import HeaderComp from "../../components/Header";
import { Content } from "antd/es/layout/layout";
import FooterComp from "../../components/Footer";
import ProfileBody from "../../components/ProfileBody";

const Profile = () => {
	return (
		<Layout breakpoints='md'>
			<HeaderComp selectedTab={"profile"} />
			<Content className='doc-app__body'>
				<ProfileBody />
			</Content>
			<FooterComp />
		</Layout>
	);
};

export default Profile;
