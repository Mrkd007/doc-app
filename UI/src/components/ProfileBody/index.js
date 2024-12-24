import {
	FacebookFilled,
	InstagramFilled,
	LinkedinFilled,
	StarFilled,
	TwitterCircleFilled,
} from "@ant-design/icons";
import { useState } from "react";
import { getLS } from "../../utils/helperFunctions";
import { imageObj } from "../../utils/constants";

const ProfileBody = () => {
	const [userData, setUserData] = useState(JSON.parse(getLS("user")));
	return (
		<>
			<div className='doc-app__profile'>
				<div className='doc-app__profile-box'>
					<div className='doc-app__profile-box-left'>
						<div className='doc-app__profile-image'>
							<img
								src={
									userData?.profile.includes("http")
										? userData?.profile
										: imageObj[userData?.profile]
								}
								alt='User'
							/>
						</div>
						<h1 className='doc-app__profile-name'>{userData?.userName}</h1>
						{userData?.designation && (
							<span className='doc-app__profile-designation'>
								{userData?.designation}
							</span>
						)}
						{userData?.speciality && (
							<span className={"doc-app__profile-speciality center-aligned-text"}>
								Speciality: {userData.speciality}
							</span>
						)}
						{userData?.rating && (
							<span className={"doc-app__profile-rating center-aligned-text"}>
								Ratings: {userData.rating}
								<StarFilled />
							</span>
						)}
						<ul className='doc-app__profile-social'>
							<li>
								<FacebookFilled />
							</li>
							<li>
								<InstagramFilled />
							</li>
							<li>
								<LinkedinFilled />
							</li>
							<li>
								<TwitterCircleFilled />
							</li>
						</ul>
					</div>
					<div className='doc-app__profile-box-right'>
						{userData?.about && (
							<div className='doc-app__profile-section'>
								<div className='doc-app__profile-block'>
									<label className='doc-app__profile-block-label'>About</label>
									<span className='doc-app__profile-block-data'>
										{userData?.about}
									</span>
								</div>
							</div>
						)}
						<div className='doc-app__profile-section'>
							<div className='doc-app__profile-block'>
								<label className='doc-app__profile-block-label'>Email</label>
								<span className='doc-app__profile-block-data'>
									{userData?.email}
								</span>
							</div>

							<div className='doc-app__profile-block'>
								<label className='doc-app__profile-block-label'>Phone</label>
								<span className='doc-app__profile-block-data'>
									{userData?.phone}
								</span>
							</div>
						</div>
						<div className='doc-app__profile-section'>
							<div className='doc-app__profile-block'>
								<label className='doc-app__profile-block-label'>Role</label>
								<span className='doc-app__profile-block-data'>
									{userData?.role}
								</span>
							</div>
							<div className='doc-app__profile-block'>
								<label className='doc-app__profile-block-label'>Gender</label>
								<span className='doc-app__profile-block-data'>
									{userData?.gender}
								</span>
							</div>
						</div>
						<div className='doc-app__profile-section'>
							<div className='doc-app__profile-block'>
								<label className='doc-app__profile-block-label'>Address</label>
								<span className='doc-app__profile-block-data'>
									{userData?.address}
								</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default ProfileBody;
