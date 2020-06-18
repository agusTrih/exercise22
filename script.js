let fruits = [
    {
        image: "./img/fruits1.jpg",
        name: "Sawo",
        latinName: "Manilkara kauki",
        seed: "Dikotil",
    },
    {
        image: "./img/fruits4.jpg",
        name: "Apel",
        latinName: "Malus sylvestris",
        seed: "Dikotil",
    },
    {
        image: "./img/fruits6.jpg",
        name: "Srikaya",
        latinName: "Annona squamosa",
        seed: "Monokotil",
    },
    {
        image: "./img/fruits5.jpg",
        name: "Mangga",
        latinName: "Magnifera indica",
        seed: "Dikotil",
    },
    {
        image: "./img/fruits6.jpg",
        name: "Durian",
        latinName: "Durio Zibethinus",
        seed: "Dikotil",
    },
    {
        image: "./img/fruits5.jpg",
        name: "Duku",
        latinName: "lansium domesticum",
        seed: "Dikotil",
    },
    {
        image: "./img/fruits4.jpg",
        name: "Nangka",
        latinName: "Artocarpus heterophyllus",
        seed: "Dikotil",
    },
    {
        image: "./img/fruits1.jpg",
        name: "Delima",
        latinName: "Punica granatum",
        seed: "Dikotil",
    },
    {
        image: "./img/fruits4.jpg",
        name: "Tomat",
        latinName: "Solanum Iycopersicum",
        seed: "Dikotil",
    },
    {
        image: "./img/fruits1.jpg",
        name: "Salak",
        latinName: "Salacca zalacca",
        seed: "Monokotil",
    },
    {
        image: "./img/fruits6.jpg",
        name: "Semangka",
        latinName: "Citrullus lanatus",
        seed: "Monokotil",
    },
    {
        image: "./img/fruits5.jpg",
        name: "Pisang",
        latinName: "Musa paradisiaca",
        seed: "Monokotil",
    },
];
let container = document.querySelector(".container");
let display = () => {
    fruits.forEach((fruit) => {
        let card = document.createElement("div");
        card.setAttribute("class", "card");
        card.innerHTML = `
            
                <div class="image-div" style="width: 250px">
                    <img src="${fruit.image}" alt="fruit-image" style="width:100%">
                </div>
                <div class="text">
                    <h4><b>${fruit.name}</b></h4>
                    <p>${fruit.latinName}</p>
                    <p>${fruit.seed}</p> 
                </div>
            `;
        container.appendChild(card);
    });
};
display();
