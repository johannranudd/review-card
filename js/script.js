// const reviews = [
//   {
//     id: 1,
//     name: "Johann Ranudd",
//     job: "blagablag",
//     img: "http://www.mandysam.com/img/random.jpg",
//     text: "0 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus quod sapiente nostrum tempora numquam voluptatem ipsum maxime nam beatae porro!",
//   },
//   {
//     id: 2,
//     name: "Sara Jones",
//     job: "glo glop",
//     img: "https://images.ctfassets.net/hrltx12pl8hq/7yQR5uJhwEkRfjwMFJ7bUK/dc52a0913e8ff8b5c276177890eb0129/offset_comp_772626-opt.jpg?fit=fill&w=800&h=300",
//     text: "1 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus quod sapiente nostrum tempora numquam voluptatem ipsum maxime nam beatae porro!",
//   },
//   {
//     id: 3,
//     name: "Claus von schmekkel",
//     job: "deb melevopper",
//     img: "https://www.pixsy.com/wp-content/uploads/2021/04/ben-sweet-2LowviVHZ-E-unsplash-1.jpeg",
//     text: "2 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus quod sapiente nostrum tempora numquam voluptatem ipsum maxime nam beatae porro!",
//   },
// ];

// seclect items
// const img = document.querySelector("#person-img");
// const author = document.querySelector("#author");
// const job = document.querySelector("#job");
// const info = document.querySelector("#info");

// const prevBtn = document.querySelector(".prev-btn");
// const nextBtn = document.querySelector(".next-btn");
// const randomBtn = document.querySelector(".random-btn");

// set starting item

// let currentItem = 0;

// // load initial item
// window.addEventListener("DOMContentLoaded", function () {
//   showPerson(currentItem);
// });

// // show person based on item

// function showPerson(person) {
//   const item = reviews[person];
//   img.src = item.img;
//   author.textContent = item.name;
//   job.textContent = item.job;
//   info.textContent = item.text;
// }

// // show next person

// nextBtn.addEventListener("click", function () {
//   currentItem++;
//   if (currentItem > reviews.length - 1) {
//     currentItem = 0;
//   }
//   showPerson(currentItem);
// });

// // show prev person

// prevBtn.addEventListener("click", function () {
//   currentItem--;
//   if (currentItem < 0) {
//     currentItem = reviews.length - 1;
//   }
//   showPerson(currentItem);
// });

// // show random person
// randomBtn.addEventListener('click', function () {
//     currentItem = Math.floor(Math.random() * reviews.length);
//     showPerson(currentItem);
// });







// const reviews = [
//     {
//       id: 1,
//       name: "Johann Ranudd",
//       job: "blagablag",
//       img: "http://www.mandysam.com/img/random.jpg",
//       text: "0 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus quod sapiente nostrum tempora numquam voluptatem ipsum maxime nam beatae porro!",
//     },
//     {
//       id: 2,
//       name: "Sara Jones",
//       job: "glo glop",
//       img: "https://images.ctfassets.net/hrltx12pl8hq/7yQR5uJhwEkRfjwMFJ7bUK/dc52a0913e8ff8b5c276177890eb0129/offset_comp_772626-opt.jpg?fit=fill&w=800&h=300",
//       text: "1 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus quod sapiente nostrum tempora numquam voluptatem ipsum maxime nam beatae porro!",
//     },
//     {
//       id: 3,
//       name: "Claus von schmekkel",
//       job: "deb melevopper",
//       img: "https://www.pixsy.com/wp-content/uploads/2021/04/ben-sweet-2LowviVHZ-E-unsplash-1.jpeg",
//       text: "2 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus quod sapiente nostrum tempora numquam voluptatem ipsum maxime nam beatae porro!",
//     },
//   ];


// const img = document.querySelector("#person-img");
// const author = document.querySelector("#author");
// const job = document.querySelector("#job");
// const info = document.querySelector("#info");

// const prevBtn = document.querySelector(".prev-btn");
// const nextBtn = document.querySelector(".next-btn");
// const randomBtn = document.querySelector(".random-btn");


// let currentNumber = 0;


// window.addEventListener('DOMContentLoaded', function () {
//     showPerson(currentNumber);
// });

// function showPerson(person) {
//     let item = reviews[person];
//     img.src = item.img;
//     author.textContent = item.name;
//     job.textContent = item.job;
//     info.textContent = item.text;
// };

// nextBtn.addEventListener('click', function() {
//     currentNumber++;
//     if (currentNumber > reviews.length - 1) {
//         currentNumber = 0;
//     }
//     showPerson(currentNumber);
// });


// prevBtn.addEventListener('click', function() {
//     currentNumber--;
//     if (currentNumber < 0) {
//         currentNumber = reviews.length - 1;
//     }
//     showPerson(currentNumber);
// });


// randomBtn.addEventListener('click', function() {
//     currentNumber = Math.floor(Math.random() * reviews.length);
//     console.log(currentNumber);
//     showPerson(currentNumber);
// })









const reviews = [
    {
      id: 1,
      name: "Johann Ranudd",
      job: "blagablag",
      img: "http://www.mandysam.com/img/random.jpg",
      text: "0 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus quod sapiente nostrum tempora numquam voluptatem ipsum maxime nam beatae porro!",
    },
    {
      id: 2,
      name: "Sara Jones",
      job: "glo glop",
      img: "https://images.ctfassets.net/hrltx12pl8hq/7yQR5uJhwEkRfjwMFJ7bUK/dc52a0913e8ff8b5c276177890eb0129/offset_comp_772626-opt.jpg?fit=fill&w=800&h=300",
      text: "1 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus quod sapiente nostrum tempora numquam voluptatem ipsum maxime nam beatae porro!",
    },
    {
      id: 3,
      name: "Claus von schmekkel",
      job: "deb melevopper",
      img: "https://www.pixsy.com/wp-content/uploads/2021/04/ben-sweet-2LowviVHZ-E-unsplash-1.jpeg",
      text: "2 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus quod sapiente nostrum tempora numquam voluptatem ipsum maxime nam beatae porro!",
    },
  ];


const img = document.querySelector("#person-img");
const author = document.querySelector("#author");
const job = document.querySelector("#job");
const info = document.querySelector("#info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");


let currentItem = 0;

window.addEventListener('DOMContentLoaded', function() {
    selectPerson(currentItem);
});

function selectPerson(person) {
    let item = reviews[person];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
}

nextBtn.addEventListener('click', function() {
    currentItem++;
    if (currentItem > reviews.length - 1) {
        currentItem = 0;
    }
    console.log(currentItem);
    selectPerson(currentItem);
});


prevBtn.addEventListener('click', function() {
    currentItem--;
    if (currentItem < 0) {
        currentItem = reviews.length - 1;
    }
    console.log(currentItem);
    selectPerson(currentItem);
});

randomBtn.addEventListener('click', function () {
    currentItem = Math.floor(Math.random() * reviews.length);
    selectPerson(currentItem);
});


























