import Header from './components/layouts/header';
import Profile from './views/home/profile.js';
import Banner from './views/home/banner.js';
import Work from './views/home/work.js';

const App = () => {
	return (
		<div className="App">
			<Header />
			<Banner />
			<Profile />
			<Work />
		</div>
	);
}

export default App;
