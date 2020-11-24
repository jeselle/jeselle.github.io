import React, { Component, FunctionComponent } from 'react';
import SimpleTile, { SimpleTileProps } from '../../components/simple-tile';
import testData from '../../data.json';
import styled from 'styled-components';
import { uuid } from 'uuidv4';
import { connect } from 'react-redux';
import { CurrentTheme } from '../../components/theme';
import Banner from '../../components/banner';
import PolaroidImage from '../../components/polaroid-image';
import './index.scss';

const PolaroidCamera = styled.img`
  position: absolute;
  top: -100px;
  left: 0;
  transform: rotate3d(1, 1, 1, -20deg);
`

const SiteGrid = styled.div`
	display: grid;
	grid-template-rows: 38vh auto 400px;

	@media (min-width: 1680px) {
		grid-template-columns: 5vw 20vw 50vw 20vw 5vw;
	}

	@media (min-width: 1280px) and (max-width: 1680px) {
		grid-template-columns: 5vw 15vw 60vw 15vw 5vw;
	}

	@media (min-width: 1025px) and (max-width: 1280px) {
		grid-template-columns: 5vw 10vw 70vw 10vw 5vw;
	}

	@media (min-width: 768px) and (max-width: 1024px) {
		grid-template-columns: 5vw 10vw 70vw 10vw 5vw;
	}

	@media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
		grid-template-columns: 5vw 10vw 70vw 10vw 5vw;
	}

	@media (min-width: 481px) and (max-width: 767px) {
		grid-template-columns: 5vw 10vw 70vw 10vw 5vw;
	}

	@media (min-width: 320px) and (max-width: 480px) {
		grid-template-columns: 5vw 10vw 70vw 10vw 5vw;
	}

	@media (min-width: 0) and (max-width: 320px) {
		grid-template-columns: 5vw 10vw 70vw 10vw 5vw;
	}
`;

const Content = styled.div`
	width: 100%;
	grid-column-start: 3;
	grid-row-start: 2;
`;

interface AltHomePageProps {
	currentTheme: CurrentTheme;
}

const AltHomePage: FunctionComponent<AltHomePageProps> = ({ currentTheme }: AltHomePageProps) => {
	return (
		<SiteGrid>
      {/* <PolaroidCamera width="300px" height="420px" src="/img/polaroid.png" alt-text="polariod camera" /> */}
      <PolaroidImage image="/img/wood_background.jpg" altText="wood background"/>
    </SiteGrid>
	);
};

const mapStateToProps = (state: AltHomePageProps) => {
	return { currentTheme: state.currentTheme };
};

export default connect(mapStateToProps)(AltHomePage);
