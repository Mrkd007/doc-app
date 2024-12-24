import { Button, Dropdown, Layout, Menu } from "antd";
import { useEffect, useState } from "react";
import { getLS } from "../../utils/helperFunctions";
import { menuItems } from "../../utils/constants";
import { LoginOutlined, SettingOutlined } from "@ant-design/icons";
import LOGO from "../../assets/images/logo.png";
import { useNavigate } from "react-router-dom";
const { Header } = Layout;

const HeaderComp = ({ selectedTab }) => {
	const navigate = useNavigate();
	let user = getLS("user");
  user = JSON.parse(user);
  console.log(user)
	const role = getLS("role");
	const [items, setItems] = useState(menuItems);

	const onNavChange = ({ key, domEvent }) => {
		if (key === "home") {
			navigate("/");
		} else {
			navigate("/" + key);
		}
	};

	const handleMenuClick = () => {};

	const handleButtonClick = () => {};

	const items1 = [
		{
			label: "Profile",
			key: "1",
			icon: <SettingOutlined />,
		},
		{
			type: "divider",
		},
		{
			label: "Log out",
			key: "2",
			icon: <LoginOutlined />,
			danger: true,
		},
	];
	const menuProps = {
		items: items1,
		onClick: handleMenuClick,
	};
	useEffect(() => {
		if (role === "doctor") {
			const tempArr = [...menuItems];
			tempArr.splice(1, 1, { key: "appointments", label: "Appointments" });
			setItems(tempArr);
		} else if (role === "admin") {
			const tempArr = [...menuItems];
			tempArr.splice(1, 1, { key: "appointments", label: "Appointments" }, { key: "doctors", label: "Doctors" });
			setItems(tempArr);
		}
	}, [role]);
	return (
		<div className='doc-app__header'>
			<Header className='doc-app__header-comp'>
				<div className='doc-app__header-logo'>
					<img src={LOGO} alt='logo' />
					Healthcare
				</div>
				<Menu
					className='doc-app__header-menu'
					theme='dark'
					mode='horizontal'
					defaultSelectedKeys={selectedTab ? [selectedTab] : ["home"]}
					items={items}
					onSelect={onNavChange}
				/>
				{user ? (
					<Dropdown.Button
						arrow
						className='doc-app__header-options'
						menu={menuProps}
						onClick={handleButtonClick}
					>
						{user.userName}
					</Dropdown.Button>
				) : (
					<Button
						type='primary'
						size='large'
						onClick={() => {
							navigate("/login");
						}}
					>
						Log In
					</Button>
				)}
			</Header>
		</div>
	);
};

export default HeaderComp;
