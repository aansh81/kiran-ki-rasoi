const MENU_ITEMS = [
  {
    name: "Paneer Butter Masala",
    desc: "Creamy tomato gravy with soft paneer cubes.",
    price: "₹280",
    image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?q=80&w=800&auto=format&fit=crop"
  },

  {
    name: "Biryani by KG",
    desc: "Aromatic basmati rice cooked with secret spices.",
    price: "₹350",
    image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?q=80&w=800&auto=format&fit=crop"
  },

  {
    name: "Dal Makhani",
    desc: "Slow-cooked black lentils with butter and cream.",
    price: "₹240",
    image: "https://images.unsplash.com/photo-1585937421612-70a008356f36?q=80&w=800&auto=format&fit=crop"
  }
];

const menuContainer = document.getElementById("menu-container");

MENU_ITEMS.forEach(item => {

  const card = document.createElement("div");

  card.classList.add("card");

  card.innerHTML = `
  
    <img src="${item.image}" alt="${item.name}">
    
    <div class="card-content">
      <h3>${item.name}</h3>
      <p>${item.desc}</p>
      <h4>${item.price}</h4>
    </div>
  `;

  menuContainer.appendChild(card);

});
