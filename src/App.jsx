import '../src/assets/styles/styles.scss';

import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { AppHeader } from './cmps/AppHeader';
import SoundApp from './pages/SoundApp';
import { AppFooter } from './cmps/AppFooter';
import {About} from './pages/About';
import LastSearch from './pages/LastSearch';

import back from './assets/imgs/back.jpg'

function App() {
	return (
		<Router>
			<main className="app-container">
				<AppHeader />
				<Switch>
					<Route path="/about" component={About} />
					<Route path="/prev" component={LastSearch} />
					<Route path="/home/:search" component={SoundApp} />
					<Route path="/" component={SoundApp} />

				</Switch>
				<AppFooter></AppFooter>
				<img src={back} alt="" className='back' />
			</main>
		</Router>
	);
}

export default App;
