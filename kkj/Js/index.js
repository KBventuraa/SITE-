//declarar as variaveis para armazenar a pociçaõ do meu botão "no"
let topmod = 0;
let leftmod = 0; 

/*adiciona um evento ao corpo da pagina (body) para que a funvtion do botão seja chamada quando o mouse se mover*/
$("body").on("mousemove", webHandler);

//funcao webhadler (botao desktoop)
function webhadler (event){
    //definindo posicao inicial do bot
    let button = $ ('#no').position();
    //calculando o centro do botao
    let buttoncenter = {
        x: button.left + 50,
        y: button.top + 20
    }
    //calculando a distancia entre o curso do mouse e o centro do botao
    //math.sqrt() raiz quadrado do nosso x 
    //math.pow(base,expent)
    let distance = math,sqrt 
}