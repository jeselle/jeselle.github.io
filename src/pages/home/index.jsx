import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faHiking, faTools, faFlaskPotion } from '@fortawesome/solid-svg-icons';
import './index.scss';


class HomePage extends Component {
	render() {
		return (
			<React.Fragment>
				<TopNav />
			</React.Fragment>
		);
	}
}

export default HomePage;
