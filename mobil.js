const mobiles = [
  {
    name: "iPhone 15 Pro",
    price: "₹1,35,900",
    image: "https://cdn1.smartprix.com/rx-iHbVjGgm6-w420-h420/apple-iphone-15-pro.webp",
    features: ["A17 Pro Chip", "48MP Camera", "6.1-inch OLED Display"]
  },
  {
    name: "iPhone 15",
    price: "₹79,900",
    image: "https://cdn1.smartprix.com/rx-iBzbDITOc-w420-h420/apple-iphone-15-plus.webp",
    features: ["A16 Bionic Chip", "48MP Camera", "6.1-inch Super Retina Display"]
  },
  {
    name: "iPhone 14",
    price: "₹59,999",
    image: "https://cdn1.smartprix.com/rx-iVyp4t2Vm-w420-h420/apple-iphone-14.webp",
    features: ["A15 Bionic Chip", "12MP Dual Camera", "6.1-inch OLED Display"]
  },
  {
    name: "Samsung Galaxy S24 Ultra",
    price: "₹1,20,000",
    image: "https://in.static.webuy.com/product_images/Phones/Phones%20Android/SSAMS928B256GTGUNLC_l.jpg",
    features: ["Snapdragon 8 Gen 3", "200MP Camera", "6.8-inch AMOLED Display"]
  },
  {
    name: "Samsung Galaxy S23 Ultra",
    price: "₹99,999",
    image: "https://in.static.webuy.com/product_images/Phones/Phones%20Android/SSAMS918BD256GGUNLC_l.jpg",
    features: ["Snapdragon 8 Gen 2", "200MP Camera", "5000mAh Battery"]
  },
  {
    name: "Samsung Galaxy A55",
    price: "₹38,999",
    image: "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-a55.jpg",
    features: ["Exynos 1480", "50MP OIS Camera", "6.6-inch AMOLED"]
  },
  {
    name: "OnePlus 12",
    price: "₹65,000",
    image: "https://rukminim2.flixcart.com/image/480/560/xif0q/icons/original-MOBGXGT7PSGVUGZS_1.jpeg?q=90",
    features: ["Snapdragon 8 Gen 3", "50MP Triple Camera", "5000mAh Battery"]
  },
  {
    name: "OnePlus 12R",
    price: "₹39,999",
    image: "https://cdn.shopify.com/s/files/1/1203/6172/files/shopping_6.webp?v=1736770949",
    features: ["Snapdragon 8 Gen 2", "50MP Camera", "5500mAh Battery"]
  },
  {
    name: "OnePlus Nord CE 4",
    price: "₹22,999",
    image: "https://rukminim2.flixcart.com/image/480/640/xif0q/mobile/3/4/z/nord-ce4-cph2613-oneplus-original-imagzndezhkyguyn.jpeg?q=90",
    features: ["Snapdragon 7 Gen 3", "50MP Camera", "5500mAh Battery"]
  },
  {
    name: "Realme 13 Pro+",
    price: "₹28,999",
    image: "https://cdn1.smartprix.com/rx-ixyLHxxor-w420-h420/realme-13-pro-extrem.webp",
    features: ["Sony IMX882 Sensor", "120Hz Curved Display", "67W Fast Charging"]
  },
  {
    name: "Realme GT 6",
    price: "₹40,999",
    image: "https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/m/1/7/gt-6-rmx3851-realme-original-imah2y7ewhzjpfhd.jpeg?q=70&crop=false",
    features: ["Snapdragon 8s Gen 3", "50MP Camera", "5500mAh Battery"]
  },
  {
    name: "Realme Narzo 70 Pro",
    price: "₹18,999",
    image:"https://cdn1.smartprix.com/rx-igO3zHlIk-w420-h420/realme-narzo-70-pro.webp",
    features: ["50MP OIS Camera", "67W Charging", "AMOLED Display"]
  },
  {
    name: "Xiaomi 14",
    price: "₹69,999",
    image: "https://cartdaddy.in/public/uploads/all/wrCqpO6V3V6cGSDUMxFmrVU5HSmAhGeOMfL5B30U.jpg",
    features: ["Snapdragon 8 Gen 3", "Leica 50MP Camera", "4610mAh Battery"]
  },
  {
    name: "Xiaomi Redmi Note 13 Pro+",
    price: "₹31,999",
    image: "https://st2.gsmarena.com/vv/bigpic/xiaomi-redmi-note-13-pro-plus-int.jpg",
    features: ["200MP Camera", "120Hz Curved AMOLED", "67W Charging"]
  },
  {
    name: "Xiaomi Redmi Note 12",
    price: "₹12,999",
    image: "https://rukminim2.flixcart.com/image/480/640/xif0q/mobile/s/2/z/note-12-mzb0e6fin-redmi-original-imagz62gzggajgz4.jpeg?q=90",
    features: ["Snapdragon 4 Gen 1", "48MP Camera", "5000mAh Battery"]
  },
  {
    name: "Vivo X100 Pro",
    price: "₹89,999",
    image: "https://cdn.kalvo.com/uploads/img/large/56929-vivo-x100-pro.jpg",
    features: ["Dimensity 9300", "50MP ZEISS Camera", "6.78-inch AMOLED"]
  },
  {
    name: "Vivo V30 Pro",
    price: "₹41,999",
    image: "https://in.mobilekishop.net/products/vivo-v30-pro-default.jpg",
    features: ["50MP Triple Camera", "120Hz AMOLED", "5000mAh Battery"]
  },
  {
    name: "Vivo Y200",
    price: "₹21,999",
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRF5iZpGAXulyIEAn4gN-CnaeVqH760Iy9kvFRuOsCFQ00tIGo8KGUWu10CDNy_sMCgAr8&usqp=CAU",
    features: ["Snapdragon 4 Gen 1", "64MP Camera", "AMOLED Display"]
  },
  {
    name: "Oppo Reno 11 Pro",
    price: "₹39,999",
    image:"https://www.oppo.com/content/dam/oppo/common/mkt/v2-2/reno11-pro-5g-en/listpage/reno11-pro-427-600-white.png",
    features: ["50MP Sony Camera", "80W Charging", "120Hz Display"]
  },
  {
    name: "Oppo F25 Pro",
    price: "₹23,999",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT70xOFmMLCnNFtIoB5dfqwVzrK3e9eqvutozDvx3UyxY-XAimvv2gDZwpNRVe26HHS00s&usqp=CAU",
    features: ["64MP Camera", "67W Charging", "AMOLED Display"]
  },
  {
    name: "Poco X6 Pro",
    price: "₹24,999",
    image: "https://m.media-amazon.com/images/I/61wTF6ORVnL._AC_UF894,1000_QL80_.jpg",
    features: ["Dimensity 8300 Ultra", "64MP Camera", "120Hz AMOLED"]
  },
  {
    name: "Poco F5",
    price: "₹28,999",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQG8OVJjCvVakyN0VhJVYURc5yxN4Sa6CtY-g&s",
    features: ["Snapdragon 7+ Gen 2", "64MP Camera", "5000mAh Battery"]
  },
  {
    name: "Poco M6 Pro",
    price: "₹10,999",
    image: "https://cdn.smart-gsm.com/img/picture/big/xiaomi-poco-m6-pro.jpg",
    features: ["Snapdragon 4 Gen 2", "50MP Camera", "5000mAh Battery"]
  },
  {
    name: "Infinix GT 20 Pro",
    price: "₹24,999",
    image: "https://rukminim2.flixcart.com/image/480/640/xif0q/mobile/e/q/0/gt-20-pro-x6871-infinix-original-imahf2dfvbtavfur.jpeg?q=90",
    features: ["Dimensity 8200", "108MP Camera", "144Hz AMOLED"]
  },
  {
    name: "Infinix Note 40 Pro",
    price: "₹19,999",
    image: "https://rukminim2.flixcart.com/image/480/640/xif0q/mobile/b/p/0/-original-imahfsy3hwrqavwf.jpeg?q=90",
    features: ["108MP Camera", "67W Charging", "AMOLED Display"]
  },
  {
    name: "Motorola Edge 50 Pro",
    price: "₹31,999",
    image: "https://fdn2.gsmarena.com/vv/bigpic/motorola-edge50-pro.jpg",
    features: ["Snapdragon 7 Gen 3", "50MP Camera", "125W Charging"]
  },
  {
    name: "Motorola Edge 40",
    price: "₹26,999",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRATUd7jYLzq5aNnp2NPW_neq7H9DmlSqX_epXeK8MBRftw4jSsMJNZJzJi_MFURhxabig&usqp=CAU",
    features: ["Dimensity 8020", "50MP Camera", "144Hz AMOLED"]
  },
  {
    name: "Moto G84",
    price: "₹18,999",
    image: "https://in.static.webuy.com/product_images/Phones/Phones%20Android/SMOTXT2347256GMBUNLC_l.jpg",
    features: ["50MP OIS Camera", "POLED Display", "5000mAh Battery"]
  },
  {
    name: "Google Pixel 8",
    price: "₹75,999",
    image: "https://in.static.webuy.com/product_images/Phones/Phones%20Android/SGOOPIX8128GHAUNLB_l.jpg",
    features: ["Tensor G3", "48MP Camera", "Actua Display"]
  },
  {
    name: "Google Pixel 7a",
    price: "₹34,999",
    image: "https://rukminim2.flixcart.com/image/480/640/xif0q/mobile/v/f/d/-original-imagpgx4g2m63gfh.jpeg?q=90",
    features: ["Tensor G2", "64MP Camera", "90Hz OLED Display"]
  },
  {
  name: "Nothing Phone 2",
  price: "₹39,999",
  image: "https://in.static.webuy.com/product_images/Phones/Phones%20Android/SNOTP212G512GDGUNLB_l.jpg",
  features: ["Snapdragon 8+ Gen 1", "50MP Dual Camera", "120Hz AMOLED Display"]
},
{
  name: "Tecno Camon 30 Pro",
  price: "₹22,999",
  image: "https://i.gadgets360cdn.com/products/large/tecno-camon-30-pro-5g-tecno-db-676x800-1712227472.jpg",
  features: ["50MP OIS Camera", "Dimensity 8200", "5000mAh Battery"]
}

];
const container = document.getElementById("mobile-container");

