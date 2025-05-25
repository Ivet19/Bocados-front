import type { Restaurant, RestaurantData } from "./types";

export const jackRabbitSlims: Restaurant = {
  id: "662a1c9d7f8b9f001a1b0011",
  name: "Jack Rabbit Slim's",
  adress: "Los Angeles, CA",
  foodType: "Americana retro",
  imageUrl: "https://i.ibb.co/CKXW0vf/jack-rabbit.jpg",
  description:
    "El restaurante de temática cincuentera que aparece en 'Pulp Fiction', donde Vincent Vega y Mia Wallace comparten una famosa escena de baile. Ambientado con camareros disfrazados de íconos de los años 50 y decorado con coches clásicos como mesas. Sirve hamburguesas, batidos caros y rock and roll como acompañamiento.",
  isVisited: false,
  imageAlt: "the dining area of Jack Rabbit Slim's restaurant",
};

export const visitedJackRabbitSlims: Restaurant = {
  id: "662a1c9d7f8b9f001a1b0011",
  name: "Jack Rabbit Slim's",
  adress: "Los Angeles, CA",
  foodType: "Americana retro",
  imageUrl: "https://i.ibb.co/CKXW0vf/jack-rabbit.jpg",
  description:
    "El restaurante de temática cincuentera que aparece en 'Pulp Fiction', donde Vincent Vega y Mia Wallace comparten una famosa escena de baile. Ambientado con camareros disfrazados de íconos de los años 50 y decorado con coches clásicos como mesas. Sirve hamburguesas, batidos caros y rock and roll como acompañamiento.",
  isVisited: false,
  imageAlt: "the dining area of Jack Rabbit Slim's restaurant",
  servingsAmount: "Generosa",
};

export const gusteaus: Restaurant = {
  id: "662a1c9d7f8b9f001a1b0012",
  name: "Gusteau's",
  adress: "Paris, Francia",
  foodType: "Francesa gourmet",
  imageUrl: "https://i.ibb.co/K5Sc2ZL/gusteaus.jpg",
  description:
    "Restaurante ficticio de la película 'Ratatouille', anteriormente con tres estrellas Michelin. Tras la caída en desgracia de su fundador, el restaurante revive bajo la dirección de Linguini y Remy, una rata con gran talento culinario. Cocina francesa refinada, con atención al detalle, calidad y pasión por la gastronomía.",
  isVisited: false,
  imageAlt: "the dining area of Gusteau's restaurant",
};

export const leakyCauldron: Restaurant = {
  id: "662a1c9d7f8b9f001a1b0013",
  name: "The Leaky Cauldron",
  adress: "Charing Cross Road, Londres (Mundo Mágico)",
  foodType: "Británica mágica",
  imageUrl: "https://i.ibb.co/jkcBT7P/leaky-cauldron.jpg",
  description:
    "Aparece en las películas de 'Harry Potter', sirve como nexo entre el mundo muggle y el mágico. Un pub de aspecto oscuro pero acogedor, frecuentado por magos y brujas. Sirve estofados, cerveza de mantequilla y otras delicias del mundo mágico. Lugar ideal para viajeros rumbo al Callejón Diagon.",
  isVisited: true,
  servingsAmount: "Normal",
  waitTime: "Poco",
  customerService: "Bueno",
  priceCategory: "Medio",
  rating: 4.3,
  visitDate: "5 de octubre de 2024",
  imageAlt: "the dining area of The Leaky Cauldron restaurant",
};

export const pizzaPlanet: Restaurant = {
  id: "662a1c9d7f8b9f001a1b0014",
  name: "Pizza Planet",
  adress: "California, EE.UU.",
  foodType: "Pizza y arcade",
  imageUrl: "https://i.ibb.co/4M9dLq9/pizza-planet.jpg",
  description:
    "Popularizado en 'Toy Story', es una pizzería temática con juegos arcade y alienígenas como mascota. Destino ideal para niños y amantes de la nostalgia Pixar. Sirve pizzas clásicas y bebidas estilo refresco americano. Su icónica camioneta aparece en varias películas del universo Pixar como guiño oculto.",
  isVisited: true,
  servingsAmount: "Normal",
  waitTime: "Mucho",
  customerService: "Regular",
  priceCategory: "Bajo",
  imageAlt: "the dining area of Pizza Planet restaurant",
};

