"use strict";
import dragTracker from 'drag-tracker';

console.clear();

    //http://mike.teczno.com/notes/canvas-warp.html
    //http://s3.amazonaws.com/canvas-warp/2009-11-01/index.html
const utils = {

    rndInt(max, override) {
        //if(override !== undefined) { return override; }
        return Math.round(Math.random() * max);
    },
    
    /**
     * https://en.wikipedia.org/wiki/Incircle_and_excircles_of_a_triangle
     * https://math.stackexchange.com/questions/1413372/find-cartesian-coordinates-of-the-incenter
     * https://www.mathopenref.com/coordincenter.html
     */
    calcIncircle(A, B, C) {
        function lineLen(p1, p2) {
            const dx = p2[0] - p1[0],
                  dy = p2[1] - p1[1];
            return Math.sqrt(dx*dx + dy*dy);
        }
        
        //Side lengths, perimiter p and semiperimiter s:
        const a = lineLen(B, C),
              b = lineLen(C, A),
              c = lineLen(A, B),
              p = (a + b + c),
              s = p/2;
        
        //Heron's formula
        //https://www.wikihow.com/Calculate-the-Area-of-a-Triangle#Using_Side_Lengths
        const area = Math.sqrt(s * (s-a) * (s-b) * (s-c));
        //Faster(?) alternative:
        //http://geomalgorithms.com/a01-_area.html#Modern-Triangles
        //const area = Math.abs( (B[0]-A[0])*(C[1]-A[1]) - (C[0]-A[0])*(B[1]-A[1]) )/2;

        //Incircle radius r
        //  https://en.wikipedia.org/wiki/Incircle_and_excircles_of_a_triangle#Relation_to_area_of_the_triangle
        //..and center [cx, cy]
        //  https://en.wikipedia.org/wiki/Incircle_and_excircles_of_a_triangle#Cartesian_coordinates
        //  https://www.mathopenref.com/coordincenter.html
        const r = area/s,
              cx = (a*A[0] + b*B[0] + c*C[0]) / p,
              cy = (a*A[1] + b*B[1] + c*C[1]) / p;
        return {
            r,
            c: [cx, cy],
        }
    },
    
    /*
      * https://math.stackexchange.com/questions/17561/how-to-shrink-a-triangle
      */
    expandTriangle(A, B, C, amount) {
        const incircle = this.calcIncircle(A, B, C),
              c = incircle.c,
              factor = (incircle.r + amount)/(incircle.r);
        
        function extendPoint(p) {
            const dx = p[0] - c[0],
                  dy = p[1] - c[1],
                  x2 = (dx * factor) + c[0],
                  y2 = (dy * factor) + c[1];
            return [x2, y2];
        }
        
        const A2 = extendPoint(A),
              B2 = extendPoint(B),
              C2 = extendPoint(C);
        return[A2, B2, C2];
    },

    /**
     *  Solves a system of linear equations.
     *
     *  t1 = (a * r1) + (b + s1) + c
     *  t2 = (a * r2) + (b + s2) + c
     *  t3 = (a * r3) + (b + s3) + c
     *
     *  r1 - t3 are the known values.
     *  a, b, c are the unknowns to be solved.
     *  returns the a, b, c coefficients.
     */
    linearSolution(r1, s1, t1, r2, s2, t2, r3, s3, t3)
    {
        var a = (((t2 - t3) * (s1 - s2)) - ((t1 - t2) * (s2 - s3))) / (((r2 - r3) * (s1 - s2)) - ((r1 - r2) * (s2 - s3)));
        var b = (((t2 - t3) * (r1 - r2)) - ((t1 - t2) * (r2 - r3))) / (((s2 - s3) * (r1 - r2)) - ((s1 - s2) * (r2 - r3)));
        var c = t1 - (r1 * a) - (s1 * b);

        return [a, b, c];
    },

    /**
     *  This draws a triangular area from an image onto a canvas,
     *  similar to how ctx.drawImage() draws a rectangular area from an image onto a canvas.
     *
     *  s1-3 are the corners of the triangular area on the source image, and
     *  d1-3 are the corresponding corners of the area on the destination canvas.
     *
     *  Those corner coordinates ([x, y]) can be given in any order,
     *  just make sure s1 corresponds to d1 and so forth.
     */
    drawImageTriangle(img, ctx, s1, s2, s3, d1, d2, d3) {
        //I assume the "m" is for "magic"...
        const xm = this.linearSolution(s1[0], s1[1], d1[0],  s2[0], s2[1], d2[0],  s3[0], s3[1], d3[0]),
              ym = this.linearSolution(s1[0], s1[1], d1[1],  s2[0], s2[1], d2[1],  s3[0], s3[1], d3[1]);

        ctx.save();

        ctx.setTransform(xm[0], ym[0], xm[1], ym[1], xm[2], ym[2]);
        ctx.beginPath();
        ctx.moveTo(s1[0], s1[1]);
        ctx.lineTo(s2[0], s2[1]);
        ctx.lineTo(s3[0], s3[1]);
        ctx.closePath();
        //Leaves a faint black (or whatever .fillStyle) border around the drawn triangle
        //  ctx.fill();
        ctx.clip();
        ctx.drawImage(img, 0, 0, img.width, img.height);

        ctx.restore();
        
        
        return;
        
        //DEBUG - https://en.wikipedia.org/wiki/Incircle_and_excircles_of_a_triangle
        const incircle = this.calcIncircle(d1, d2, d3),
              c = incircle.c;
        //console.log(incircle);
        ctx.beginPath();
        ctx.arc(c[0], c[1], incircle.r, 0, 2*Math.PI, false);
        ctx.moveTo(d1[0], d1[1]);
        ctx.lineTo(d2[0], d2[1]);
        ctx.lineTo(d3[0], d3[1]);
        ctx.closePath();
        //ctx.fillStyle = 'rgba(0,0,0, .3)';
        //ctx.fill();
        ctx.lineWidth = 2;
        ctx.strokeStyle = 'rgba(255,0,0, .4)';
        ctx.stroke();
    },
};

