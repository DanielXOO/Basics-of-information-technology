function maxArr(arr)
{
    return Math.max.apply(null,arr);
}

function minArr(arr)
{
    return Math.min.apply(null,arr);
}

function tsk1()
{
    let res = new Array();
    res[0] = 6 * Math.pow(Math.PI,2) + 3 * Math.pow(Math.E,8);
    res[1] = 2 * Math.cos(4) + Math.cos(12) + 8 * Math.pow(Math.E,3);
    res[2] = 3 * Math.sin(9) + Math.log(5) + Math.sqrt(3);
    res[3] = 2 * Math.tan(5) + 6 * Math.PI + Math.sqrt(12);
    let lnk = document.getElementById('right');
    lnk.innerHTML = `<div>Массив: ${res} </br> Максимум: ${maxArr(res).toFixed(2)} </br> Минимум: ${minArr(res).toFixed(2)}</div>`;
}

function tsk2()
{

}