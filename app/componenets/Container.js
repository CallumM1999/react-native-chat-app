import React from 'react';
import { View } from 'react-native';
import Header from './Header';
import PropTypes from 'prop-types';
import styles from '../styles/container';

const Container = ({ children, heading, back, openSettings }) => (
	<View style={styles.page}>
		<Header heading={heading} back={back} openSettings={openSettings} />

		<View style={styles.container}>
			{children}
		</View>
	</View>
);

Container.propTypes = {
	children: PropTypes.any.isRequired,
	heading: PropTypes.string,
	back: PropTypes.func,
	openSettings: PropTypes.func
};

export default Container;