// Actions
const CHANGE_THEME = 'jeselle-site/theme/CHANGE';

// Types

// currentTheme: dance, bio, something

// Reducer
export default function reducer(state = {}, action = {}) {
	switch (action.type) {
		case CHANGE_THEME: {
			return Object.assign({}, state, {
				theme: action.currentTheme
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
