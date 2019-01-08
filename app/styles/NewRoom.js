import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	pageContainer: {

	},
	searchContainer: {
		// backgroundColor: 'red',
		borderColor: '#999',
		borderStyle: 'solid',
		borderBottomWidth: 1,

		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',

		height: 60

	},
	searchInput: {
		flex: 1,
		paddingHorizontal: 4
	},
	clearSearch: {
		backgroundColor: '#f66',
		// position: 'absolute',
		// right: 10,

		paddingHorizontal: 10,
		paddingVertical: 8,
		borderRadius: 4,
		marginRight: 6,

		// height: '100%',

		display: 'flex',
		justifyContent: 'center'
	},
	clearSearchText: {
		fontSize: 20,
		color: '#b22'
	},

	headerText: {
		fontSize: 24,
		marginBottom: 20
	},

	recommendedContainer: {
		// backgroundColor: 'purple',
		width: '100%',
		padding: 20,
	},



	userContainer: {
		width: '100%',
		// padding: 20,
		// backgroundColor: '#eee',
		// marginTop: 20,


		borderStyle: 'solid',
		borderColor: 'grey',
		borderTopWidth: 14,
		borderRadius: 3
	},
	user: {
		// backgroundColor: '#333',
		// borderRadius: 4,
		// marginBottom: 15,
		paddingVertical: 10,
		paddingHorizontal: 20,


		borderStyle: 'solid',
		borderBottomWidth: 1,
		borderColor: '#ccc',

		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'flex-start',
		alignItems: 'center'

	},

	userText: {
		// color: 'white',
		fontSize: 25,

	},
	circle: {
		backgroundColor: 'red',
		width: 50,
		height: 50,
		borderRadius: 50,
		marginRight: 20
	},





	noUsersContainer: {
		backgroundColor: '#c99',
		padding: 10,
		borderRadius: 4
	},
	noUsersText: {
		fontSize: 20,
		color: '#444',
		textAlign: 'center'
	}
});

export default styles;