
  let pconteudoJsHabilidades = document.getElementById('conteudoJsHabilidades');
  conteudoPasse =`  <div class="HTML"> <p>/* Passe o mouse ou dedo por cima de uma habilidade para ler a descrição */</p>
  <p> Em busca de um emprego *_* </p>
  <p id="tec">Quem sabe na sua empresa?</p>
  <p>Estou disponível para bater um papo, pode entrar em contato via facebook: Guilherme Add ou e-mail: guiandrademelo108@gmail.com <i id="star" class="fa-solid fa-star"></i></p>
  </div>`;

  pconteudoJsHabilidades.innerHTML = conteudoPasse;

function htm() {
    
  let pconteudoJsHabilidades = document.getElementById('conteudoJsHabilidades');

    conteudoHTML =` <div  class="HTML">

    <div class="cont-htm">
          <p>/* <b> HTML(hyper text marckup language)</b>: é uma linguagem de marcação de hyper text utilizada para adicionar conteúdo de um site. Linguagem de marcação é um conjunto de códigos aplicados a um texto. Hyper Text são os links. Eu domino está área 75%. */</p>
    </div>

    </div>`;

    pconteudoJsHabilidades.innerHTML = conteudoHTML;
}
  
function css() {
    
    let pconteudoJsHabilidades = document.getElementById('conteudoJsHabilidades');
  
      conteudoCSS =` <div class="CSS">
  
    <div class="cont-css">
      <p >/* <b>CSS(Cascading style sheets)</b>: significa folha de estilo encascada, é utilizada para adicionar estilo as páginas web. Eu domino está área 50%. */</p>
    </div>
  
      </div>`;
  
      pconteudoJsHabilidades.innerHTML = conteudoCSS;
  
}

function js() {
    
    let pconteudoJsHabilidades = document.getElementById('conteudoJsHabilidades');
  
      conteudoJS =` <div class="JS">
  
      <p>/* <b>JS(JavaScript)</b>: é uma linguagem de programação utilizada para adicionar interatividade as páginas web. Eu domino está área 13%. */</p>
  
      </div>`;
  
      pconteudoJsHabilidades.innerHTML = conteudoJS;
  
  }

function node() {
    
  let pconteudoJsHabilidades = document.getElementById('conteudoJsHabilidades');

    conteudonode =` <div class="node">

    <p>/* <b>Node-Js</b>: é um ambiente de execução baseado em pilha da web aberta (HTML, CSS e Js). Eu não tenho experiência nenhuma a está área, brevemente estou para aprender tecnologias ligada ao back-end. */</p>

    </div>`;

    pconteudoJsHabilidades.innerHTML = conteudonode;

}

function php() {
    
  let pconteudoJsHabilidades = document.getElementById('conteudoJsHabilidades');

    conteudophp =` <div class="php">

    <p>/* <b>Php</b>: é uma linguagem usada originalmente apenas para o desenvolvimento de aplicações presentes e atuantes no lado do servidor, capazes de gerar conteúdo dinâmico na World wide Web. Eu não tenho experiência nenhuma a está área, brevemente estou para aprender tecnologias ligada ao back-end. */</p>

    </div>`;

    pconteudoJsHabilidades.innerHTML = conteudophp;

}

  function out(){
    
    let pconteudoJsHabilidades = document.getElementById('conteudoJsHabilidades');
    pconteudoJsHabilidades.innerHTML = conteudoPasse;
    
  }
    // ir ao topo
  function scrollTo(element){
    document.querySelector(element).scrollIntoView({behavior:"smooth"});
  }

document.querySelector("#irAoTopo").addEventListener('click', function(event){
  event.preventDefault();
  scrollTo('#hd');
 // console.log('ir ao topo');
} );

    // animacao do scroll
const target = document.querySelectorAll('[data-scrollAnimation]');
const animationClass = 'animate';
function animateScroll(){

    const windowTop = window.pageYOffset + (window.innerHeight*3/4); //buscar o valor da tela do usuario
    target.forEach(function(element){ // forEach ver a distancia em cada elemento
      if((windowTop) > element.offsetTop ){
        element.classList.add(animationClass) //adicionando a classe animate
      }
      else{
        element.classList.remove(animationClass)
      }
    })
}
animateScroll(); //para animacao sempre ser executada
window.addEventListener('scroll', function(){
  animateScroll();
});

// slides
let count =1;
document.getElementById('radio1').checked=true;
setInterval(()=>{
  nextImage();
},3000)

function  nextImage(){
  count ++ ;
  if(count>4){
    count=1;
  }
  document.getElementById('radio'+count).checked=true;
}
 /*let voltar =document.querySelector('div .menor');
let next =document.querySelector('div .maior');
*/
  // movimentacao na img do fundo da sessao1
  const card = document.querySelector('.imgSessao1');

 card.addEventListener('mousemove', cardEfect);
  card.addEventListener('mouseleave', cardBack);

  function  cardEfect(event) {

      const cardwidth = card.offsetWidth;
      const cardheight = card.offsetHeight;
      const centerX = card.offsetLeft + cardwidth/2;
      const centerY = card.offsetTop + cardheight/2;
      const positionX = event.clientX - centerX;
      const positionY = event.clientY - centerY;

      const rotateX = ((+1)*25*positionY/(cardheight)).toFixed(2);
      const rotateY = ((-1)*25*positionX/(cardwidth)).toFixed(2);
      card.style.transform = `perspective(500px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`

  //     console.log( positionX, positionY);
  }

  function cardBack(event) {
    card.style.transform = `= rotateX(0deg) rotateY(0deg)`
  }

  // Menu Lateral

  function men() {

    let menuMobile = document.querySelector('.mobile-menu')
    if (menuMobile.classList.contains('open')){
      menuMobile.classList.remove('open')
     document.querySelector('.icon').src="css/imagens/barras.png"
    }
    else{
      menuMobile.classList.add('open')
      document.querySelector('.icon').src="css/imagens/x.png"
    }

  }