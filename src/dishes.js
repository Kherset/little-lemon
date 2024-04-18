import bruschetta from "./img/bruschetta.png";
import salad from "./img/greek-salad.jpg";
import cheesecake from "./img/lemon-cheesecake.jpg";

const dishes = [
  {
    id: 1,
    title: "Greek salad",
    price: 12.99,
    image: salad,
    description:
      "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style fota cheese, garnished with crunchy garlic and rosemary croutons",
  },
  {
    id: 2,
    title: "Bruschetta",
    price: 5.99,
    image: bruschetta,
    description:
      "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
  },
  {
    id: 3,
    title: "Lemon Cheesecake",
    price: 4.78,
    image: cheesecake,
    description:
      "This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
  },
];

export default dishes;
