import PushNotification from 'react-native-push-notification';
import { Actions } from 'react-native-router-flux';
import store from '../store/configureStore';
import { openRoom } from '../actions/unread';

const configureNotification = () => {
	PushNotification.configure({
		onNotification: ({ room }) => {
			if (room) {
				store.dispatch(openRoom(room));
				Actions.chat({ room });
			}
		}
	});

	return PushNotification;
};

export default configureNotification;