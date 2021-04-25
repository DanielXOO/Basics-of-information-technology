
const lnk = document.getElementById(`right`);

function tsk1(){
    let str = `<p id="changes">Произвольный текст</p>`
    lnk.innerHTML = str;
    $(`#changes`).mouseover(() => {
        $(`#changes`).css(`color`,`red`);
    });
}

function tsk2(){
    let str = `<p id="changes">Произвольный текст</p>`
    lnk.innerHTML = str;
    $(`#changes`).click(()=>{
        $(`#changes`).css(`font-size`, `40px`);
    });
}

function tsk3(){
    let str = `<img src="img/win.png" height="100px" width="100px" id="changes">`
    lnk.innerHTML = str;
    $(`#changes`).click(()=>{
        const picture =  $(`#changes`).attr(`src`) === `img/win.png` ? `img/tux.png` : `img/win.png`;
        $(`#changes`).attr(`src`, picture);
    });
}

function tsk4(){
    let str = `<img src="img/win.png" height="100px" width="100px" id="changes">`
    lnk.innerHTML = str;
    $(`#changes`).click(()=>{
        $(`#changes`).replaceWith(`Hello`);
    });
}

function tsk5(){
    let str = `<img src="img/tux.png" height="100px" width="100px" id="changes">`
    lnk.innerHTML = str;
    $(`#changes`).mouseover(()=>{
        $(`#changes`).attr(`width`, `300px`);
    });
    $(`#changes`).mouseout(()=>{
        $(`#changes`).attr(`width`, `100px`);
    });
}

function tsk6(){
    let str = `<p id = "changes">Нарисовать цветную рамку произвольного стиля вокруг любого 
    абзаца при двойном щелчке (событие dblclick) на абзац.</p>`;
    lnk.innerHTML = str;
        $(`#changes`).dblclick(()=>{
            $(`#changes`).css(`border`, `gray outset 5px`);  
        });
}



function changeSize(){
    event.srcElement.style.fontSize = `40px`;
}

function changeImg(){
    document.getElementById(`pic`).src = `img/tux.png`;
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