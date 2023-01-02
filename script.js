// DOM ELEMENTS
const title = document.querySelector(".title");
const text = document.querySelector(".text");
const options = document.querySelectorAll(".features-icons .feature-icon");

let content = [
    {title: 'Zoom Meetings', text: 'Construa relacionamentos mais fortes, aumente a colaboração e crie uma experiência de reunião envolvente com vídeo e áudio HD para até 1.000 participantes.'},
    {title: 'Zoom Chat', text: 'Incluída na sua conta, nossa solução de chat simplifica os fluxos de trabalho, aumenta a produtividade e garante que os funcionários possam colaborar com segurança, tanto interna quanto externamente.'},
    {title: 'Phone', text: 'Potencialize suas comunicações por voz com nossa solução global de telefonia na nuvem com roteamento seguro de chamadas, filas de chamadas, SMS, transformação de chamadas em reuniões e muito mais.'},
    {title: 'Zoom Rooms', text: 'Adapte suas salas de conferência às necessidades de uma força de trabalho em constante mudança, enquanto equilibra as experiências remotas e no escritório usando vídeo e áudio HD, compartilhamento de conteúdo sem fio e quadro de compartilhamento interativo.'}
];

function setInfo(t){
    title.innerHTML = content[t].title;
    text.innerHTML = content[t].text;
}

function getIndex(element){
    var parent = element.parentNode;
    // The equivalent of parent.children.indexOf(child)
    var index = Array.prototype.indexOf.call(parent.children, element);
    return index;
}

for(const option of options){
        option.addEventListener('mouseover', function (){
            setInfo(getIndex(option));
        })
}