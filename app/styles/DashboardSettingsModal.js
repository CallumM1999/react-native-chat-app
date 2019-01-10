import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	container: {
		width: '100%',
		height: '100%',
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'rgba(52, 52, 52, 0.4)'
	},
	contents: {
		backgroundColor: 'white',
		borderRadius: 3,
		padding: 16
	},
	list: {
		marginTop: 10,
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'space-between'
	},
	listItem: {
		marginTop: 4,
	},
	listItemText: {
		fontSize: 22
	},
	title: {
		fontSize: 32
	},
	closeBtn: {
		position: 'absolute',
		top: 10,
		right: 10,
		zIndex: 100,
	}
});


export default styles;