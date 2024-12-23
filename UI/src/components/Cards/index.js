import {
	FacebookFilled,
	InstagramFilled,
	LinkedinFilled,
	StarFilled,
	TwitterCircleFilled,
} from "@ant-design/icons";

const Cards = ({ index, data }) => {
	return (
		<div className='doc-app__card' title={data.title}>
			<div className={'doc-app__card-img-box' + (data?.imageType === 'centerCircle' ? " circle-center-image" : "" )}>
				<img className='doc-app__card-img' src={data.image} alt={data.title} />
			</div>
			<h3
				className={
					"doc-app__card-title" +
					(data?.imageType === 'centerCircle' ? " center-aligned-text" : "")
				}
			>
				{data.title}
			</h3>
			{data?.designation && <h5 className={'doc-app__card-subtitle' + (data?.imageType === 'centerCircle' ? " center-aligned-text" : "")}>{data.designation}</h5>}
			{data?.rating && <span className={'doc-app__card-rating' + (data?.imageType === 'centerCircle' ? " center-aligned-text" : "")}>Ratings: {data.rating}<StarFilled /></span>}
			<p className='doc-app__card-desc'>{data.desc}</p>
			{data?.learnMoreBtn && (
				<span className='doc-app__card-learnMore'>Learn more &rarr;</span>
			)}
			{data?.socialMedia && (
				<ul className='doc-app__card-social'>
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
			)}
		</div>
	);
};

export default Cards;
