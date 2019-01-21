import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	accountContainer: {
		backgroundColor: '#eee',
		paddingHorizontal: 10,
		paddingVertical: 30,
		marginBottom: 50
	},
	accountTitle: {
		textAlign: 'center',
		fontSize: 28,
		marginBottom: 18
	},
	accountField: {
		textAlign: 'center',
		fontSize: 20
	},
	accountUnderlineContainer: {
		width: '100%',
		display: 'flex',
		paddingHorizontal: 60,
		paddingVertical: 8,
	},
	accountUnderline: {
		width: '100%',
		height: 1,
		backgroundColor: '#666',
	},

	accountButtonContainer: {
		// backgroundColor: 'orange',
		paddingHorizontal: 20,
		marginTop: 30,
	},

	accountButton: {
		backgroundColor: 'hsl(200, 50%, 50%)',
		borderRadius: 5,

		height: 45,

		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center'

	},
	accountButtonText: {
		color: 'white',
		fontSize: 20
	}
});

export default styles;