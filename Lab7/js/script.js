function tsk1(){
    const win = window.open(`about::blank`, "Windows", "width=700,height=400");
    let str = `<h2 style = "text-align: center">Имя: окна ${win.name}</h2>`
    str += `<input type = "button" value = "Закрыть окно" onclick="window.close()">`
    win.document.write(str);
}

function tsk2(){
    let str = `
    <table>
    <tr>Браузер: ${navigator.appCodeName} ${navigator.appName} ${navigator.appVersion}</tr>
    <tr>ОС: ${navigator.platform}</tr>
    <tr>Включена ли Java: ${navigator.javaEnabled()} </br>
    Высота и ширина экрана: ${screen.height}x${screen.width} </br>
    Глубина цвета: ${screen.colorDepth} </br>
    URL которые были посещены в данном браузере: ${history.length}</br>
    URL текущего документа: ${document.URL}</br>
    Путь к загруженному документу: ${location.href}</br>
    Имя домена и загруженного документа: ${location.hostname} </br>
    </table>`
    const lnk = document.getElementById(`right`);
    lnk.innerHTML = str;
}