export const init = () => {

  const canv = document.querySelector('#c'),
        ctx = canv.getContext('2d'),
        img = document.querySelector('#i'), //new Image(),
        handles = document.querySelectorAll('.drag-handle');

  let w, h, corners;
  
  function updateUI() {

      function drawTriangle(s1, s2, s3, d1, d2, d3) {
          function movePoint(p, exampleSource, exampleTarget) {
              const dx = exampleTarget[0]/exampleSource[0],
                    dy = exampleTarget[1]/exampleSource[1],
                    p2 = [p[0] * dx, p[1] * dy];
              return p2;
          }
          //Overlap the destination areas a little
          //to avoid hairline cracks when drawing mulitiple connected triangles.
          const [d1x, d2x, d3x] = utils.expandTriangle(d1, d2, d3, .3),
                [s1x, s2x, s3x] = utils.expandTriangle(s1, s2, s3, .3);
                //s1x = movePoint(s1, d1, d1x),
                //s2x = movePoint(s2, d2, d2x),
                //s3x = movePoint(s3, d3, d3x);
          
          utils.drawImageTriangle(img, ctx,
                                  s1x, s2x, s3x,
                                  d1x, d2x, d3x);
      }

      ctx.clearRect(0,0, w,h);
      
      drawTriangle([0, 0], [w/2, h/2], [0, h], 
                    corners[0], corners[2], corners[3]);
//*
      drawTriangle([0, 0], [w/2, h/2], [w, 0], 
                    corners[0], corners[2], corners[1]);

      drawTriangle([w, 0], [w/2, h/2], [w, h], 
                    corners[1], corners[2], corners[4]);

      drawTriangle([0, h], [w/2, h/2], [w, h], 
                    corners[3], corners[2], corners[4]);
//*/
      corners.forEach((c, i) => {
          const s = handles[i].style;
          s.left = c[0] + 'px';
          s.top =  c[1] + 'px';
      });
  }

  img.onload = function()
  {
      const rnd = utils.rndInt;

      w = canv.width = img.width;
      h = canv.height = img.height;

      //Put the four corners (and center) of the source image at semi-random places on the canvas:
      corners = [[rnd(w*.33),         rnd(h*.33)],
                  [rnd(w*.33) + w*.67, rnd(h*.33)],
                  [rnd(w*.33) + w*.33, rnd(h*.33) + h*.33], //center
                  [rnd(w*.33),         rnd(h*.33) + h*.67],
                  [rnd(w*.33) + w*.67, rnd(h*.33) + h*.67]];

      updateUI();

      console.log("init");
      
      dragTracker({
          container: document.querySelector('#drag-wrapper'),
          selector: '.drag-handle',
          handleOffset: 'center',
          callback: (box, pos) => {
            console.log("hit");
              //console.log(corners[box.dataset.corner], pos);
              corners[box.dataset.corner] = pos;
              updateUI();
          },
      });
  };

    const imgW = Math.min(window.innerWidth - 10, window.innerWidth);
    const imgH = Math.min(window.innerWidth - 10, window.innerHeight);
    img.src = `https://picsum.photos/${imgW}/${imgH}?image=1072`;

  }