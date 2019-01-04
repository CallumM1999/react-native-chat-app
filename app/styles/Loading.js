import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	container: {
		width: '100%',
		height: '100%',
		backgroundColor: '#e9e9e9',


		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center'

	},
	text: {
		fontSize: 60,
		fontWeight: '100',
		color: '#666'
	},

	loading: {
		fontSize: 35,
		color: '#222',
		marginTop: 10
	}
});

export default styles;