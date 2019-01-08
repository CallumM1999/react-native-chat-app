import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

	item: {
		borderStyle: 'solid',
		borderColor: '#eee',
		borderBottomWidth: 2,

		paddingVertical: 20,
		paddingHorizontal: 20,

		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center'
	},
	circle: {
		backgroundColor: 'red',
		width: 70,
		height: 70,
		borderRadius: 100 / 2,
	},
	right: {
		paddingLeft: 20,
	},
	left: {
		display: 'flex',
		justifyContent: 'flex-start',
		alignItems: 'center',
		flexDirection: 'row',
		flex: 1,

	},
	text: {
		marginLeft: 20,
		flex: 1
	},
	name: {
		fontWeight: '600',
		fontSize: 22
	},
	message: {
		fontSize: 18,
	},
});

export default styles;