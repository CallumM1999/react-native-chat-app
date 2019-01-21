import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	searchContainer: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		height: 60,
		padding: 6
	},
	searchInput: {
		flex: 1,
		backgroundColor: '#fff',
		borderRadius: 4,
		paddingHorizontal: 10,
		borderBottomWidth: 1,
		borderStyle: 'solid',
		borderColor: '#999',
	},
	clearSearch: {
		paddingHorizontal: 2,
		paddingVertical: 2,
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
		padding: 10,
		marginTop: 30,
	},
	noUsersText: {
		fontSize: 26,
		color: '#444',
		textAlign: 'center'
	}
});

export default styles;