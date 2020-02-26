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
	@mixin grow($amount) {
		transform: scale(1, 1);

		&:hover {
			transform: scale(amount, amount);
		}
	}

	@mixin shiftLeft($amount) {
		transform: translateX(0);

		&:hover {
			transform: translateX(calc(amount * -1));
		}
	}

	margin: 60px 0;
	display: flex;
	justify-content: flex-start;
	width: 100%;
	transition: all .2s;
	transform: scale(1, 1);

	&:hover,
	&:focus {
		/* box-shadow: 0 4px 7px #656565; */
		/* transform: translateY(-1px); */

		transform: scale(1.01, 1.01);
		box-shadow: 0 4px 15px -5px #656565;
	}

	@media (min-width: 1281px) {
		height: 250px;
	}

	@media (min-width: 1025px) and (max-width: 1280px) {
		height: 250px;
	}

	@media (min-width: 768px) and (max-width: 1024px) {
		height: 200px;
	}

	@media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
		height: 150px;
	}

	@media (min-width: 481px) and (max-width: 767px) {
		height: 125px;
	}

	@media (min-width: 320px) and (max-width: 480px) {
		height: 75px;
	}

	@media (min-width: 0) and (max-width: 320px) {
		height: 50px;
	}
`;

const TopRow = styled.div`
	display: flex;
	justify-content: space-between;

	@media (min-width: 1281px) {
		margin-bottom: 10px;
	}

	@media (min-width: 1025px) and (max-width: 1280px) {
		margin-bottom: 10px;
	}

	@media (min-width: 768px) and (max-width: 1024px) {
		margin-bottom: 8px;
	}

	@media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
		margin-bottom: 6px;
	}

	@media (min-width: 481px) and (max-width: 767px) {
		margin-bottom: 4px;
	}

	@media (min-width: 320px) and (max-width: 480px) {
		margin-bottom: 3px;
	}

	@media (min-width: 0) and (max-width: 320px) {
		margin-bottom: 2px;
	}
`;

const Category =
	styled.div <
	SimpleTileProps >
	` 
  display: inline-block;
  font-weight: 400;
  text-transform: uppercase;
  color: ${(props: SimpleTileProps) => colorMap['dance']};
  /* // };(props.category.length > 0) ? colorMap["dance"] : "black" }; */

  @media (min-width: 1281px) {
  font-size: 14px;
	}

	@media (min-width: 1025px) and (max-width: 1280px) {
  font-size: 14px;
	}

	@media (min-width: 768px) and (max-width: 1024px) {
  font-size: 12px;
	}

	@media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
  font-size: 10px;
	}

	@media (min-width: 481px) and (max-width: 767px) {
  font-size: 8px;
	}

	@media (min-width: 320px) and (max-width: 480px) {
  font-size: 6px;
	}

	@media (min-width: 0) and (max-width: 320px) {
  font-size: 6px;
	}
`;

const Image = styled.img`
	max-width: 500px;

	@media (min-width: 1281px) {
		width: 40%;
	}

	@media (min-width: 1025px) and (max-width: 1280px) {
		width: 45%;
	}

	@media (min-width: 768px) and (max-width: 1024px) {
		width: 45%;
	}

	@media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
		width: 45%;
	}

	@media (min-width: 481px) and (max-width: 767px) {
		width: 50%;
	}

	@media (min-width: 320px) and (max-width: 480px) {
		width: 50%;
	}

	@media (min-width: 0) and (max-width: 320px) {
		width: 50%;
	}
`;

const Title = styled.div`
	padding-bottom: 5px;
	font-size: 24px;
	font-weight: 600;
	color: black;

	@media (min-width: 1281px) {
		font-size: 24px;
	}

	@media (min-width: 1025px) and (max-width: 1280px) {
		font-size: 24px;
	}

	@media (min-width: 768px) and (max-width: 1024px) {
		font-size: 20px;
	}

	@media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
		font-size: 18px;
	}

	@media (min-width: 481px) and (max-width: 767px) {
		font-size: 14px;
	}

	@media (min-width: 320px) and (max-width: 480px) {
		font-size: 10px;
	}

	@media (min-width: 0) and (max-width: 320px) {
		font-size: 10px;
	}
`;

const ContentSection = styled.div`
	text-align: left;
	overflow: auto;

	@media (min-width: 1281px) {
		padding: 20px;
	}

	@media (min-width: 1025px) and (max-width: 1280px) {
		padding: 20px;
	}

	@media (min-width: 768px) and (max-width: 1024px) {
		padding: 16px 20px;
	}

	@media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
		padding: 14px 20px;
	}

	@media (min-width: 481px) and (max-width: 767px) {
		padding: 10px 20px;
	}

	@media (min-width: 320px) and (max-width: 480px) {
		padding: 8px 20px;
	}

	@media (min-width: 0) and (max-width: 320px) {
		padding: 4px 20px;
	}
`;

const SubTitle = styled.div`
	padding: 0 0 20px 0;
	font-size: 10px;
	font-weight: 700;
	color: gray;

	@media (min-width: 1281px) {
		font-size: 10px;
	}

	@media (min-width: 1025px) and (max-width: 1280px) {
		font-size: 10px;
	}

	@media (min-width: 768px) and (max-width: 1024px) {
		font-size: 10px;
	}

	@media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
		font-size: 8px;
	}

	@media (min-width: 481px) and (max-width: 767px) {
		font-size: 8px;
	}

	@media (min-width: 320px) and (max-width: 480px) {
		font-size: 6px;
	}

	@media (min-width: 0) and (max-width: 320px) {
		font-size: 6px;
	}
`;

const Description = styled.div`
	font-size: 16px;
	font-weight: 400;
	color: #272727;
	font-family: "Lato", sans-serif;

	@media (min-width: 1281px) {
		font-size: 16px;
	}

	@media (min-width: 1025px) and (max-width: 1280px) {
		font-size: 14px;
	}

	@media (min-width: 768px) and (max-width: 1024px) {
		font-size: 14px;
	}

	@media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
		font-size: 12px;
	}

	@media (min-width: 481px) and (max-width: 767px) {
		font-size: 10px;
	}

	@media (min-width: 320px) and (max-width: 480px) {
		font-size: 8px;
	}

	@media (min-width: 0) and (max-width: 320px) {
		font-size: 6px;
	}
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
