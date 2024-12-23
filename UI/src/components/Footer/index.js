import { Footer } from "antd/es/layout/layout";
import LOGO from '../../assets/images/logo.png'
import { FacebookFilled, InstagramFilled, LinkedinFilled, TwitterCircleFilled } from "@ant-design/icons";

const FooterComp = () => {
	return (
		<Footer className='doc-app__footer'>
			{/* <div className='doc-app__footer-left'> */}
				<div className='doc-app__footer-logo'>
					<img src={LOGO} alt='logo' />
					Healthcare
				</div>
				<span>HealthCare ©{new Date().getFullYear()} Created by Krishna Devashish</span>
				<span>All rights reserved by @Healthcare</span>
			{/* </div> */}
      {/* <div className='doc-app__footer-right'>
        <h3>Follow us</h3>
        <ul>
          <li><FacebookFilled /> Faecebook</li>
          <li><InstagramFilled /> Instagram</li>
          <li><LinkedinFilled /> Linkedin</li>
          <li><TwitterCircleFilled /> Twitter</li>
        </ul>
      </div> */}
		</Footer>
	);
};

export default FooterComp;
