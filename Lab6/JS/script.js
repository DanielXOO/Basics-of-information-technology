function tsk1() {
    let element = document.all;
    for(let tmp of element)
    {
        console.log(tmp.tagName);
    }
}

function tsk2() {
    document.body.childNodes.forEach(item => {console.log(item.nodeType);});

}

function tsk3_1(){
    let element = document.all;
    for(let tmp of element)
    {
        if(tmp.tagName == `SPAN`)
        {
            console.log(tmp.textContent);
            break;
        }
    }
}

function tsk3_2(){
    const aim = document.querySelector(`span`);
    console.log(aim.textContent);
}

function tsk3_3(){
    const aim = document.getElementById(`ol`);
    console.log(aim.textContent);
}

function tsk4(){
    const marks = document.querySelectorAll('.mark');
    let avg = 0;
    for(let tmp of marks){
        avg += +tmp.textContent;
    }
    const aim = document.querySelectorAll(`span`)[1];
    aim.innerHTML = avg / marks.length;
}