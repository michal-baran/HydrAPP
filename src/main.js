let addButton = document.querySelector('.add--js');
let subtractButton = document.querySelector('.subtract--js');

let value
let key = new Date().toLocaleString().slice(0, 10)

if (localStorage.getItem(key)==null) {
    localStorage.setItem(key,0)
    value=0
}

setInterval(() => {
    if(key!== new Date().toLocaleString().slice(0, 10)) {
        key = new Date().toLocaleString().slice(0, 10)
        localStorage.setItem(key,0)
        value = 0
    }
}, 1000)

value = parseInt(localStorage.getItem(key))

let count = document.querySelector('.count--js');
count.innerHTML = localStorage.getItem(key);



addButton.addEventListener('click', () => {
    value = value + 1
    localStorage.setItem(key, value)
    count.innerHTML = value
});

subtractButton.addEventListener('click', () => {
    if (value>0) {
     value = value -1
     localStorage.setItem(key, value)
    }
    count.innerHTML = value
});
