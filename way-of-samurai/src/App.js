import logo from './logo.svg';
import './App.css';

const App = () => {
  return (
    <div className="App">
			<Header />
      <Techs />
    </div>
  );
}

const Techs = () => {
	return (
		<>
			<ul>
				<li>html</li>
				<li>css</li>
				<li>js</li>
				<li>react</li>
			</ul>
		</>
	)
}

const Header = () => {
	return (
		<>
			<a href="/">Profile</a>
			<a href="/">Feed</a>
			<a href="/">Messages</a>
			<a href="/">Settings</a>
		</>
	)
}


export default App;
