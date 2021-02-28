function tablMult()
{
    let a = +prompt('Введите число а');
    let b = +prompt('Введите число b');
    let tb = document.getElementById('multiply');
    let str='<table>';
    for(let i = 1; i <= b; i++)
    {
        str+='<tr>';
        for(let j = 1; j <= a; j++)
        {
            str+='<td>'+i *j+'</td>';
        }
        str+='</tr>'
        
    }
    str+='</table>'
    tb.insertAdjacentHTML('beforeend',str);
}
