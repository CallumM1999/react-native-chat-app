import { SERVER_URL } from '../../config.json';

const post_delete = body => new Promise((resolve) => {
	fetch(`${SERVER_URL}/delete`, {
		method: 'POST',
		headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
		body: JSON.stringify(body)
	})
		.then(({ status }) => {
			resolve({
				status
			});
		})
		.catch(error => resolve({ error }));
});

export default post_delete;

