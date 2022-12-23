'use client';
import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import SettingsIcon from '@mui/icons-material/Settings';
import FavoriteIcon from '@mui/icons-material/Favorite';
import HomeIcon from '@mui/icons-material/Home';
import React, { useState } from 'react';
import { push } from '../functions/Route';

type Props = {};

function Nav({}: Props) {
	const [value, setvalue] = useState();

	return (
		<div>
			<BottomNavigation
				showLabels
				value={value}
				onChange={(event, newValue) => {
					setvalue(newValue);
					console.log(newValue);
					if (newValue == 0) push('/example');
					if (newValue == 1) push('/quotes');
					if (newValue == 2) push('/favourites');
					if (newValue == 3) push('/settings');
				}}
			>
				<BottomNavigationAction label="Home" icon={<HomeIcon />} />
				<BottomNavigationAction label="Quotes" icon={<FormatQuoteIcon />} />
				<BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
				<BottomNavigationAction label="Settings" icon={<SettingsIcon />} />
			</BottomNavigation>
		</div>
	);
}

export default Nav;
