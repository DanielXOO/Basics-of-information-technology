const lnk = document.getElementById(`right`);
let win = [];
function tsk1() {
    lnk.innerHTML = `
    <input type = "button" value = "Закрыть окно" onclick="closeWindow()"></input>
    <input type = "button" value = "Открыть окно" onclick="CreateWindow()"></input>
    <input type = "button" value = "Добавить текст" onclick="addText()"></input>
    `;
}

function addText() {
    let someTxt = prompt(`Введите текст который надо добавить в окно: `);
    let nameOfWin = prompt(`Введите имя окна: `);
    let aimInp = win.find(item => item.name == nameOfWin);
    aimInp.document.write(`<h2 style = "text-align: center">Имя: окна ${aimInp.name}</h2> <p>${someTxt}</p>`)
}

function CreateWindow() {
    let nameOfWin = prompt(`Введите имя окна: `);
    let tmp = window.open(`about`, nameOfWin, "width=700,height=400");
    tmp.document.write(``);
    win.push(tmp);

}

function closeWindow() {
    let nameOfWin = prompt(`Введите имя окна: `);
    let aimClose = win.find(item => item.name == nameOfWin);
    aimClose.close();
    win.splice(win.indexOf(aimClose), 1);
}

function tsk2() {
    let str = `
    <table>
    <tr><td>Браузер</td><td>${navigator.appCodeName} ${navigator.appName} ${navigator.appVersion}</td></tr>
    <tr><td>ОС </td><td>${navigator.platform}</td></tr>
    <tr><td>Включена ли Java </td><td>${navigator.javaEnabled()}</td></tr>
    <tr><td>Высота и ширина экрана </td><td>${screen.height}x${screen.width} </td></tr>
    <tr><td>Глубина цвета </td><td>${screen.colorDepth}</td> </tr>
    <tr><td>URL которые были посещены в данном браузере </td><td>${history.length}</td></tr>
    <tr><td>URL текущего документа </td><td>${document.URL}</td></tr>
    <tr><td>Путь к загруженному документу </td><td>${location.pathname}</td></tr>
    <tr><td>Имя домена и загруженного документа </td><td>${location.hostname} </td></tr>
    </table>`;
    lnk.innerHTML = str;
}