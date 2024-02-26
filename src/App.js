import Header from './components/layouts/header';
import Profile from './views/home/profile.js';
import Banner from './views/home/banner.js';

const App = () => {
	return (
		<div className="App">
			<Header />
			<Banner />
			<Profile />
		</div>
	);
}

export default App;
