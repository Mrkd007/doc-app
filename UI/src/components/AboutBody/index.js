import { Button } from "antd";
import LOGO from "../../assets/images/logo.png";
import HOSPITAL from "../../assets/images/hospital.png";
import { doctorsList } from "../../utils/constants";
import Cards from "../Cards";

const AboutBody = () => {
	return (
    <>
    <img className='doc-app__aboutBody-img' src={HOSPITAL} alt='Hospital' />
		<div className='doc-app__aboutBody'>
			<section className='doc-app__section hero-section'>
				
				<div className='doc-app__aboutBody-details'>
					<div className='doc-app__aboutBody-details-section'>
						<h1 className='doc-app__aboutBody-details-section-title'>About Us</h1>
						<p className='doc-app__aboutBody-details-section-desc'>
							Welcome to [Hospital Name], where compassion meets excellence in
							healthcare. Our mission is to provide the highest quality of
							medical care to all patients, ensuring a safe and healing
							environment. With a team of skilled and dedicated doctors, nurses,
							and healthcare professionals, we offer a wide range of services
							designed to meet the diverse needs of our community.
						</p>
					</div>
					<div className='doc-app__aboutBody-details-section'>
						<h1 className='doc-app__aboutBody-details-section-title'>Our Doctors</h1>
						<p className='doc-app__aboutBody-details-section-desc'>
							At [Hospital Name], our doctors are at the heart of everything we
							do. We pride ourselves on having a team of highly experienced
							specialists in various fields, including cardiology, orthopedics,
							pediatrics, neurology, obstetrics, and more. Each physician is
							committed to delivering personalized care and the latest
							treatments to ensure the best possible outcomes for our patients.
						</p>
					</div>
					<div className='doc-app__aboutBody-details-section'>
						<h1 className='doc-app__aboutBody-details-section-title'>Our Facilities</h1>
						<p className='doc-app__aboutBody-details-section-desc'>
							Our state-of-the-art facilities are designed to provide the most
							advanced medical treatments while prioritizing patient comfort.
							From cutting-edge diagnostic equipment to modern surgical suites,
							we ensure that every aspect of care is of the highest standard.
							Our hospital is equipped with:
						</p>
						<ul className='doc-app__aboutBody-details-section-list'>
							<li>Emergency Services</li>
							<li>Inpatient and Outpatient Care</li>
							<li>Maternity and Neonatal Units</li>
							<li>Advanced Diagnostic Imaging (MRI, CT Scan, X-ray)</li>
							<li>Surgery and Post-Surgical Recovery Units</li>
							<li>Physical Therapy and Rehabilitation</li>
						</ul>
						<p className='doc-app__aboutBody-details-section-desc'>
							Whether you're here for a routine checkup or a complex treatment,
							our goal is to make sure you feel supported every step of the way.
						</p>
					</div>
					<div className='doc-app__aboutBody-details-section'>
						<h1 className='doc-app__aboutBody-details-section-title'>Why Choose Us?</h1>
						<ul className='doc-app__aboutBody-details-section-list'>
							<li>
								<b>Expert Care:</b> A team of highly qualified doctors and
								specialists.
							</li>
							<li>
								<b>Comprehensive Services:</b> From diagnostics to recovery, we
								offer everything under one roof.
							</li>
							<li>
								<b>Patient-Centered:</b> Your health and comfort are our top
								priority.
							</li>
							<li>
								<b>State-of-the-Art Technology:</b> We use the latest medical
								advancements to ensure accurate diagnoses and effective
								treatments.
							</li>
						</ul>
						<p className='doc-app__aboutBody-details-section-desc'>
							Thank you for choosing [Hospital Name]. We look forward to being
							part of your journey to better health.
						</p>
					</div>
				</div>
			</section>
			<section className='doc-app__section service-section'>
				<div>
					<h1 className='doc-app__section-title'>Meet our team members</h1>
					<p className='doc-app__section-subtitle'>
						Lorem ipsum dolor sit amet consectetur adipiscing elit semper dalar{" "}
						<br /> elementum tempus hac tellus libero accumsan.{" "}
					</p>
				</div>
				<ul className='doc-app__section-list'>
					{doctorsList.map((elm, i) => {
						return (
							<li key={i + "cards" + elm?.id}>
								<Cards index={i} data={elm} />
							</li>
						);
					})}
				</ul>
			</section>
		</div>
    </>
	);
};

export default AboutBody;
