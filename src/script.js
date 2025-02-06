function generateExcuse() {
    let who = ['The dog', 'My grandma', 'The mailman', 'My bird', 'A random stranger'];
    let action = ['ate', 'peed on', 'crushed', 'broke', 'stole'];
    let what = ['my homework', 'my phone', 'the car', 'my shoes', 'my sandwich'];
    let when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];

    let excuse = `${who[Math.floor(Math.random() * who.length)]} 
                  ${action[Math.floor(Math.random() * action.length)]} 
                  ${what[Math.floor(Math.random() * what.length)]} 
                  ${when[Math.floor(Math.random() * when.length)]}.`;

    document.getElementById("excuse").innerHTML = excuse;
}

// Genera una excusa automáticamente al cargar la página
window.onload = generateExcuse;
