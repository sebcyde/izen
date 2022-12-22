'use client';

import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import FavoriteIcon from '@mui/icons-material/Favorite';
import SettingsIcon from '@mui/icons-material/Settings';
import React, { useState } from 'react';
import styles from './styles.module.scss';

type Props = {};

function Navbar({}: Props) {
	const [value, setvalue] = useState();

	return (
		<BottomNavigation
			className={styles.Navbar}
			showLabels
			value={value}
			onChange={(event, newValue) => {
				console.log(newValue);
			}}
		>
			<BottomNavigationAction label="Recents" icon={<FormatQuoteIcon />} />
			<BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
			<BottomNavigationAction label="Nearby" icon={<SettingsIcon />} />
		</BottomNavigation>
	);
}

export default Navbar;
