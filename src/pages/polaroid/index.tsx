import React, {useEffect} from 'react';
import styled from 'styled-components';
import $ from "jquery";
import "../../libs/turn.js";
import './index.scss';

const MainBackground = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-image: url('/images/red-wood.jpg');
  background-size: cover;
`
const PageContainer = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
`;

const NoteBookContainer = styled.div`
  position: relative;
  top: 25vh;
  left: 40vw;
  transform: rotateZ(-30deg);
`

const options = {
  width: 850,
  height: 600,
  autoCenter: false,
  display: "double",
  acceleration: true,
  elevation: 50,
  // gradients: !$.isTouch,
  when: {
    // @ts-ignore
    turned: function(e, page) {
          // @ts-ignore
      console.log("Current view: ", $(this).turn("view"));
    }
  }
};

export interface PolaroidPageProps {
  
}
 
const PolaroidPage: React.FC<PolaroidPageProps> = () => {

  useEffect(() => {
    // @ts-ignore
    $("#notebook").turn(options);

    document.addEventListener('keydown', (e) => {
      if (e.key == 'ArrowRight') {
        // @ts-ignore
         $("#notebook").turn("next");
         console.log("right")
      } else if (e.key == 'ArrowLeft') {
        // @ts-ignore
        $("#notebook").turn("previous");
        console.log("left")
      }
    })
  }, [])

  return (
    <PageContainer>
      <MainBackground />
      <NoteBookContainer>
        <div id="notebook">
          <div className="page"> Hello my name is Jeselle </div>
          <div className="page"> This is page two </div>
          <div className="page"> This is page three </div>
          <div className="page"> This is page four </div>
          <div className="hard"></div>
          <div className="hard"></div>
        </div>
      </NoteBookContainer>
    </PageContainer>
   );
}
 
export default PolaroidPage;