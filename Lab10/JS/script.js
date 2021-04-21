const lnk = document.getElementById(`right`);

function Coordinate(){
    this.x;
    this.y;
}

function tsk1(){
    let str = `<img src="img/octoCat.png"  draggable="false" height="100px" width="100px"  id = "pic"><textarea  rows="4" cols="30" id = "text"></textarea>`
    lnk.innerHTML = str;
    followMouse(document.getElementById(`pic`));
    followMouse(document.getElementById(`text`));
}

function tsk2(){
    let str = `<img src="img/octoCat.png"  draggable="false" height="100px" width="100px"  id = "pic">`
    lnk.innerHTML = str;
    moveByLine(document.getElementById(`pic`));
}

function tsk3(){
    let str = `<img src="img/octoCat.png"  draggable="false" height="100px" width="100px"  id = "pic">`
    lnk.innerHTML = str;
    moveByRand(document.getElementById(`pic`));
}

function tsk4(){
    let str = `<img src="img/win.png" height="100px" width="100px" onclick="replaceImg()" id = "pic">`
    lnk.innerHTML = str;
}

function tsk5(){
    let str = `<img src="img/tux.png" height="100px" width="100px" onmouseover="addImg()" onmouseout="subImg()"  id = "pic">`
    lnk.innerHTML = str;
}

function followMouse(aim){
    let cursPosition = new Coordinate();
    aim.onmousedown = (event) => {
        
        cursPosition.x = event.offsetX;
        cursPosition.y = event.offsetY;
        document.onmousemove = event => { 
            aim.style.left = event.pageX - cursPosition.x + `px`;
            aim.style.top = event.pageY - cursPosition.y + `px`; 
        };
        document.onmouseup = () => { document.onmousemove = false };
    } 
}

function moveByLine(aim){
    let cursPosition = new Coordinate();
    cursPosition.x = aim.getBoundingClientRect().left;
    document.addEventListener(`keypress`, event => {
        let inter = setInterval(() => {aim.style.left = ++cursPosition.x + `px`;});
        document.addEventListener(`click`, () => {clearInterval(inter);});
    });
}

function moveByRand(aim){
    let cursPosition = new Coordinate();
    cursPosition.x = aim.getBoundingClientRect().left;
    cursPosition.y = aim.getBoundingClientRect().top;
    document.addEventListener(`keypress`, event => {
        let inter = setInterval(() => {
            aim.style.left = `${++cursPosition.x}px`;
            aim.style.top  = cursPosition.y + Math.cos(cursPosition.y++) * 10 + `px`;
            
        }, 100);
        //document.addEventListener(`click`, () => {clearInterval(inter);});
    });
}