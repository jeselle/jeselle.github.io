import * as React from 'react';
import styled from 'styled-components';
import {CurrentThemeMap, CurrentTheme} from '../theme';


export interface BannerProps {
	bgImage?: string;
	particals_background?: Object;
	title: string;
	subTitle: CurrentThemeMap;
	currentTheme: string;
}

export interface SubTitleItemProps {
	subType: CurrentTheme
}

//
const Container =
	styled.div <
	BannerProps >
	`
	grid-area: 1 / 1 / 1 / 6;
	clip-path: ellipse(100% 87% at 15px 0%);
  background: ${(props) => props.theme[props.currentTheme].colors.site_bg};

  @media screen and (max-width: 600px) {
    clip-path: ellipse(100% 87% at 48% 0%);
  }
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
	clip-path: ellipse(100% 87% at 15px 0%);
`;

const Title = styled.div`
	width: 100%;
	font-size: 6rem;
	font-family: 'Merienda One', 'Open Sans';
	font-weight: 300;
	color: white;
	position: relative;
	z-index: 1;
	text-align: left;

	@media screen and (max-width: 600px) {
		text-align: center;
	}
`;

const SubTitleItem = styled.div<SubTitleItemProps>`
	margin-top: 20px;
	padding: 0 10px 0 0;
	font-size: 3rem;
	font-family: 'Merienda One', 'Open Sans';
	font-weight: 600;
	opacity: 1;
	color: ${props => {
		return props.theme[props.subType].colors.sub_header
	}};
	text-align: left;
	z-index: 1;

	@media screen and (max-width: 600px) {
		text-align: center;
	}
	
	&:hover {
		cursor: pointer;
		color: ${props => {
			return props.theme[props.subType].colors.sub_header_hover
		}};
	}
`;

const SubTitle = styled.div`
	width: 100%;
	font-size: 3rem;
	font-family: 'Merienda One', 'Open Sans';
	font-weight: 600;
	opacity: 1;
	z-index: 1;
	display: flex;
	justify-content: flex-start;

	@media screen and (max-width: 600px) {
		text-align: center;
	}
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
			{/* <ParticalWrapper>
				<Particles params={particals_background} height="100vh" />
			</ParticalWrapper> */}
			<TextWrapper>
				<Title>{title}</Title>
				<SubTitle>
					{
						(() => {
							return Object.keys(subTitle).map((subType) => {
								const newSubType = subType as CurrentTheme;
								{console.log(newSubType)}
								let component = (() => {
									{console.log(subTitle[newSubType].length)}
									if (subTitle[newSubType].length > 0){
										return (
											<SubTitleItem subType={newSubType}>
												{subTitle[newSubType]}
											</SubTitleItem>
										)
									}
								})()
								return component;
							})
						})()
					}
				</SubTitle>
			</TextWrapper>
		</Container>
	);
};

export default Banner;

