import React, {useEffect} from 'react';
import styled from 'styled-components';
import { isConstructorDeclaration } from 'typescript';
import { init } from './helper';
import './index.scss';

export interface PolaroidImageProps {
  image: string
  altText: string
}

const Container = styled.div`
  background: white;
  /* padding: 10px 10px 40px 10px; */
  /* border: 1px solid #333333; */
  /* box-shadow: 0px 0px 10px black; */
`

const OriginalImage = styled.img`
  position: absolute;
  transform: translateX(10000px);
`;

const ComponentWrapper = styled.div`
  /* width: 100vw; */
  /* height: 100vh; */
`
 
const PolaroidImage: React.FC<PolaroidImageProps> = (props: PolaroidImageProps) => {

  useEffect(() => {
    init();
  }, [])

  return ( <ComponentWrapper>
    {/* <img src={props.image} alt={props.altText}/> */}
    <OriginalImage id="i" />
    <div id="drag-wrapper">
        <canvas id="c"></canvas>
        
        <div className="drag-handle" data-corner="0"></div>
        <div className="drag-handle" data-corner="1"></div>
        <div className="drag-handle" data-corner="2"></div>
        <div className="drag-handle" data-corner="3"></div>
        <div className="drag-handle" data-corner="4"></div>
    </div>
  </ComponentWrapper> );
}
 
export default PolaroidImage;