function sqr()
{
    let a = +prompt('Введите число а');
    let b = +prompt('Введите число b');
    let tb = document.getElementById('square');
    let str='<table>';
    str +='<tr><td>Радиус</td><td>Площадь круга</td><td>Длинна окружности</td></tr>';
    do
    {
        str+='<tr>';
        str+='<td>'+ a + '</td>';
        str+='<td>'+ Math.round(Math.PI * Math.pow(a,2)) + '</td>';
        str+='<td>'+ Math.round(Math.PI * a) + '</td>';
        str+='</tr>';
        a+=0.3;
    }while(a <= b);
    str+='</table>'
    tb.insertAdjacentHTML('beforeend',str);
}
