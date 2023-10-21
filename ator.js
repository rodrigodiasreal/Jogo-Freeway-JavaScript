//Código do Ator

let xAtor = 85;
let yAtor = 366;
let colisao = false;
let meusPontos = 0;
let pontosAdversario = 0;

function mostraAtor() {
  image(imagemDoAtor, xAtor, yAtor, 30, 30);
  
}

function movimentaAtor(){
  
  if(keyIsDown(UP_ARROW)) {
    yAtor -= 3;
    }
  if(keyIsDown(DOWN_ARROW)) {
    if(podeSeMover()){
       yAtor += 3;
    }
   
    }
}

function verificaColisao (){
  //collideRectCircle(x1, y1, width1, height1, cx, cy, diameter)
  for(let i = 0; i < imagemCarros.length; i++){
    
    colisao = collideRectCircle(xCarros[i], yCarros[i], comprimentoCarro, alturaCarro, xAtor, yAtor, 15);
    if(colisao){
      voltaAtorPosicaoInicial();
      somDaColisao.play();
      if(pontosMaiorQueZero()){
        meusPontos -= 1;
      }
 
    }
  }
}

function voltaAtorPosicaoInicial(){
  
  yAtor = 366;
}

function incluiPontos(){
  textAlign(CENTER);
  textSize(25);
  fill(255,240,80);
  text(meusPontos, width / 5, 25);
}

function marcaPonto(){
  if(yAtor < 15){
    meusPontos += 1;
    voltaAtorPosicaoInicial();
    somDoPonto.play();
  }
  
}

function pontosMaiorQueZero () {
 return meusPontos > 0
  
}

function podeSeMover(){
  
  return yAtor < 366;
}