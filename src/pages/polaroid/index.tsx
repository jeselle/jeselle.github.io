import React, {useEffect} from 'react';
import styled from 'styled-components';
import $ from "jquery";
import "../../libs/turn.js";

const MainBackground = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-image: url('/public/images/red-wood.jpg');
  background-size: cover;
`
const PageContainer = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: none;
`;

const NoteBook = styled.div`
  width: 300px;
  height: 400px;
`

// const options = {
//   width: 800,
//   height: 600,
//   autoCenter: true,
//   display: "double",
//   acceleration: true,
//   elevation: 50,
//   // gradients: !$.isTouch,
//   when: {
//     // @ts-ignore
//     turned: function(e, page) {
//           // @ts-ignore
//       console.log("Current view: ", $(this).turn("view"));
//     }
//   }
// };

export interface PolaroidPageProps {
  
}
 
const PolaroidPage: React.FC<PolaroidPageProps> = () => {

  useEffect(() => {
    // @ts-ignore
    $("#notebook").turn({ 
      width: 400,
      height: 300,
      autoCenter: true
    });
  }, [])

  return (
    <PageContainer>
      <MainBackground />
      <NoteBook id="notebook">
        <div className="hard"> Turn.js </div>
        <div className="hard"> Turn.js </div>
        <div> Hello my name is Jeselle </div>
        <div> This is page two </div>
        <div> This is page three </div>
        <div> This is page four </div>
        <div className="hard"></div>
        <div className="hard"></div>
      </NoteBook>
    </PageContainer>
   );
}
 
export default PolaroidPage;