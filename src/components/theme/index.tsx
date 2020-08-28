import * as React from 'react';
import { ThemeProvider } from 'styled-components';
// import theme from './theme.yml';

export type CurrentTheme = 'default' | 'dance' | 'tech' | 'bio' | 'shenans';

export interface CurrentThemeMap {
	default: string;
	bio: string;
	tech: string;
	dance: string;
	shenans: string;
}

const theme = {
	default: {
		colors: {
			header: '#000000',
			header_hover: '#000000',
			sub_header: 'pink',
			sub_header_hover: 'gray',
			text: '#272727',
			text_hover: '#272727',
			card_background_image: 'bio.jpg',
			card_background_color: 'green',
			box_shadow: '#656565',
			box_shadow_hover: '#656565',
			category_color: '#e09100',
			category_color_hover: '#e09100',
			site_bg: 'linear-gradient(45deg, #4568dc, #b06ab3)'
		}
	},
	dance: {
		colors: {
			header: '#000000',
			header_hover: '#000000',
			sub_header: 'magenta',
			sub_header_hover: 'darkmagenta',
			text: '#272727',
			text_hover: '#272727',
			box_shadow: '#656565',
			box_shadow_hover: '#656565',
			category_color: '#e09100',
			category_color_hover: '#e09100',
			card_background_image: 'dance.jpg',
			card_background_color: 'green',
			site_bg: 'linear-gradient(45deg, #4568dc, #b06ab3)'
		}
	},
	shenans: {
		colors: {
			header: '#000000',
			header_hover: '#000000',
			sub_header: 'lightblue',
			sub_header_hover: 'darkblue',
			text: '#272727',
			text_hover: '#272727',
			box_shadow: '#656565',
			box_shadow_hover: '#656565',
			category_color: '#e09100',
			category_color_hover: '#e09100',
			card_background_image: 'dance.jpg',
			card_background_color: 'green',
			site_bg: 'linear-gradient(45deg, #4568dc, #b06a83)'
		}
	},
	tech: {
		colors: {
			header: '#000000',
			header_hover: '#000000',
			sub_header: '#AA7700',
			sub_header_hover: '#CC7777',
			text: '#272727',
			text_hover: '#272727',
			box_shadow: '#656565',
			box_shadow_hover: '#656565',
			category_color: 'blue',
			category_color_hover: 'blue',
			card_background_image: 'tech.jpg',
			card_background_color: 'green',
			site_bg: 'linear-gradient(45deg, #4568dc, #b06ab3)'
		}
	},
	bio: {
		colors: {
			header: '#000000',
			header_hover: '#000000',
			sub_header: 'lightgreen',
			sub_header_hover: 'green',
			text: '#272727',
			text_hover: '#272727',
			box_shadow: '#656565',
			box_shadow_hover: '#656565',
			category_color: 'green',
			category_color_hover: 'green',
			card_background_image: 'bio.jpg',
			card_background_color: 'green',
			site_bg: 'linear-gradient(60deg,#1458ce,#2fc1c1)'
		}
	}
};

const Theme: React.FunctionComponent = ({ children }) => <ThemeProvider theme={theme}>{children}</ThemeProvider>;

export default Theme;
