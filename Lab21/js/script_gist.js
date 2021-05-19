const canv_gist = document.getElementById(`gistagram`);
const ctx_gist = canv_gist.getContext(`2d`);
const block = 100;

function drawGist() {
    drawAxes();
    drawcolumn(`color`, 3);
    drawcolumn(`gradient`, 4);
    drawcolumn(`picture`, 5);

}

function drawAxes() {
    ctx_gist.beginPath();
    ctx_gist.fillStyle = `black`;
    ctx_gist.moveTo(2 * block, 1 * block);
    ctx_gist.lineTo(2 * block, 5 * block);
    ctx_gist.stroke();
    ctx_gist.beginPath();
    ctx_gist.moveTo(2 * block, 5 * block);
    ctx_gist.lineTo(6 * block, 5 * block);
    ctx_gist.stroke();
    ctx_gist.font = `20px serif`;
    ctx_gist.fillText(`Кол-во часов`, 30, 2.5 * block);
    ctx_gist.fillText(`Предмет`, 3.5 * block, 5.5 * block);
    let sbj = [`ОАП`, `ОИТ`, `КСИС`];
    for (let i = 1; i < 4; i++) {
        ctx_gist.fillText(sbj[i - 1], (i + 2) * block, 5.2 * block)
    }
    let j = 4;
    for (let i = 1; i < 5; i++) {
        ctx_gist.fillText(j, 1.7 * block, (i + 0.5) * block)
        j--;
    }
}

function drawcolumn(type, column) {
    switch (type) {
        case 'color':
            ctx_gist.beginPath();
            ctx_gist.fillStyle = `purple`;
            ctx_gist.fillRect(column * block, 4 * block, 45, 100);
            break;
        case 'gradient':
            ctx_gist.beginPath();
            let gradient = ctx_gist.createLinearGradient(column * block, 2 * block, column * block + 45, 2 * block + 300);
            gradient.addColorStop(0, 'white');
            gradient.addColorStop(0.5, 'blue');
            gradient.addColorStop(1, 'red');
            ctx_gist.fillStyle = gradient;
            ctx_gist.fillRect(column * block, 2 * block, 45, 300);
            break;
        case 'picture':
            ctx_gist.beginPath();
            var img = new Image();
            img.src = '../img/back.jpg';
            img.onload = function () {
                var pattern = ctx_gist.createPattern(img, 'repeat');
                ctx_gist.fillStyle = pattern;
                ctx_gist.fillRect(column * block, 3 * block, 45, 200);
            };
            break;
        default:
            console.log(`NOT FIND TYPE RECT`);
    }

}
drawGist();