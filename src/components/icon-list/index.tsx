import * as React from 'react';
import styled from 'styled-components';
import { IconProps } from '../icon/Icon';

import './index.scss';

const iconMap = new Map([ [ 'solid', 'fas' ], [ 'regular', 'far' ], [ 'brand', 'fab' ] ]);

const IconLink = styled.a`
	i {
    color: ${props => (props.color) ? props.color : "black"};
  }
`;

export interface IconListProps {
  icons: Array<IconProps>
}
 
const IconList: React.SFC<IconListProps> = (props: IconListProps) => {
	const { icons } = props;

	return (
    <span className="cs-icon-list">
      {icons.map((icon: IconProps, i: Number) => {
        return (
          <IconLink color={icon.color} key={`${icon.name}_${i}`} href={icon.link}>
            <i className={`${iconMap.get(icon.style)} fa-${icon.name}`} />
          </IconLink>
        );
      })}
    </span>
  );
}

export default IconList;