function displayMobiles(data) {
  container.innerHTML = "";
  data.forEach((mobile, i) => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
    <div class="card-img">
      <img src="${mobile.image}" alt="">
      <h2>${mobile.name}</h2>
      <p class="price">${mobile.price}</p>
      <ul>${mobile.features.map(f => `<li> ${f}</li>`).join("")}</ul>
    `;
    container.appendChild(card);
    setTimeout(() => card.classList.add("show"), 150 * i); // Animation delay
  });
}

displayMobiles(mobiles);

const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

let index = 0;
const group = 4; // 4 cards per slide
const totalCards = document.querySelectorAll(".card").length;
const maxIndex = Math.ceil(totalCards / group) - 1;

nextBtn.onclick = () => {
  if (index < maxIndex) index++;
  slide();
};

prevBtn.onclick = () => {
  if (index > 0) index--;
  slide();
};

function slide() {
  const move = index * (220 * group + 15 * (group - 1)); 
  cards.style.transform = `translateX(-${move}px)`;
}



// Dark / Light Mode Toggle
const themeToggle = document.getElementById("themeToggle");
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  themeToggle.textContent =
    document.body.classList.contains("dark-mode") ? "☀️" : "🌙";
});


 //Search Function
document.getElementById("searchBox").addEventListener("keyup", (e) => {
  const value = e.target.value.toLowerCase();
  const filtered = mobiles.filter(m => m.name.toLowerCase().includes(value));
  displayMobiles(filtered);
});
