import * as React from 'react';
import styled from 'styled-components';




export interface SimpleTileProps {
    title: string,
    subTitle: string,
    description: string,
    image: string,
    imageAltText: string,
    githubLink: string,
    link: string,
    flip: boolean
}

const Tile = styled.div`
  display: flex;
  justify-content: space-between;
`

const Title = styled.div`
   font-size: 30px;
  font-weight: 500;
`

const SubTitle = styled.div`
  font-size: 14px;
  font-weight: 600;
  text-transform: uppercase;
`

const Description = styled.div`
  font-size: 16px;
  font-weight: 400;
`

const Image = styled.div`
  flex: 1;
`

const ContentSection = styled.div`
  flex: 1;
  display: flex;
`

const Links = styled.div`
  display: flex;
  width: 30%;
`

const columns = (props: SimpleTileProps): Array<any>  => {
    const {
      title,
      description,
      subTitle,
      image,
      imageAltText,
      githubLink,
      link
    } = props;

    return [
        (<Image src={image}></Image>),
        (
            <ContentSection>
                <div>
                  <Links githubLink={githubLink} link={link}></Links>
                  <Title>{title}</Title>
                </div>
                
                <SubTitle>{subTitle}</SubTitle>
                <Description>{description}</Description>
            </ContentSection>
        )
]}
 
const SimpleTile: React.SFC<SimpleTileProps> = (props: SimpleTileProps) => {
    const {
        flip
    } = props;

    return ( <Tile>
        { (() => {
            const comps = columns(props);
            if (flip) {
                return comps.reverse()
            }
            return comps
            })()
        }
    </Tile>)

}
 
export default SimpleTile;