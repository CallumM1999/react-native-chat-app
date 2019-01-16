import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	page: {
		justifyContent: 'center',
		width: '100%',
		height: '100%'
	},
	container: {
		padding: 10,
		borderRadius: 4,
		marginHorizontal: 10,
		// backgroundColor: 'purple'
	},

	loading: {
		fontSize: 20,
		marginTop: 20,
	},
	error: {
		marginTop: 40,
		backgroundColor: '#FFD2D2',
		color: '#D8000C',
		padding: 8,
		borderRadius: 3
	},
	submit: {
		backgroundColor: '#34A853',
		width: '100%',
		padding: 10,
		borderRadius: 5,
		display: 'flex',
		alignItems: 'center',
		marginTop: 20,
	},
	submitText: {
		color: 'white',
		fontSize: 20,
		fontWeight: '200',
	},


	inputContainer: {
		display: 'flex',
		flexDirection: 'column',
		marginBottom: 20
	},
	inputText: {
		fontSize: 20,
		marginHorizontal: 10
	},
	inputField: {
		marginTop: 10,
		backgroundColor: '#ddd',
		borderRadius: 4,
		paddingHorizontal: 10,
	},

	registerContainer: {
		display: 'flex',
		justifyContent: 'flex-end',
		flexDirection: 'row',
		paddingHorizontal: 20,
		paddingVertical: 10
	},
	registerText: {
		color: '#0d8898',
		fontSize: 20
	}

});

export default styles;