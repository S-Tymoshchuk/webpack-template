import * as axios from "axios";

const btn = document.querySelector(".header__btn");
const titles = document.querySelectorAll('.section-features-row__items-head');
const images = document.querySelectorAll('.section-features-row__items-img');

const getElements = (data) => {

    let elements = [];
    for (let i = 0; i < 6; i++) {
        let rand = Math.floor(Math.random() * data.length);
        elements.push(data[rand]);
    }
    elements.map((el, id) => {
        return titles[id].innerHTML = el.title
    });
    elements.map((el, id) => {
        return images[id].innerHTML = `<img src="${el.thumbnailUrl}" alt="">`
    });

};

const getData = async () => {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/photos`);
    getElements(response.data);
};

btn.addEventListener('click', getData);

