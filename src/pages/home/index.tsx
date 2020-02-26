import React, { Component, FunctionComponent } from 'react';
import SimpleTile, { SimpleTileProps } from '../../components/simple-tile';
import testData from '../../data.json';
import styled from 'styled-components';
import { uuid } from 'uuidv4';
import { connect } from 'react-redux';
import './index.scss';

const SiteGrid = styled.div`
	display: grid;
	grid-template-rows: 30vh auto 200px;

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

interface HomePageProps {
	currentTheme: string;
}

const HomePage: FunctionComponent<HomePageProps> = ({ currentTheme }: HomePageProps) => {
	return (
		<SiteGrid>
			<Content>
				{(() => {
					return testData.tiles.map((tile: SimpleTileProps) => {
						return <SimpleTile key={uuid()} currentTheme={currentTheme} {...tile} />;
					});
				})()}
			</Content>
		</SiteGrid>
	);
};

const mapStateToProps = (state: HomePageProps) => {
	return { currentTheme: state.currentTheme };
};

export default connect(mapStateToProps)(HomePage);
