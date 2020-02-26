import * as React from 'react';
import styled from 'styled-components';
import IconList from '../icon-list';
import { uuid } from 'uuidv4';

// interface colorMapInternship {
//   bio: string,
//   dance: string,
//   tech: string
// }

const colorMap = {
	bio: 'green',
	dance: '#e09100',
	tech: 'aqua'
};

export interface SimpleTileProps {
	title?: string;
	subTitle?: string;
	description?: string;
	image?: string;
	imageAltText?: string;
	githubLink?: string;
	link?: string;
	category?: string;
	currentTheme?: string;
	flip?: boolean;
}

const Tile = styled.div`
	margin: 60px 0;
	display: flex;
	justify-content: space-between;
	height: 250px;
	width: 100%;
	transition: all .2s;
	transform: translateY(0px);

	&:hover,
	&:focus {
		/* box-shadow: 0 4px 7px #656565; */
		/* transform: translateY(-1px); */
		box-shadow: 0 4px 15px -5px #656565;
		cursor: pointer;
	}
`;

const TopRow = styled.div`
	margin-bottom: 10px;
	display: flex;
	justify-content: space-between;
`;

const Category =
	styled.div <
	SimpleTileProps >
	` 
  display: inline-block;
  font-size: 14px;
  font-weight: 400;
  text-transform: uppercase;
  color: ${(props: SimpleTileProps) => colorMap['dance']} 
  /* // };(props.category.length > 0) ? colorMap["dance"] : "black" }; */
`;

const Image = styled.img`max-width: 50%;`;

const ContentSection = styled.div`
	padding: 5px 20px;
	text-align: left;
`;

const Title = styled.div`
	padding-bottom: 5px;
	font-size: 24px;
	font-weight: 600;
	color: black;
`;

const SubTitle = styled.div`
	padding: 0 0 20px 0;
	font-size: 10px;
	font-weight: 700;
	color: gray;
`;

const Description = styled.div`
	font-size: 16px;
	font-weight: 400;
	color: #272727;
	font-family: "Lato", sans-serif;
`;

const columns = (props: SimpleTileProps): Array<any> => {
	const { title, description, subTitle, image, imageAltText, githubLink, link, category } = props;

	const iconList = [];

	if (githubLink.length > 0) {
		iconList.push({
			link: githubLink,
			color: 'black',
			name: 'github',
			style: 'brand'
		});
	}

	if (link.length > 0) {
		iconList.push({
			link: link,
			color: 'black',
			name: 'link',
			style: 'solid'
		});
	}

	return [
		// @ts-ignore
		<Image key={uuid()} src={`/images/${image}`} alt={imageAltText} />,
		<ContentSection key={uuid()}>
			<TopRow>
				<Category category={category}>{category}</Category>
				<IconList icons={iconList} />
			</TopRow>
			<Title>{title}</Title>
			<SubTitle>{subTitle}</SubTitle>
			<Description>{description}</Description>
		</ContentSection>
	];
};

const SimpleTile: React.FunctionComponent<SimpleTileProps> = (props: SimpleTileProps) => {
	const { flip } = props;

	return (
		<Tile>
			{(() => {
				const comps = columns(props);
				if (flip) {
					return comps.reverse();
				}
				return comps;
			})()}
		</Tile>
	);
};

SimpleTile.defaultProps = {
	title: '',
	description: '',
	subTitle: '',
	githubLink: '',
	link: '',
	imageAltText: '',
	flip: false
};

export default SimpleTile;
