import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	accountContainer: {
		backgroundColor: '#eee',
		paddingHorizontal: 10,
		paddingVertical: 30,
		marginBottom: 50
	},
	accountTitle: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		marginBottom: 20,
	},
	circle: {
		backgroundColor: 'hsl(80,30%,70%)',
		borderRadius: 50,
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
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