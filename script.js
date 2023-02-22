const data = JSON.parse(datainfo);

console.log(data)

    
data.forEach(element => {

const contentEl =document.createElement('div');
const content = document.querySelector('.content');
const image = document.querySelector('img'); 
const setup = document.querySelector('p');
const punchline = document.querySelector('p');
const id = document.querySelector('h1');

image.src= element.image;
setup.textContent = element.setup;
punchline.textContent= element.punchline;
id.textContent= element.id;

content.appendChild(contentEl);
contentEl.appendChild(id);
contentEl.appendChild(setup);
contentEl.appendChild(punchline);
contentEl.appendChild(image);
});