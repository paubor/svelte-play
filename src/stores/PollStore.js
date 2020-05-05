import { writable } from 'svelte/store';
import {v4 as uuid} from 'uuid';

let PollStore = writable([
		{
			id: uuid(),
			question: 'Python or Javascript?',
			answers: [
				{
					text: 'JavaScript',
					color: 'success',
					votes: 15
				},
				{
					text: 'Python',
					color: 'danger',
					votes: 9
				},
				{
					text: 'Java',
					color: 'primary',
					votes: 2,
				}
			],
		}
	]
);

export default PollStore;