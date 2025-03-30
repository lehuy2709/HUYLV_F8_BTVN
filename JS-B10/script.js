/* render menu and click dropdown menu */
const header = document.querySelector('.side-bar__header')
const sidebarValue = [
    { value: "Menu", icon: "" },
    { value: "Quản Lý Đơn Hàng", icon: "mdi mdi-account" },
    {
        value: "Quản Lý Xe", icon: "mdi mdi-account", iconDown: "mdi mdi-chevron-down", childrens: [{
            value: "Quản Lý Xe Máy", icon: "mdi mdi-account"
        },
        {
            value: "Quản Xe Hơi", icon: "mdi mdi-account"
        }]
    },
    { value: "Quản Lý Dịch Vụ", icon: "mdi mdi-account" },
    { value: "Cài Đặt Khác", icon: "mdi mdi-account" },

]

let valueChange = sidebarValue.map((item) => {
    if (item.childrens) {
        let childrenElement = item.childrens.map(child => `
            <div class="side-bar__item__child_item">
                <span class="${child.icon}"></span>
                <span>${child.value}</span>
            </div>
        `).join('');

        return `
        <div class="side-bar__item">
            <div>
                <label for="toggle">
                    <span class="${item.icon}"></span>
                    <span>${item.value}</span>
                </label>
                <span class="${item.iconDown}"></span>
            </div>
            <div>
                <div class="side-bar__item__child">
                    ${childrenElement}
                </div>
            </div>
        </div>
        `;
    } else {
        return `
        <div class="side-bar__item">
            <span class="${item.icon}"></span>
            <span>${item.value}</span>
        </div>
        `;
    }

})

header.insertAdjacentHTML("afterend", valueChange.join(''));

const dropItem = document.querySelector('.side-bar__item:nth-of-type(3)');
const childMenu = dropItem.querySelector('.side-bar__item__child');

dropItem.addEventListener("click", () => {
    if (childMenu.style.display === "none" || childMenu.style.display === "") {
        childMenu.style.display = "block";
    } else {
        childMenu.style.display = "none";
    }
});


/* table and click edit */

const members = [{
    id: 1,
    name: "Cristiano Ronaldo",
    mail: "exam@hotmail.com"
}, {
    id: 2,
    name: "Leo Messi",
    mail: "exam@hotmail.com"
}, {
    id: 3,
    name: "Kilian Mbappe",
    mail: "exam@hotmail.com"
}]
const keys = Object.keys(members[0])
const result = members.map(member => {
    return `
    <div class="table-body">
        ${keys.map(key => `<div class="table-body__cell">${member[key]}</div>`).join('')}
        <div class="table-body__cell">
            <label class="edit-btn" for="show-modal">
                <span class="mdi mdi-pencil"></span>
                edit
            </label>
            <label class="del-btn" for="show-modal-del">
                <span class="mdi mdi-trash-can-outline"></span>
                delete
            </label>
        </div>
    </div>`;
}).join('')

const tableHeader = document.querySelector('.table-header')
tableHeader.insertAdjacentHTML("afterend", result);

const btnEdits = document.querySelectorAll('.edit-btn')
const modal = document.querySelector('.modal')
const overlay = document.querySelector('.overlay')
const btnCloses = document.querySelectorAll('.btn-secondary')
const iconCloses = document.querySelectorAll('.mdi-close')

const openModal = () => {
    modal.classList.add('active');
    overlay.classList.add('active');
}

const closeModal = () => {
    modal.classList.remove('active');
    overlay.classList.remove('active');
}

btnEdits.forEach(btn => {
    btn.addEventListener('click', openModal);
});

btnCloses.forEach(btn => {
    btn.addEventListener('click', closeModal);
});
iconCloses.forEach(btn => {
    btn.addEventListener('click', closeModal);
});

overlay.addEventListener('click', closeModal);





