/*document.getElementsByTagName('body')[0].innerHTML = "Más";*/

function Összeadás(a : number, b : number) : number {
    return a + b;
}

function Számol() {
    let a = Number((document.getElementById('a') as HTMLInputElement)?.value);
    let b = Number((document.getElementById('b') as HTMLInputElement)?.value);
    let c = Összeadás(a , b);

    (document.getElementById('c') as HTMLInputElement).value = c.toString();
}

document.getElementById("számol")?.addEventListener("click", Számol);