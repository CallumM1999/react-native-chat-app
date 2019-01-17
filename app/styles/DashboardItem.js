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
	itemUnread: {
		backgroundColor: '#eee',

		fontWeight: 'bold'
	},
	circle: {
		backgroundColor: 'hsl(80,30%,70%)',
		// flex: 1,
		borderRadius: 50,

		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',


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
		flex: 4
	},
	name: {
		fontWeight: '600',
		fontSize: 22
	},
	nameUnread: {
		fontWeight: 'bold',
		fontSize: 24

	},
	message: {
		fontSize: 18,
	},
	messageUnread: {
		fontWeight: 'bold'

	},
});

export default styles;