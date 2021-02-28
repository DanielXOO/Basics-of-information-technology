function greet()
{
    alert('Добро пожаловать на наши курсы');
}

function greetName()
{
    let name = prompt('Введите имя');
    alert('Добро пожаловать на наши курсы, '+ name);
}

function question()
{
    if (confirm('Хотите стать Web-дизайнером?')) 
    {
        alert('Учите стили CSS и JavaScript!');
    } 
    else 
    {
        alert('Упускаете время!');
    }
}

function add()
{
    alert(10+5);
    alert('10'+'5');
    alert(22+'5');
    alert('22'+5);
    let answ = '10' + 5;
    alert('Результатом сложения строки и числа всегда будет '+ typeof(answ));
}

function exmp()
{
    const x = +prompt('Введите х');
    const y = +prompt('Введите y');
    const resOne = (64*x+87*y)* x;
    const resTwo = Math.abs(x - y) /2;
    document.write('<p>' + resOne + ' ' + resTwo + ' ' + resOne % resTwo + '</p>');
    alert(resOne + ' ' + resTwo + ' ' + resOne % resTwo);
}

function expr()
{
    const x = +prompt('Введите любое число: ');
    if ((x < 20 || x > 40) && x !== 15 && x % 5 === 0)
    {
        alert('Правильное значение');
    }
    else
    {
        alert('Неправильное значение');
    }
}

function cmp()
{
    const x = +prompt('Введите первое число x: ');
    const y = +prompt('Введите второе число y: ');
    if (x > y)
    {
        alert('x > y');
    }
    else if(x === y)
    {
        alert('x = y');
    }
    else
    {
        alert('x < y');
    }
}

function cmpSec()
{
    const x = +prompt('Введите первое число x: ');
    const y = +prompt('Введите второе число y: ');
    x > y ? alert('x > y') : alert('x <= y');
}

function week()
{
    const tday = new Date();
    switch (tday.getDay()) {
        case 0:
            alert('Воскресенье');
            break;
        case 1:
            alert('Понедельник');
            break;
        case 2:
            alert('Вторник');
            break;
        case 3:
            alert('Среда');   
            break;
        case 4:
            alert('Четверг');
            break;
        case 5:
            alert('Пятница'); 
            break;
        case 6:
            alert('Суббота');
            break;
    }
}

function warning()
{
    try {
        docuuuument.write('Hello!' + '<br>');
        //document.write('Hello!' + '<br>');
    }
    catch (Err){
        document.write('Ошибка! '  + Err );
    }
}