export const threeBroomsticks: Restaurant = {
  id: "662a1c9d7f8b9f001a1b0015",
  name: "The Three Broomsticks",
  adress: "Hogsmeade, Escocia",
  foodType: "Tavern / mágica",
  imageUrl: "https://i.ibb.co/JzLVDCM/three-broomsticks.jpg",
  description:
    "Taberna mágica del universo 'Harry Potter', famosa por su cerveza de mantequilla caliente y comida tradicional británica. Regenteada por Madam Rosmerta, es un lugar de descanso para estudiantes y profesores de Hogwarts. Su atmósfera acogedora, chimeneas encendidas y encanto antiguo la convierten en un destino obligatorio en Hogsmeade.",
  isVisited: true,
  servingsAmount: "Generosa",
  customerService: "Muy bueno",
  priceCategory: "Medio",
  rating: 4.7,
  visitDate: "12 de febrero de 2025",
  imageAlt: "the dining area of The Three Broomsticks restaurant",
};

export const threeBroomsticksData: RestaurantData = {
  name: "The Three Broomsticks",
  adress: "Hogsmeade, Escocia",
  foodType: "Tavern / mágica",
  imageUrl: "https://i.ibb.co/JzLVDCM/three-broomsticks.jpg",
  description:
    "Taberna mágica del universo 'Harry Potter', famosa por su cerveza de mantequilla caliente y comida tradicional británica. Regenteada por Madam Rosmerta, es un lugar de descanso para estudiantes y profesores de Hogwarts. Su atmósfera acogedora, chimeneas encendidas y encanto antiguo la convierten en un destino obligatorio en Hogsmeade.",
  isVisited: true,
  servingsAmount: "Generosa",
  customerService: "Muy bueno",
  priceCategory: "Medio",
  rating: 4.7,
  visitDate: "12 de febrero de 2025",
};

export const kelpShake: Restaurant = {
  id: "662a1c9d7f8b9f001a1b0016",
  name: "Kelp Shake",
  adress: "Fondo de Bikini",
  foodType: "Marina ficticia",
  imageUrl: "https://i.ibb.co/9H68GYY/kelp-shake.jpg",
  description:
    "Kelp Shake es la famosa cadena de comida rápida submarina que aparece en la película y serie de 'Bob Esponja'. Con su menú de batidos de alga y hamburguesas marinas, se convirtió en una sensación entre los ciudadanos de Fondo de Bikini, aunque no sin controversia. Su ambiente rápido y precios accesibles lo convierten en el competidor directo del Crustáceo Cascarudo.",
  isVisited: true,
  servingsAmount: "Poca",
  waitTime: "Poco",
  customerService: "Regular",
  rating: 3.2,
  visitDate: "5 de enero de 2025",
  imageAlt: "the dining area of Kelp Shake restaurant",
};

export const moesTavern: Restaurant = {
  id: "662a1c9d7f8b9f001a1b0017",
  name: "Moe's Tavern",
  adress: "742 Evergreen Terrace, Springfield",
  foodType: "Pub americano",
  imageUrl: "https://i.ibb.co/tKTkMDz/moes-tavern.jpg",
  description:
    "El bar favorito de Homer Simpson en la serie y película de 'Los Simpson'. Moe's Tavern es un bar oscuro y desaliñado donde los clientes habituales pasan horas bebiendo cerveza Duff. Aunque la comida no es su punto fuerte, su importancia cultural dentro del universo de Springfield es enorme. El ambiente es informal y muy local.",
  isVisited: true,
  waitTime: "Poco",
  customerService: "Bueno",
  priceCategory: "Bajo",
  rating: 4.0,
  visitDate: "23 de septiembre de 2024",
  imageAlt: "the dining area of Moe's Tavern restaurant",
};

export const moviesRestaurants = [
  jackRabbitSlims,
  gusteaus,
  leakyCauldron,
  pizzaPlanet,
  kelpShake,
  moesTavern,
];

export const moviesRestaurantsFirstPage = [
  jackRabbitSlims,
  gusteaus,
  leakyCauldron,
  pizzaPlanet,
  kelpShake,
];

export const moviesRestaurantsSecondPage = [moesTavern];
