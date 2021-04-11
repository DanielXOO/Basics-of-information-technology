const lnk = document.getElementById(`right`);

function tsk1(){
    let str = `<p onmouseover="changeColor()" >Произвольный текст</p>`
    lnk.innerHTML = str;
}

function tsk2(){
    let str = `<p onclick="changeSize()" >Произвольный текст</p>`
    lnk.innerHTML = str;
}

function tsk3(){
    let str = `<img src="../img/win.png" height="100px" width="100px" onclick="changeImg()" id = "pic">`
    lnk.innerHTML = str;
}

function tsk4(){
    let str = `<img src="../img/win.png" height="100px" width="100px" onclick="replaceImg()" id = "pic">`
    lnk.innerHTML = str;
}

function tsk5(){
    let str = `<img src="../img/tux.png" height="100px" width="100px" onmouseover="addImg()" onmouseout="subImg()"  id = "pic">`
    lnk.innerHTML = str;
}

function tsk6(){
    let str = `<p  ondblclick="createBorder()">Нарисовать цветную рамку произвольного стиля вокруг любого абзаца при двойном щелчке (событие dblclick) на абзац.</p>`;
    lnk.innerHTML = str;
}

// Почитать как делать по-другому (устарело)
function changeColor(){
    event.srcElement.style.color = `purple`;
}

function changeSize(){
    event.srcElement.style.fontSize = `40px`;
}

function changeImg(){
    document.getElementById(`pic`).src = `../img/tux.png`;
}

function replaceImg(){
    document.getElementById(`right`).innerHTML = `<p>Hello</p>`;
}

function addImg(){
    event.srcElement.style.width = `200px`;
}

function subImg(){
    event.srcElement.style.width = `100px`;
}

function createBorder(){
    event.srcElement.style.border = `gray outset 5px`
}