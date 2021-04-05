function tsk1(){
    const win = window.open(`about::blank`, "Windows", "width=700,height=400");
    let str = `<h2 style = "text-align: center">Имя: окна ${win.name}</h2>`
    str += `<input type = "button" value = "Закрыть окно" onclick="window.close()">`
    win.document.write(str);
}

function tsk2(){
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
    const lnk = document.getElementById(`right`);
    lnk.innerHTML = str;
}