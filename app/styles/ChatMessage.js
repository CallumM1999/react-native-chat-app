import { StyleSheet } from 'react-native';

const styles = props => {

	return StyleSheet.create({
		item: {
			display: 'flex',
			flexDirection: 'row',
			alignItems: 'center',
			paddingHorizontal: 20,

			justifyContent: props.user ? 'flex-end' : 'flex-start'
		},
		message: {
			paddingVertical: 6,
			paddingHorizontal: 16,
			marginLeft: 40,

			marginTop: props.position === 'single' || props.position === 'first' ? 10 : 1,
			marginBottom: props.position === 'single' || props.position === 'last' ? 10 : 1,

			backgroundColor: props.user ? '#eee' : '#0084ff',


			borderTopLeftRadius: props.user ? 20 : props.position === 'single' || props.position === 'first' ? 20 : 5,
			borderBottomLeftRadius: props.user ? 20 : props.position === 'single' || props.position === 'last' ? 20 : 5,

			borderTopRightRadius: !props.user ? 20 : props.position === 'single' || props.position === 'first' ? 20 : 5,
			borderBottomRightRadius: !props.user ? 20 : props.position === 'single' || props.position === 'last' ? 20 : 5,

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

	});
};

export default styles;