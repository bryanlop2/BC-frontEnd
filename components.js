
const template = document.createElement('template');
template.innerHTML = `
<style>
:host {
    display: flex;
    overflow: hidden;
    padding: 10px;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
}
.image {
    flex: 0 0 auto;
    width: 160px;
    height: 160px;
    vertical-align: middle;
    border-radius: 50px;
    padding: 20px;
}
.imageTop {
    flex: 0 0 auto;
    width: 210px;
    height: 70px;
    vertical-align: middle;
    background-color: white;
}
.container {
    display: flex;
    align-items: center;
    flex-direction: column;
    border: 1px solid #d5d5d5;
    box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.1);
    border-radius: 3px;
    background-color: #201e1e;
    box-sizing: border-box;
    padding: 2px;
    width: 220px;
}
.container > .name {
    font-size: 20px;
    font-weight: 600;
    line-height: 1;
    margin: 0;
    margin-bottom: 5px;
    color: white;
}
.container > .position {
    background-color: red;
    color: white;
    font-size: 20px;
    font-weight: 600;
    line-height: 1;
    margin: 0;
    margin-bottom: 2px;
    padding: 10px 58px 10px 58px;
    }   
</style>
<div class="container">
    <img src="" class="imageTop">
    <img src="" class="image" id="image">
    <p class="name"></p>
    <h4 class="position"></h4>
</div>`

class UserCard extends HTMLElement {
    constructor(){
        super();

        this.attachShadow({ mode: 'open'})
        this.shadowRoot.appendChild(template.content.cloneNode(true));
        this.shadowRoot.querySelector('img').src =
        this.getAttribute('jala');
        this.shadowRoot.getElementById('image').src =
        this.getAttribute('image');
        this.shadowRoot.querySelector('p').innerText =
        this.getAttribute('name');
        this.shadowRoot.querySelector('h4').innerText =
        this.getAttribute('position');
    }
}

window.customElements.define('user-card', UserCard)