const canvs_diag = document.getElementById(`diagram`);
const ctx = canvs_diag.getContext(`2d`);

let beginSector = 0;
let posText = {
    x: 5*block,
    y: 2*block
}

function drawDiag(){
    drawBase();
    addSector(30, `red`, `Отчислили`);
    addSector(50, `green`, `Сдают лабы`);
    addSector(20, `blue`, `Сдали все`);
}

function drawBase(){
    ctx.beginPath();
    ctx.arc(3*block, 3*block, 1.5*block, beginSector, 2 * Math.PI, true);
    ctx.fillStyle = `#E6E6FA`;
    ctx.fill();
}

function addSector(persents, color, defenition){
    let sectorSize = (persents*2*Math.PI)/100;
    ctx.beginPath();
    ctx.strokeStyle="yellow";
    ctx.lineWidth="8"
    ctx.moveTo(3*block, 3*block);
    ctx.arc(3*block, 3*block, 1.5*block, beginSector, beginSector + sectorSize, false);
    beginSector += sectorSize;
    ctx.lineTo(3*block, 3*block);
    ctx.fillStyle = color;
    ctx.fill();
    ctx.stroke();
    addDefenition(defenition, color, persents);
}

function addDefenition(text,color, persents){
    ctx.beginPath();
    ctx.fillStyle = color;
    ctx.fillRect(posText.x, posText.y - 15, 20, 20);
    ctx.font = `20px serif`;
    ctx.fillText(`${text} ${persents}%`, posText.x + 25, posText.y);
    posText.y += 0.5 * block;
}

drawDiag();