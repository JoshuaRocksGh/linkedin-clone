import { Avatar } from '@mui/material';
import React from 'react';
import '../css/SideBar.css';

export default function SideBar() {
	return (
		<div className='sidebar'>
			<div className='sidebar__top'>
				<img src='../background.jpg' alt='' />
				<Avatar className='sidebar__avatar' />
				<h2>Joshua Tetteh</h2>
				<h4>josh.tetteh01@gmail.com</h4>
			</div>

			<div className='sidebar__stats'>
				<div className='sidebar__stat'>
					<p>who viewed u</p>
					<p className='sidebar__statNumber'>200</p>
				</div>
				<div className='sidebar__stat'>
					<p>views on post</p>
					<p className='sidebar__statNumber'>587</p>
				</div>
			</div>

			<div className='sidebar__bottom'>
				<p>Recent</p>
			</div>
		</div>
	);
}
