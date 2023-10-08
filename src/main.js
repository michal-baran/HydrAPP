let value
const key = new Date().toISOString().slice(0, 10)

if (localStorage.getItem(key)==null) {
    localStorage.setItem(key,0)
}

value = parseInt(localStorage.getItem(key))

let count = document.querySelector('.count--js');
count.innerHTML = localStorage.getItem(key);

const addButton = document.querySelector('.add--js');
const subtractButton = document.querySelector('.subtract--js');

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
