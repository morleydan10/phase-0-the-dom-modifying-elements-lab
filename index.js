// Write your code here!

// let element = document.createElement('div')

// document.body.append(div)

// let ul = document.createElement('ul');

// for (let i=0; i<3; i++) {
//     const li = document.createElement("li");
//     li.textContent = (i+1).toString();
//     ul.append(li);
// }

let main = document.getElementById('main');
main.remove();

let h1 = document.createElement ('h1');
document.body.appendChild(h1);

let newHeader = document.createElement('H1')
h1.appendChild(newHeader)

newHeader.id = "victory"

newHeader.textContent = "Dan Morley is the champion"

