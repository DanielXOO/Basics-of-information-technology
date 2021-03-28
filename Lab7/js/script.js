function tsk1(){
    let win = window.open(`TEST/index.html`, "HELLO", "width=700,height=400");
    let lnk = win.window.document.getElementById(`Area`);
    lnk.insertAdjacentHTML("beforeend",`hi`);
}