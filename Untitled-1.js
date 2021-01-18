let countColum = 0;
let countLine = 0;
let soma = 0;
let verifySomaDiagonal = [];
let quadradoLatinoColum;

transpose = (m) => m[0].map((x, i) => m.map((x) => x[i]));

function generateQuadradoLatino(area) {
  var quadradoLatino = new Array(area);
  for (i = 0; i < area; i++) {
    quadradoLatino[i] = new Array(area);
    for (j = 0; j < area; j++) {
      let numberRandom = `${Math.random() * 10}`;
      let numberFormated = numberRandom.split(".")[0];
      quadradoLatino[i][j] = numberFormated;
    }
  }
  for (let i = 0; i < quadradoLatino.length; i++) {
    let j = 0;
    let repetidos = new Set(quadradoLatino[i]);
    if (repetidos.size < quadradoLatino.length) countLine++;

    quadradoLatinoColum = transpose(quadradoLatino);

    let repetidos1 = new Set(quadradoLatinoColum[i]);

    if (repetidos1.size < quadradoLatino.length) countColum++;

    j = i;

    verifySomaDiagonal.push(quadradoLatino[i][j]);
    console.log(verifySomaDiagonal[i]);
    soma += `+ ${verifySomaDiagonal[i]}`;
  }
  
  console.log(eval(soma) + " : " + countLine + " : " + countColum);
}

generateQuadradoLatino(3);
