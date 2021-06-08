const reviews = [
  {
    id: 1,
    name: "Johann Ranudd",
    job: "web developer",
    img: "http://www.mandysam.com/img/random.jpg",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus quod sapiente nostrum tempora numquam voluptatem ipsum maxime nam beatae porro!",
  },
  {
    id: 2,
    name: "Sara Jones",
    job: "web developer",
    img: "http://www.mandysam.com/img/random.jpg",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus quod sapiente nostrum tempora numquam voluptatem ipsum maxime nam beatae porro!",
  },
  {
    id: 3,
    name: "Claus von schmekkel",
    job: "deb melevopper",
    img: "http://www.mandysam.com/img/random.jpg",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus quod sapiente nostrum tempora numquam voluptatem ipsum maxime nam beatae porro!",
  },
];

let changeName = reviews[2].name;

let author = document.querySelector('#author');
let job = document.querySelector('#job');

author.innerHTML = reviews[2].name;
job.innerHTML = reviews[2].job;
