let wrapper = document.querySelector('.wrapper');
let wrapperr = document.querySelector('.wrapperr');
import data from "../mook.js";

let n = JSON.parse(localStorage.getItem('n')) || [];

let cardfood = (items) => {
    items.forEach((v) => {
        const card = document.createElement('div');
        card.classList.add('food-card'); 
        card.innerHTML = `
            <img src="${v.img}" alt="">
            <p>${v.name}</p>
            <p>Narxi: ${v.price} ₽</p>
            <button class="btu1" type="button">Olib tashlash</button>
        `;

        let deleteButton = card.querySelector('.btu1');
        deleteButton.addEventListener('click', () => {
            card.remove();

            let index = n.findIndex(item => item.img === v.img && item.ismi === v.ismi && item.narx === v.narx);
            if (index !== -1) {
                n.splice(index, 1);
                localStorage.setItem('n', JSON.stringify(n));
            }
        });

        wrapperr.appendChild(card);
    });
};

let btn = document.querySelector('.tb');
btn.addEventListener('click', () => {
    let newObj = {
        img: document.querySelector('.url').value,
        name: document.querySelector('.ismi').value,
        price:Number(document.querySelector('.narx').value) ,
    };


        n.push(newObj);
        localStorage.setItem('n', JSON.stringify(n));

        cardfood([newObj]);
 
});

cardfood(n);

