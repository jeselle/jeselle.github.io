import * as React from 'react';
import { ThemeProvider } from 'styled-components';
// import theme from './theme.yml';

export type CurrentTheme = 'default' | 'dance' | 'bio';

const theme = {
	default: {
		colors: {
			header: '#000000',
			header_hover: '#000000',
			sub_header: '#gray',
			sub_header_hover: '#gray',
			text: '#272727',
			text_hover: '#272727',
			box_shadow: '#656565',
			box_shadow_hover: '#656565',
			category_color: '#e09100',
			category_color_hover: '#e09100'
		}
	},
	dance: {
		colors: {
			header: '#000000',
			header_hover: '#000000',
			sub_header: '#gray',
			sub_header_hover: '#gray',
			text: '#272727',
			text_hover: '#272727',
			box_shadow: '#656565',
			box_shadow_hover: '#656565',
			category_color: '#e09100',
			category_color_hover: '#e09100'
		}
	},
	tech: {
		colors: {
			header: '#000000',
			header_hover: '#000000',
			sub_header: '#gray',
			sub_header_hover: '#gray',
			text: '#272727',
			text_hover: '#272727',
			box_shadow: '#656565',
			box_shadow_hover: '#656565',
			category_color: 'blue',
			category_color_hover: 'blue'
		}
	},
	bio: {
		colors: {
			header: '#000000',
			header_hover: '#000000',
			sub_header: '#gray',
			sub_header_hover: '#gray',
			text: '#272727',
			text_hover: '#272727',
			box_shadow: '#656565',
			box_shadow_hover: '#656565',
			category_color: 'green',
			category_color_hover: 'green'
		}
	}
};

const Theme: React.FunctionComponent = ({ children }) => <ThemeProvider theme={theme}>{children}</ThemeProvider>;

export default Theme;
