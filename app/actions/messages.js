import { AsyncStorage } from 'react-native';

export const newMessage = message => dispatch => {
    storeMessage(message)
        .then(res => dispatch({ type: 'NEW_MESSAGE', message }))
        .catch(err => console.log('error storing message', err));
}


const storeMessage = message => new Promise((resolve, reject) => {
    AsyncStorage.getItem(`msg__${message.room}`, (err, item) => {
        console.log('get item', item, err);

        const data = JSON.parse(item);

        AsyncStorage.setItem(`msg__${message.room}`, JSON.stringify([...data, message]))
            .then(res => resolve())
            .catch(err => reject(new Error(err)))

    })



});

const addLoadedMessages = messages => ({ type: 'LOAD_MESSAGES', messages });

export const loadMessages = () => async dispatch => {
    // need to add error handling

    const messages = {};
    const keys = await AsyncStorage.getAllKeys();

    const msgKeys = keys.filter(key => key.includes('msg__'));

    const rawMessages = await AsyncStorage.multiGet(msgKeys);

    rawMessages.map(item => {
        const room = item[0].split('__')[1];
        const list = JSON.parse(item[1]);

        messages[room] = {
            title: 'sum title',
            messages: list
        }
    });


    dispatch(addLoadedMessages(messages));
}

