// import
import { cardRow } from "./function.js";

// loader
document.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
        hideLoader();
        showContent();
    }, 3000); 

    function hideLoader() {
        const loader = document.getElementById("loader");
        loader.style.display = "none";
    }

    function showContent() {
        const content = document.getElementById("content");
        content.style.display = "block";
    }
});

// declarations
const boxs = document.getElementById('boxs');
const regions = document.querySelectorAll('.region');
const dropDown = document.querySelector('#dropDownCon');
const dropElem = document.querySelector('.drop');
const countryName = document.querySelector('#countryName');
const toggle = document.getElementById('toggle');

// List Loading
document.addEventListener('DOMContentLoaded', function() {
    
    fetch("https://frontend-mentor-apis-6efy.onrender.com/countries")
    .then((res) => res.json())
    .then(data => {
        if (data.data.length) {
            data.data.forEach(country => {
                let card = cardRow(country);
                boxs.innerHTML += card;
            });
        } else {
            console.log('alik');
        }
    })
    .catch(err => {
        console.log(err);
    })
})

// Drop Down
dropDown.addEventListener('click', e => {
    dropElem.classList.toggle("showDropDown");
}) 

// region Filter
const regionName = document.getElementsByClassName('regionName');
regions.forEach(region => {
    region.addEventListener('click', e => {
        Array.from(regionName).forEach(element => {
            if (element.innerText.includes(region.innerText) || region.innerText === "All") {
                element.parentElement.parentElement.parentElement.style.display = "grid";
            } else {
                element.parentNode.parentNode.parentNode.style.display = "none";
            }
        })
    })
})

// search input
const name = document.getElementsByClassName('name');
countryName.addEventListener('input', function() {
    Array.from(name).forEach(elem => {
        if (elem.innerText.toLowerCase().includes(countryName.value.toLowerCase())) {
            elem.parentElement.parentElement.style.display = "grid";
        } else {
            elem.parentElement.parentElement.style.display = "none";
        }
    })
})
// refresh qilsa o'rniga qaytib qoladi "Dark mode";
toggle.addEventListener('click', () => {
    document.body.classList.toggle("dark");
    // document.body.classList.toggle('light')
})

// document.addEventListener('DOMContentLoaded', function() {
//     if (!document.body.classList.toggle('dark')) {
//         document.body.classList.toggle('dark')
//         console.log('salom');
//     } else {
//         document.body.classList.toggle('light')
//         console.log('alik');
//     }
//     // let light = localStorage.getItem('mode');
//     // document.body.classList.toggle('light');
// })