import Header from './components/layouts/header'
import Profile from './components/pages/home/profile'
import Banner from './components/pages/home/banner'
import Work from './components/pages/home/work'

const App = () => {
  return (
    <div className='App'>
      <Header />
      <Banner />
      <Profile />
      <Work />
    </div>
  )
}

export default App
