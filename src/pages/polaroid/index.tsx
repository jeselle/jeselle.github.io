import React, {useEffect} from 'react';
import styled from 'styled-components';
import $ from "jquery";
import { updateDepth, getViewNumber } from './helper';
import Hash from './hash';
import "../../libs/turn.js";
import "./notebook.css";
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

interface Book {
  [property: string]: any
}

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
    turning: function(e, page, view) {
				
				var book: Book = $(this),
					currentPage = book.turn('page'),
					pages = book.turn('pages');

				if (currentPage>3 && currentPage<pages-3) {
				
					if (page==1) {
						book.turn('page', 2).turn('stop').turn('page', page);
						e.preventDefault();
						return;
					} else if (page==pages) {
						book.turn('page', pages-1).turn('stop').turn('page', page);
						e.preventDefault();
						return;
					}
				} else if (page>3 && page<pages-3) {
					if (currentPage==1) {
						book.turn('page', 2).turn('stop').turn('page', page);
						e.preventDefault();
						return;
					} else if (currentPage==pages) {
						book.turn('page', pages-1).turn('stop').turn('page', page);
						e.preventDefault();
						return;
					}
				}

				updateDepth(book, page);
				
				if (page>=2)
					$('.sj-book .p2').addClass('fixed');
				else
					$('.sj-book .p2').removeClass('fixed');

				if (page<book.turn('pages'))
					$('.sj-book .p111').addClass('fixed');
				else
					$('.sj-book .p111').removeClass('fixed');

				Hash.go('page/'+page).update();
					
			},

      // @ts-ignore
			turned: function(e, page, view) {

				var book = $(this);

				if (page==2 || page==3) {
          // @ts-ignore
					book.turn('peel', 'br');
				}

				updateDepth(book);
				// @ts-ignore
				// $('#slider').slider('value', getViewNumber(book, page));
        // @ts-ignore
				book.turn('center');

			},

      // @ts-ignore
			start: function(e, pageObj) {
        // @ts-ignore
				// moveBar(true);

			},

      // @ts-ignore
			end: function(e, pageObj) {
			
				var book = $(this);

				updateDepth(book);

				setTimeout(function() {
          // @ts-ignore
					// $('#slider').slider('value', getViewNumber(book));

				}, 1);

				// moveBar(false);

			},

      // @ts-ignore
			missing: function (e, pages) {

				for (var i = 0; i < pages.length; i++) {
          // @ts-ignore
					addPage(pages[i], $(this));
				}

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