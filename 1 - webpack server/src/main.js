import api from "./api";

class App {
  constructor() {
    this.repositories = [];
    this.formElement = document.querySelector("form#repo-form");
    this.inputElement = document.querySelector("input[name=repository]");
    this.ulElement = document.querySelector("ul#repo-list");
    this.registerHandlers();
  }
  registerHandlers(event) {
    this.formElement.onsubmit = event => this.addRepositories(event);
  }

  loading(loading = true) {
    if (loading === true) {
      let loadingElement = document.createElement("span");
      loadingElement.appendChild(document.createTextNode("Buscando..."));
      loadingElement.setAttribute("id", "loading");

      this.formElement.appendChild(loadingElement);
    } else {
      document.querySelector("span#loading").remove();
    }
  }

  async addRepositories(event) {
    event.preventDefault();

    const repoInput = this.inputElement.value;
    if (repoInput.length === 0) {
      return;
    }

    this.loading();

    try {
      const response = await api.get(`/repos/${repoInput}`);

      console.log(response);

      const {
        name,
        description,
        html_url,
        owner: { avatar_url }
      } = response.data;
      this.repositories.push({
        name,
        description,
        avatar_url,
        html_url
      });

      this.inputElement.value = "";

      this.render();
    } catch (erro) {
      alert(`O repositório ${this.inputElement.value} não existe: ${erro}`);
    }
    this.loading(false);
  }
  render() {
    this.ulElement.innerHTML = "";
    this.repositories.forEach(repo => {
      let imgElement = document.createElement("img");
      imgElement.setAttribute("src", repo.avatar_url);

      let titleElement = document.createElement("strong");
      titleElement.appendChild(document.createTextNode(repo.name));

      let descriptionElement = document.createElement("p");
      descriptionElement.appendChild(document.createTextNode(repo.description));

      let linkElement = document.createElement("a");
      linkElement.setAttribute("target", "_blank");
      linkElement.setAttribute("href", repo.html_url);
      linkElement.appendChild(document.createTextNode("Acessar"));

      let liElement = document.createElement("li");
      liElement.appendChild(imgElement);
      liElement.appendChild(titleElement);
      liElement.appendChild(descriptionElement);
      liElement.appendChild(linkElement);

      this.ulElement.appendChild(liElement);
    });
  }
}

new App();
