import { StyleSheet } from 'react-native';

const styles = props => StyleSheet.create({
	messageContainer: {
		display: 'flex',
		flexDirection: 'column',
		paddingHorizontal: 20,
		alignItems: props.user ? 'flex-end' : 'flex-start',
		justifyContent: 'center',
		marginBottom: 10,
		position: 'relative',
	},
	messageContainerSelected: {
		paddingVertical: 10
	},
	message: {
		paddingVertical: 6,
		paddingHorizontal: 16,
		marginLeft: props.user ? 0 : 40,
		marginTop: props.position === 'single' || props.position === 'first' ? 10 : 1,
		marginBottom: props.position === 'single' || props.position === 'last' ? 10 : 1,
		backgroundColor: props.user ? '#eee' : '#0084ff',
		borderTopLeftRadius: props.user ? 20 : props.position === 'single' || props.position === 'first' ? 20 : 5,
		borderBottomLeftRadius: props.user ? 20 : props.position === 'single' || props.position === 'last' ? 20 : 5,
		borderTopRightRadius: !props.user ? 20 : props.position === 'single' || props.position === 'first' ? 20 : 5,
		borderBottomRightRadius: !props.user ? 20 : props.position === 'single' || props.position === 'last' ? 20 : 5,
		alignSelf: 'flex-end'
	},
	messageSelected: {
		backgroundColor: props.user ? '#ccc' : '#0044bb',
	},
	messageFailed: {
		backgroundColor: '#f99',
	},
	messageText: {
		fontSize: 16,
		color: props.user ? '#222' : '#fff',
	},
	circle: {
		backgroundColor: 'red',
		width: 40,
		height: 40,
		borderRadius: 59,
		position: 'absolute',
		left: 10
	},
	infoContainer: {
		marginTop: 6,
	},
	resend: {
		color: 'red'
	}
});


export default styles;