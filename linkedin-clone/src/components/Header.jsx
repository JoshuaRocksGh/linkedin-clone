import React from 'react';
import '../css/Header.css';
import SearchIcon from '@mui/icons-material/Search';
import HeaderOptions from './HeaderOptions';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
// import Logo from '../public/likedin.png';

export default function Header() {
	return (
		<div className='header'>
			<div className='header__left'>
				<img src='../likedin.png' alt='' />

				<div className='header__search'>
					<SearchIcon />
					<input type='text' />
				</div>
			</div>
			<div className='header__right'>
				<HeaderOptions Icon={HomeIcon} title='Home' />
				<HeaderOptions Icon={SupervisorAccountIcon} title='My Network' />
				<HeaderOptions Icon={BusinessCenterIcon} title='Jobs' />
				<HeaderOptions Icon={ChatIcon} title='Messaging' />
				<HeaderOptions Icon={NotificationsIcon} title='Notifications' />
				<HeaderOptions avatar='../jay_dollar.jpg' title='Joshua Tetteh' />
			</div>
		</div>
	);
}
