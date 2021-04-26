const lnk = document.getElementById(`right`);

function Coordinate() {
    this.x;
    this.y;
}

function tsk1() {
    let str = `<img src="img/octoCat.png" draggable="false" height="100px" width="100px"  id = "pic"><textarea  rows="4" cols="30" id = "text"></textarea>`
    lnk.innerHTML = str;
    $(`#pic`).draggable();
    $(`#text`).draggable();
}

function tsk2() {
    let str = `<img src="img/octoCat.png"  draggable="false" height="100px" width="100px"  id = "pic">`
    lnk.innerHTML = str;
    moveByLine(document.getElementById(`pic`));
}

function tsk3() {
    let str = `<img src="img/octoCat.png"  draggable="false" height="100px" width="100px"  id = "pic">`
    lnk.innerHTML = str;
    moveByRand(document.getElementById(`pic`));
}

function tsk4() {
    let str = `<canvas height = "500px" width = "500px"></canvas>`
    str += `
    <br>
    <form name="builder" action="/">
    <p>Укажите функцию:</p>
            <div id="lvl">
                <p><input name="func" type="radio" value="1"> y=x2</p>
                <p><input name="func" type="radio" value="2"> y=x3</p>
                <p><input name="func" type="radio" value="3"> y=sin(x)</p>
                <p><input name="func" type="radio" value="4"> y=cos(x)</p>
            </div>
            <p>Цвет
            <select name = color>
                <option value="green">Зеленый</option>
                <option value="red">Красный</option>
                <option value="black">Черный</option>
                <option value="blue">Синий</option>
            </select>
        </p>
        </br>
        <input type="button" value="Build" onclick="buildFunc()">
    `
    lnk.innerHTML = str;
}


function moveByRand(aim) {
    let cursPosition = new Coordinate();
    cursPosition.x = aim.getBoundingClientRect().left;
    cursPosition.y = aim.getBoundingClientRect().top;
    let firstPos = new Coordinate();
    firstPos.x = cursPosition.x;
    firstPos.y = cursPosition.y;
    document.addEventListener(`keypress`, event => {
        let i = 0;
        let inter = setInterval(() => {
            i++;
            aim.style.top = firstPos.y + Math.cos(cursPosition.y++) * 40 + `px`;
            if (i < 100) {
                aim.style.left = `${++cursPosition.x}px`;
            }
            else {
                aim.style.left = `${--cursPosition.x}px`;
            }
            if (cursPosition.x == firstPos.x) {
                clearInterval(inter);
            }
        }, 90);
    });
}

function polyline(color, pts, ctx) {
    ctx.strokeStyle = color;
    ctx.beginPath();
    pts.forEach((p, i) => i ? ctx.lineTo(...p) : ctx.moveTo(...p));
    ctx.stroke();
}

function buildFunc(){
    let form = document.forms.builder;
    let y;
    switch (form.func.value){
        case `1`:
            y = x => Math.pow(x,2);
        break;
        case `2`:
            y = x => Math.pow(x,3);
        break;
        case `3`:
            y = x => Math.sin(x);
        break;
        case `4`:
            y = x => Math.cos(x);
        break;
        default:
            y = 0;
        break;
    }
    
    let scale = 10;
    let step = 1;
    let cnvs = document.querySelector('canvas');
    let ctx = cnvs.getContext('2d');
    ctx.clearRect(0, 0, cnvs.width, cnvs.height);
    ctx.lineWidth = 0.5;

    for (var i = step * scale; i < cnvs.width; i += step * scale) { //вертикальные
        polyline('gray', [[i, 0], [i, cnvs.height]], ctx);
    }

    for (var i = step * scale; i < cnvs.height; i += step * scale) { //Горизонтальные
        polyline('gray', [[0, i], [cnvs.width, i]], ctx);
    }

    ctx.lineWidth = 2;
    let pts = [];
    for (let x = -cnvs.width / 2; x < cnvs.width / 2; x += 5) {
        pts.push([cnvs.width / 2 + x, cnvs.height / 2 - y(x / scale) * scale]);
    }
    polyline(form.color.value, pts, ctx);

    //Ось X 
    polyline('black', [[0, cnvs.height / 2], [cnvs.width, cnvs.height / 2]], ctx);

    // ось Y
    polyline('black', [[cnvs.width / 2, 0], [cnvs.width / 2, cnvs.height]], ctx);

}