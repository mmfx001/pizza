let wrapper = document.querySelector(".wrapper");
import data from "./mook.js";
let narx = document.querySelector('.narx');
let basket = JSON.parse(localStorage.getItem('datas')) || [];
let n = JSON.parse(localStorage.getItem('n')) || [];
const readdata = (data) => {
    n.forEach((v) => {
        let card = document.createElement('div');
        card.innerHTML = `
                  <img src="${v.img}" alt="">
            <p>${v.name}</p>
            <div class="tp">
                <button class="cm20" type="button">20cm</button>
                <button class="cm30" type="button">30cm</button>
                <button class="cm40" type="button">40cm</button>
            </div>
            <div class="ps">
                <p class="pricee">от ${v.price} ₽</p>
                <button type="button" class="sotbolish">+ Добавить <p class="som">0</p></button>
            </div>
        `;

        card.querySelector('.sotbolish').addEventListener('click', () => {
            addToBasket(v, card);
        });

        card.querySelector('.cm20').addEventListener('click', () => {
            v.price = 400;
            card.querySelector('.pricee').textContent = `от ${v.price} ₽`;
        });

        card.querySelector('.cm30').addEventListener('click', () => {
            v.price += 50;
            card.querySelector('.pricee').textContent = `от ${v.price} ₽`;
        });

        card.querySelector('.cm40').addEventListener('click', () => {
            v.price += 100;
            card.querySelector('.pricee').textContent = `от ${v.price} ₽`;
        });

        let sonm = document.querySelector('.sonm');
        let som = document.querySelector('.som');

        card.querySelector('.sotbolish').addEventListener('click', () => {
            let son = parseInt(sonm.innerHTML);
            son += 1;
            sonm.innerHTML = son;

            let soni = parseInt(card.querySelector('.som').innerHTML);
            soni += 1;
            card.querySelector('.som').innerHTML = soni;

            basket.push(v)

            localStorage.setItem('datas', JSON.stringify(basket));
        });
        wrapper.appendChild(card);


        const addToBasket = (product, card) => {
            let total = parseInt(narx.innerHTML) || 0;
            total += product.price;
            narx.innerHTML = total;
        };
    });
};


readdata();

const readcard = (data) => {
    data.forEach((v) => {
        const card = document.createElement('div');
        card.classList.add('product-card');
        card.innerHTML = `
            <img src="${v.img}" alt="">
            <p>${v.name}</p>
            <div class="tp">
                <button class="cm20" type="button">20cm</button>
                <button class="cm30" type="button">30cm</button>
                <button class="cm40" type="button">40cm</button>
            </div>
            <div class="ps">
                <p class="pricee">от ${v.price} ₽</p>
                <button type="button" class="sotbolish">+ Добавить <p class="som">0</p></button>
            </div>
        `;



        card.querySelector('.sotbolish').addEventListener('click', () => {
            addToBasket(v, card);
        });

        card.querySelector('.cm20').addEventListener('click', () => {
            v.price = 400;
            card.querySelector('.pricee').textContent = `от ${v.price} ₽`;
        });

        card.querySelector('.cm30').addEventListener('click', () => {
            v.price += 50;
            card.querySelector('.pricee').textContent = `от ${v.price} ₽`;
        });

        card.querySelector('.cm40').addEventListener('click', () => {
            v.price += 100;
            card.querySelector('.pricee').textContent = `от ${v.price} ₽`;
        });

        let sonm = document.querySelector('.sonm');
        let som = document.querySelector('.som');

        card.querySelector('.sotbolish').addEventListener('click', () => {
            let son = parseInt(sonm.innerHTML);
            son += 1;
            sonm.innerHTML = son;

            let soni = parseInt(card.querySelector('.som').innerHTML);
            soni += 1;
            card.querySelector('.som').innerHTML = soni;

            basket.push(v)

            localStorage.setItem('datas', JSON.stringify(basket));
        });
        wrapper.appendChild(card);

    });
};

const addToBasket = (product, card) => {
    let total = parseInt(narx.innerHTML) || 0;
    total += product.price;
    narx.innerHTML = total;
};

readcard(data.All);


let btn_meat = document.querySelector('.btn_meat');
let btn_all = document.querySelector('.btn_all');
let btn_achiq = document.querySelector('.btn_achiq');
let btn_tavuq = document.querySelector('.btn_tavuq');
let btn_goshtz = document.querySelector('.btn_goshtz');
let btn_yopiq = document.querySelector('.btn_yopiq');

btn_meat.addEventListener('click', () => {
    wrapper.innerHTML = '';
    readcard(data.Meat);
});

btn_tavuq.addEventListener('click', () => {
    wrapper.innerHTML = '';
    readcard(data.Gril);
});

btn_achiq.addEventListener('click', () => {
    wrapper.innerHTML = '';
    readcard(data.All);
});

btn_goshtz.addEventListener('click', () => {
    wrapper.innerHTML = '';
    readcard(data.Vigtails);
});

btn_yopiq.addEventListener('click', () => {
    wrapper.innerHTML = '';
    readcard(data.Close);
});

btn_all.addEventListener('click', () => {
    wrapper.innerHTML = '';
    readcard(data.All);
});

