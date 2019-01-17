import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	searchContainer: {
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
		paddingHorizontal: 10,
		paddingVertical: 8,
		borderRadius: 4,
		marginRight: 6,
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
		width: '100%',
		padding: 20,
	},
	userContainer: {
		width: '100%',
		borderStyle: 'solid',
		borderColor: 'grey',
		borderTopWidth: 14,
		borderRadius: 3
	},
	user: {
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
		fontSize: 25,
	},
	circle: {
		marginRight: 20,
		backgroundColor: 'hsl(80,30%,70%)',
		borderRadius: 50,
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
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