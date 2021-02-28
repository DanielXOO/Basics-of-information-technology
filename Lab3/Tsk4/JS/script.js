function foo()
{
    let tb = document.getElementById('frmt');
    let str='<table>';
    const a = new Number(12.67345);
    str +='<tr><td>Число</td><td>Метод</td><td>Результат</td><td>Описание метода</td></tr>';
    str +='<tr><td>'+a+'</td><td>a.toExponential(4)</td><td>'+a.toExponential(4)+'</td><td>Представляет число в экспоненциальной форме</td></tr>';
    str +='<tr><td>'+a+'</td><td>a.toFixed(2)</td><td>'+a.toFixed(2)+'</td><td>Представляет число в форме с фиксированным количеством цифр после точки</td></tr>';
    str +='<tr><td>'+a+'</td><td>a.toPrecision(1)</td><td>'+a.toPrecision(1)+'</td><td>Представляет число с заданным общим количеством значащих цифр</td></tr>';
    str +='<tr><td>'+a+'</td><td>a.toString(2)</td><td>'+a.toString(2)+'</td><td>возвращает строковое представление числа в системе счисления с указанным основанием.</td></tr>';
    str +='<tr><td>Число</td><td>Метод</td><td>Результат</td><td>Описание метода</td></tr>';
    const b =new Number(23);
    str +='<tr><td>'+b+'</td><td>a.toExponential(4)</td><td>'+a.toExponential(4)+'</td><td>Представляет число в экспоненциальной форме</td></tr>';
    str +='<tr><td>'+b+'</td><td>a.toFixed(2)</td><td>'+a.toFixed(2)+'</td><td>Представляет число в форме с фиксированным количеством цифр после точки</td></tr>';
    str +='<tr><td>'+b+'</td><td>a.toPrecision(1)</td><td>'+a.toPrecision(1)+'</td><td>Представляет число с заданным общим количеством значащих цифр</td></tr>';
    str +='<tr><td>'+b+'</td><td>a.toString(2)</td><td>'+a.toString(2)+'</td><td>возвращает строковое представление числа в системе счисления с указанным основанием.</td></tr>';
    str +='</table>';
    tb.insertAdjacentHTML('beforeend',str);
}