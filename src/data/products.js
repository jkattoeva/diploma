import versageBratz from "../assets/versagebratz.jpg";
import versageMedusa from "../assets/versage.jpg";
import versageSandals from "../assets/versageSandals.jpg";
import nBalanceNergize from "../assets/nBalanceNergize.jpg";
import nBalance990 from "../assets/nBalance990.jpg";
import nBalance847v4 from "../assets/nBalance847v4.jpg";



const products = [
  {
    image: versageBratz,
    productId: "verasage",
    categoryId: "women-shoes", 
    title: "Medusa Aevitas Platfrom Pumps",
    description: `Versage® is one of the world's most evolving, trend-setting beverage and lifestyle brands. It is an inspirational, stylish and refined symbol of a worldly way of life.`,
    price: 1250,
  },
  {
    image: versageMedusa,
    productId: "balenciaga",
    categoryId: "men-shoes", 
    title: "Medusa Biggie Platform Mules",
    description: `oifjoeifjpsjfpsjf sefohisjoid s sfsf0f[s vs90fs0f8s f0s`,
    price: 120,
  },
  {
    image: versageSandals,
    productId: "accessories",
    categoryId: "balenciaga", 
    title: "Greca Maze Platform Sandals",
    description: `oifjoeifjpsjfpsjf sefohisjoid s sfsf0f[s vs90fs0f8s f0s`,
    price: 150,
  },
  {
    image: nBalanceNergize,
    productId: "louis vuiton",
    categoryId: "balenciaga", 
    title: "NB Nergize Sport",
    description: `oifjoeifjpsjfpsjf sefohisjoid s sfsf0f[s vs90fs0f8s f0s`,
    price: 150,
  },
  {
    image: nBalance990,
    productId: "givenchy",
     categoryId: "balenciaga", 
    title: "USA 990v5 Core",
    description: `oifjoeifjpsjfpsjf sefohisjoid s sfsf0f[s vs90fs0f8s f0s`,
    price: 150,
  },
  {
    image: nBalance847v4,
    productId: "adidas",
    categoryId: "balenciaga", 
    title: "847v4",
    description: `oifjoeifjpsjfpsjf sefohisjoid s sfsf0f[s vs90fs0f8s f0s`,
    price: 150,
  },
];


export function getProducts(categoryId) {
  if (categoryId) {
    return products.filter(product => product.categoryId === categoryId);
  }
  return products;
}

export function getProduct(productId) {
  return products[
    products.findIndex(
      product => product.productId === productId
    )
  ];
}