import * as React from 'react';
import styled from 'styled-components';

export interface BannerProps {
	bgImage: string;
	title: string;
	subTitle: string;
}

const Container = styled.div`
	grid-area: 1 / 1 / 1 / 6;
	clip-path: ellipse(100% 87% at 15px 10%);
	background: linear-gradient(45deg, #4568dc, #b06ab3);
`;

const BackgroundImage = styled.img`
	width: 100%;
	position: absolute;
	top: 0;
	left: 0;
	opacity: 0.2;
`;

const Title = styled.div`
	font-size: 80px;
	font-family: 'Merienda One', 'Open Sans';
	font-weight: 300;
	color: white;
	position: relative;
	z-index: 1;
`;

const SubTitle = styled.div`
	font-size: 30px;
	font-family: 'Merienda One', 'Open Sans';
	font-weight: 600;
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
	const { bgImage, title, subTitle } = props;

	return (
		<Container>
			<BackgroundImage src={bgImage} />
			<TextWrapper>
				<Title>{title}</Title>
				<SubTitle>{subTitle}</SubTitle>
			</TextWrapper>
		</Container>
	);
};

export default Banner;
