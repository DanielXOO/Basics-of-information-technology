function maxArr(arr)
{
    return Math.max.apply(Math,arr);
}

function minArr(arr)
{
    return Math.min.apply(Math,arr);
}

function tsk1()
{
    let res = new Array();
    res[0] = 6 * Math.pow(Math.PI,2) + 3 * Math.pow(Math.E,8);
    res[1] = 2 * Math.cos(4) + Math.cos(12) + 8 * Math.pow(Math.E,3);
    res[2] = 3 * Math.sin(9) + Math.log(5) + Math.sqrt(3);
    res[3] = 2 * Math.tan(5) + 6 * Math.PI + Math.sqrt(12);
    const lnk = document.getElementById('right');
    lnk.innerHTML = `<div>Массив: ${(res.map(item => item.toFixed(2)))}</br> Максимум: ${maxArr(res).toFixed(2)} </br> Минимум: ${minArr(res).toFixed(2)}</div>`;
}

function tsk2()
{
    const arrTrash = new Array(`pow`, `pop`, `push`, `shift`, `round`, `floor`, `sline`, `sort`);
    let arrMath = arrTrash.filter(item => item in Math);
    let arrArray = arrTrash.filter(item => item in Array.prototype);
    arrMath.push(`sin`);
    arrArray.unshift(`concat`);
    const lnk = document.getElementById('right');
    lnk.innerHTML = `<div>Массив: ${arrTrash}</br>Размер: ${arrTrash.length}</br>Массив: ${arrMath}</br>Размер: ${arrMath.length}</br>Массив: ${arrArray}</br>Размер: ${arrArray.length}</div>`;
}

function tsk3()
{
    let name = new String(`Кулинкович Даниил Алексеевич`);
    let resultStr = `Исходный: ${name}</br>`;
    resultStr += `Заглавные: ${name.toUpperCase()}</br>`;
    resultStr += `Строчные: ${name.toLowerCase()}</br>`;
    resultStr += `Конкатенация: ${name.toUpperCase() + name.toLowerCase()}</br>`;
    let arr = name.split(` `);
    name = name.replace(name,`${arr[0][0]}${arr[1][0]}${arr[2][0]}`)
    resultStr+= `ФИО: ${name}</br>`;
    const lnk = document.getElementById('right');
    lnk.innerHTML = resultStr;
}

function tsk4()
{
    const leftEl = new Array(`Год`, `Месяц`, `День`, `Час`, `Минуты`, `Секунды`);
    let time = new Date;
    const rightEl = new Array(time.getFullYear(), time.getMonth() + 1, time.getDate(), time.getHours(), time.getMinutes(), time.getSeconds());
    let resultStr= `<table>`;
    for(i = 0; i < leftEl.length || i <rightEl.length; i++)
    {
        resultStr+=`<tr><td>${leftEl[i]}</td><td>${rightEl[i]}</td></tr>`
    }
    resultStr += `</table>`;
    const lnk = document.getElementById('right');
    lnk.innerHTML = resultStr;
}