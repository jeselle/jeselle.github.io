import React, { Component } from 'react';
import SimpleTile from '../../components/simple-tile';
import testData from '../../data.json';
import styled from 'styled-components';
import { uuid } from 'uuidv4';
import './index.scss';


const SiteGrid = styled.div`
  display: grid;
  grid-template-columns: 5vw 10vw 60vw 10vw 5vw;
  grid-template-rows: 30vh auto 200px;
`;


const Content = styled.div`
  width: 100%;
  grid-column-start: 3;
  grid-row-start: 2;
`;

class HomePage extends Component {
	render() {
		return (
			<SiteGrid>
        <Content>
          {
            (() => {
              return testData.tiles.map((tile) => {
                return <SimpleTile key={uuid()} {...tile}></SimpleTile>
              });
            })()
          }
        </Content>
			</SiteGrid>
		);
	}
}

export default HomePage;
