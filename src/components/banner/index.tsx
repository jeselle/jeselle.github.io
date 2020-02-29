import * as React from 'react';
import styled from 'styled-components';

export interface BannerProps {}

const Container = styled.div`
	width: 100%;
	clip-path: ellipse(130px 140px at 10% 20%);
	background: linear-gradient(45deg, #4568dc, #b06ab3);
`;

const BackgroundImage = styled.img`
	width: 100%;
	position: relative;
`;

const Banner: React.FunctionComponent<BannerProps> = (props) => {
	return (
		<Container>
			<BackgroundImage src="/images/bg.jpg" />
		</Container>
	);
};

export default Banner;
