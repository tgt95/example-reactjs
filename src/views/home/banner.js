import { ReactComponent as IllusBanner } from '../../assets/images/banner-bg.svg';

const Banner = () => {

	const data_banner = {
		title: '',
		description: 'I help the business owner balance the business value & the user needs. Create value for the product by Problem Solving, Critical Thinking, Data Metric, and Interaction Design.'
	}

	return (
		<section className="section section-banner">
			<div className="container">
				<div className="align-items-center row" style={{ height: '1093px' }}>
					<div className="col-lg-6 content-text">
						<div className="title" id="hello-world">
							<span className="Typewriter__wrapper">base</span>
							<span className="Typewriter__cursor">|</span>
						</div>
						<p>{data_banner.description}</p>
					</div>
				</div>
				<div className="col-lg-6 content-bg">
					<IllusBanner />
				</div>
			</div>
		</section>
	);
}
export default Banner;