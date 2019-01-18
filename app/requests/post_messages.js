import { SERVER_URL } from '../../config.json';

const post_messages = body => new Promise((resolve) => {
	fetch(`${SERVER_URL}/messages`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(body)
	})
		.then(res => res.json())
		.then(({ messages }) => resolve({ messages }))
		.catch(err => resolve({ err }));

});

export default post_messages;