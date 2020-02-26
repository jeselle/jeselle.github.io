import React, { Component, FunctionComponent } from 'react';
import SimpleTile, { SimpleTileProps } from '../../components/simple-tile';
import testData from '../../data.json';
import styled from 'styled-components';
import { uuid } from 'uuidv4';
import { connect } from 'react-redux';
import './index.scss';

const SiteGrid = styled.div`
	display: grid;
	grid-template-columns: 5vw 10vw 70vw 10vw 5vw;
	grid-template-rows: 30vh auto 200px;
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
