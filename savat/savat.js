let wrapper = document.querySelector('.wrapper');
let basket = JSON.parse(localStorage.getItem('datas')) || []; 


const readdata = () => {
    basket.map((v) => {
        let card = document.createElement('div');
        card.innerHTML = `
            <img src="${v.img}" alt="">
            <p>${v.name}</p>
                    <p class="pricee">от ${v.price} ₽</p>

            <div class="tp"> 

                <div class="ps">
                    <button class="btu1" type="button">haridni bekor qilish!</button>

                </div>
            </div>
        `;

        wrapper.appendChild(card);
     
        let deleteButton = card.querySelector('.btu1');
        deleteButton.addEventListener('click', () => {
            card.remove();

            let index = basket.findIndex(item => item.img === v.img && item.name === v.name && item.price === v.price);
            if (index !== -1) {
                basket.splice(index, 1);
                localStorage.setItem('datas', JSON.stringify(basket));
            }
        });

    });
};

readdata();
