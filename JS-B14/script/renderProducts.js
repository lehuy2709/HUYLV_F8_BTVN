export const renderProducts = (item) => {
    return ` <div class="card-product">
                <div class="img">
                    <img src="${item.image}" alt="Image Laptop">
                </div>
                <div class="product-name mag-bot--32px ">
                    <h3>${item.title}</h3>
                </div>
                <div class="product-size mag-bot--10px">
                    <span class="size">16GB</span>
                    <span class="size">512GB </span>
                    <span class="size">15.6 inches</span>
                </div>
                <div class="product-price mag-bot--10px">
                    <span class="new-price text-red f-weight--700 f-size--20">${item.price}</span>
                    <span class="old-price text-grey f-weight--600 f-size--16">${item.price}</span>
                </div>
                <div class="adsement">
                    <p class="f-size--13 mag-bot--10px">Giá SMem cho bạn <span
                            class="f-size--16 text-red f-weight--700 pad-left--4px">13.920.000đ</span></p>
                    <p class="f-size--13 mag-bot--10px">S-Student giảm thêm đến<span
                            class="f-size--16 text-red f-weight--700 pad-left--4px">400.000đ</span></p>
                </div>
                <div class="introduction mag-bot--10px">
                    <p class="f-size--12 d-webkit-box">
                    ${item.description}
                    </p>
                </div>
                <div class="product-bottom d-flex">
                    <div class="rate">
                        <i class="bi bi-star-fill text-orange"></i>
                        <i class="bi bi-star-fill text-orange"></i>
                        <i class="bi bi-star-fill text-orange"></i>
                        <i class="bi bi-star-fill text-orange"></i>
                        <i class="bi bi-star-fill text-orange"></i>
                    </div>
                    <div class="wish-list">
                        <span class="text-grey f-size--14">Yêu thích</span>
                        <i class="text-red f-weight--600 bi bi-heart"></i>
                    </div>
                </div>
            </div>`
}