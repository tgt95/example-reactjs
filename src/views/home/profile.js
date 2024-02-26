import { ReactComponent as IllusProfile } from '../../assets/images/profile-illustration.svg';

const ExternalUI = (props) => {
	return (
		<div className="align-items-center d-inline-flex">
			<a
				className="me-1"
				href={`mailto:${props.value}`}
				style={{ textDecoration: 'underline' }}
			>
				{props.value}
			</a>
			<i className="ri-mail-open-line" style={{ fontSize: '20px', color: 'var(--neutral-700)' }}></i>
		</div>
	);
}

const HomeProfile = () => {

	const data_profile = [
		{
			label: 'Full name',
			value: 'Trình Gia Tuấn',
			external: false
		},
		{
			label: 'Date of Birth',
			value: '11/10/1995',
			external: false
		},
		{
			label: 'Email',
			value: 'giatuantrinh@gmail.com',
			external: true
		},
		{
			label: 'Address',
			value: 'District 11, Ho Chi Minh City',
			external: false
		},
	]

	return (
		<section className="section section-profile">
			<div className="container">
				<div className="row align-items-center">
					<div className="col-md-7 col-lg-6 content-bg">
						<IllusProfile />
					</div>
					<div className="col-md-5 col-lg-6 content-text">
						<div className="section-heading">
							<div className="section-title">Profile</div>
						</div>
						<div className="profile-content">
							<ul>
								{data_profile.map((item, index) => (
									<li key={index}>
										<div className="title">{item.label}</div>
										{!item.external ? <span>{item.value}</span> : <ExternalUI value={item.value} />}
									</li>
								))}
								<li class="align-items-center">
									<div class="personality-progress">
										<div class="label">
											<span>
												<b>Introvert </b>(INFP)
											</span>
											<span>Extrovert</span>
										</div>
										<div class="holder">
											<div class="tracker"></div>
											<span class="emoji">👀</span>
										</div>
									</div>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
export default HomeProfile;