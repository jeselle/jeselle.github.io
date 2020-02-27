// Actions
const CHANGE_THEME = 'jeselle-site/theme/CHANGE';

// Types

// currentTheme: dance, bio, something

const initalState = { currentTheme: 'default' };

// Reducer
export default function reducer(state = initalState, action = {}) {
	switch (action.type) {
		case CHANGE_THEME: {
			return Object.assign({}, state, {
				currentTheme: action.currentTheme
			});
		}
		// do reducer stuff
		default:
			return state;
	}
}

// Action Creators
export function changeTheme({ currentTheme }) {
	return {
		type: CHANGE_THEME,
		currentTheme: currentTheme
	};
}
