import React, { Component } from "react"
import { ReactComponent as IllusProfile } from '../../assets/images/profile-illustration.svg';

// Main components
class Profile extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: null,
			loading: true,
			error: null
		};
		this.renderView = this.renderView.bind(this);
	}

	renderView = (type, value) => {
		switch (type) {
			case 'email':
				return (
					<div className="align-items-center d-inline-flex">
						<a
							className="me-1"
							href={`mailto:${value}`}
							style={{ textDecoration: 'underline' }}
						>
							{value}
						</a>
						<i className="ri-mail-open-line" style={{ fontSize: '20px', color: 'var(--neutral-700)' }}></i>
					</div>
				);
			case 'dob':
				return (
					<span>{`${value} (age ${(new Date().getFullYear()) - value.substr(value.length - 4)})`}</span>
				);
			default:
				return <span>{value}</span>;
		}
	}

	componentDidMount() {
		this.fetchData('https://api.npoint.io/005fe15af1ec9c16814c');
	}

	async fetchData(URL) {
		try {
			const response = await fetch(URL);
			if (!response.ok) {
				throw new Error('Network response was not ok');
			}
			const jsonData = await response.json();
			this.setState({ data: jsonData, loading: false });
		} catch (error) {
			this.setState({ error: error.message, loading: false });
		}
	}

	render() {
		const { data, loading, error } = this.state;
		if (loading) return <div>Loading...</div>;
		if (error) return <div>Error: {error}</div>;
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
									{data && Object.keys(data).map((item, index) => (
										<li key={index}>
											<div className="title">{data[item].label}</div>
											{this.renderView(data[item].type, data[item].value)}
										</li>
									))}
									<li className="align-items-center">
										<div className="personality-progress">
											<div className="label">
												<span>
													<b>Introvert </b>(INFP)
												</span>
												<span>Extrovert</span>
											</div>
											<div className="holder">
												<div className="tracker"></div>
												<span className="emoji">👀</span>
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
}
export default Profile;