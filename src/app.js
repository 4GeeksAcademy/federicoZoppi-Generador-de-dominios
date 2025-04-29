import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let pronoun = ['the', 'our'];
let adj = ['great', 'big'];
let noun = ['jogger', 'racoon'];
let domain = [".com", ".es"]

let allDomain = []

for (let p = 0; p < pronoun.length; p++) {
  for (let a = 0; a < adj.length; a++) {
    for (let n = 0; n < noun.length; n++) {
      for (let f = 0; f < domain.length; f++) {
        // allDomain = tengo que agregar el dominio en el array 
        allDomain.push(pronoun[p] + adj[a] + noun[n] + domain[f]);
      }
    }
  }
}
window.onload = () => {
  let domainList = document.getElementById('domain-list');

  domainList.style.listStyle = "none";
  domainList.style.textAlign = "center";

  domainList.innerHTML = allDomain.map(domain => `<li>${domain}</li>`).join('');
};
