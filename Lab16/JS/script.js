let DOM;

function getFile() {
    let selectedFile = $('#files').val().replace(`C:\\fakepath\\`, '');
    let xml = new XMLHttpRequest();
    xml.open("GET", selectedFile, false);
    xml.send();
    DOM = xml.responseXML;
    let chooser = ` `;
    $(DOM).find(`student`).each(element => {
        chooser += `<p><input name = "pupil" type="radio" 
        value="${element}">${element + 1}</p>`
    });
    $(`#choose`).html(chooser);
}

$(`#choose`).change(() => {
    let pupil = $(`input[name = pupil]:checked`).val();
    let resStr = `
    <b>Фамилия:</b> ${$(DOM).find(`surname`).get(pupil).innerHTML} <br>
    <b>Имя:</b> ${$(DOM).find(`name`).get(pupil).innerHTML} <br>
    <b>Cпециальность:</b> ${$(DOM).find(`spec`).get(pupil).innerHTML} <br>
    <b>Группа:</b> ${$(DOM).find(`group`).get(pupil).innerHTML}
    `;
    $(`#info`).html(resStr);
    $(`#info`).css(`border`, `1px black solid`);
})