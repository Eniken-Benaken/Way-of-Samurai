import './App.css';

const App = () => {
  return (
    <div className="app-wrapper">
			<header>
				<img src='https://dummyimage.com/200x120/00eaff/ffffff&text=Company+Ico'></img>
			</header>
			<nav>
				<div><a href="#">Profile</a></div>
				<div><a href="#">Messages</a></div>
				<div><a href="#">News</a></div>
				<div><a href="#">Music</a></div>
				<div><a href="#">Settings</a></div>
			</nav> 
			<main>
				<div>
					<img src="https://source.unsplash.com/1200x200/?newyear" alt=""/>
				</div>
				<div>ava + description</div>
				<div>
					My posts
					<div>New Post</div>
					<div>Post1</div>
					<div>Post2</div>
				</div>
				
			</main>
    </div>
  );
};

export default App;
