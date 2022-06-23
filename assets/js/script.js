
function bobbles(){
    const count = 200;
    let i = 0 ;
    const section = document.querySelector("section");
    while(i < count){
        let bobble = document.createElement ("i");
        let x = Math.floor(Math.random() * window.innerWidth);
        let y = Math.floor(Math.random() * window.innerHeight);
        let size = Math.random()*10;
        bobble.style.left= x + 'px';
        bobble.style.top= y + 'px';
        bobble.style.width = 1*size + 'px';
        bobble.style.height = 1*size + 'px';

        bobble.style.animationDirection = 5 + size + 's';
       bobble.style.animationDelay = - size + 's'

        section.appendChild(bobble);
        i++;
    }
}

bobbles();