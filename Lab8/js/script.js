let resCheck = [];
let result;

function accept(){
    let form = document.forms.anketa;
    result = `<h2 style = "text-decoration: underline; text-align: center;">${form.faculty.value}</h2>`
    result += `<p>Студент ${form.firstname.value} ${form.lastname.value} специальность ${form.spec.value} курс ${form.grade.value} должен сдавать следующие предметы:</p>`;
    console.log(form.sbj);
    form.sbj.forEach(item => {item.checked ? resCheck.push( item.value ): ``});
    result += `<ul>`;
    for(let tmp of resCheck){
        result += `<li>${tmp}</li>`;
    }
    result += `</ul>`;
    
}

function printer(){
    accept();
    document.write(result);
    window.print();
}

function newForm(){
    accept();
    let str = `<form name="newAnketa" action="/"><select>`;
    for(let tmp of resCheck){
        str += `<option value="${tmp}">${tmp}</option>`;
    }
    str += `</select></form>`;
    let win = open(`about`, `windows`, "width=700,height=400");;
    win.document.write(str);

}