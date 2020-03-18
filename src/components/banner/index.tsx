import * as React from 'react';
import styled from 'styled-components';
import Particles from 'react-particles-js';

export interface BannerProps {
	bgImage?: string;
	particals_background?: Object;
	title: string;
	subTitle: string;
	currentTheme: string;
}

//
const Container =
	styled.div <
	BannerProps >
	`
	grid-area: 1 / 1 / 1 / 6;
	clip-path: ellipse(100% 87% at 15px 10%);
  background: ${(props) => props.theme[props.currentTheme].colors.site_bg};
`;

// const BackgroundImage = styled.img`
// 	width: 100%;
// 	position: absolute;
// 	top: 0;
// 	left: 0;
// 	opacity: 0.2;
// `;

const ParticalWrapper = styled.div`
	width: 100%;
	height: 100%;
	position: absolute;
	opacity: 0.5;
`;

const Title = styled.div`
	font-size: 6rem;
	font-family: 'Merienda One', 'Open Sans';
	font-weight: 300;
	color: white;
	position: relative;
	z-index: 1;
`;

const SubTitle = styled.div`
	font-size: 3rem;
	font-family: 'Merienda One', 'Open Sans';
	font-weight: 600;
	opacity: 1;
	color: white;
`;

const TextWrapper = styled.div`
	margin: 10vh 10vw;
	display: flex;
	flex-wrap: wrap;
	flex-flow: column;
	align-items: flex-start;
`;

const Banner: React.FunctionComponent<BannerProps> = (props) => {
	const { bgImage, title, subTitle, particals_background } = props;

	return (
		<Container {...props}>
			{/* <BackgroundImage src={bgImage} /> */}
			<ParticalWrapper>
				<Particles params={particals_background} height="600px" />
			</ParticalWrapper>
			<TextWrapper>
				<Title>{title}</Title>
				<SubTitle>{subTitle}</SubTitle>
			</TextWrapper>
		</Container>
	);
};

export default Banner;
