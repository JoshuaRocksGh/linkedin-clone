import React from 'react';
import './App.css';
import Header from './components/Header';
import SideBar from './components/SideBar';

function App() {
	return (
		<div className='app'>
			{/* HEADER */}
			<Header />

			{/* APP BODY */}
			<div className='app__body'>
				<SideBar />
			</div>
			{/* SIDE BAR */}
			{/* FEED */}
			{/* WIDGET */}
		</div>
	);
}

export default App;
