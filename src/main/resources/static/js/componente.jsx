import React from 'react';
import ReactDOM from 'react-dom/client';
import * as p5 from 'P5.js';

function setup() {
    p5.createCanvas(640, 480);
    p5.rect(0,0, 639, 479);
  }
const c = <h1>hola</h1>;//<script src="js/tablero.jsx"></script>;
ReactDOM.render(<h1>hola</h1>,document.getElementById('canvas'));
