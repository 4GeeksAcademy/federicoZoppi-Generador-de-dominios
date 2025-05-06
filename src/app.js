import "bootstrap";
import "./style.css";
import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";


window.onload = () => {
  let pronouns = ['the', 'our'];
  let adjectives = ['great', 'big'];
  let nouns = ['jogger', 'racoon'];
  let domains = [".com", ".es"]
  let allDomain = []

  for (let pronoun of pronouns) {
    for (let adjective of adjectives) {
      for (let noun of nouns) {
        for (let domain of domains) {
          allDomain.push(`${pronoun}${adjective}${noun}${domain}`);
        }
      }
    }
  }
  
  let domainList = document.getElementById('domain-list');

  domainList.style.listStyle = "none";
  domainList.style.textAlign = "center";

  domainList.innerHTML = allDomain.map(domain => `<li>${domain}</li>`).join('');
};
