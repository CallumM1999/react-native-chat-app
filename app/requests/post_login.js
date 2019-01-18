import { SERVER_URL } from '../../config.json';

const post_login = body => new Promise((resolve) => {
	fetch(`${SERVER_URL}/login`, {
		method: 'POST',
		headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
		body: JSON.stringify(body)
	})
		.then(response => {
			resolve({
				token: response.headers.get('authorization'),
				status: response.status
			});
		})
		.catch(err => resolve({ err }));
});

export default post_login;

