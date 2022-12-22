'use client';
import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import SettingsIcon from '@mui/icons-material/Settings';
import FavoriteIcon from '@mui/icons-material/Favorite';
import React, { useState } from 'react';

type Props = {};

function Nav({}: Props) {
	const [value, setvalue] = useState();
	return (
		<BottomNavigation
			showLabels
			value={value}
			onChange={(event, newValue) => {
				setvalue(newValue);
				console.log(newValue);
				if (newValue == 0) 
			}}
		>
			<BottomNavigationAction label="Quotes" icon={<FormatQuoteIcon />} />
			<BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
			<BottomNavigationAction label="Settings" icon={<SettingsIcon />} />
		</BottomNavigation>
	);
}

export default Nav;
