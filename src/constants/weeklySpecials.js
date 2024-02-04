import GreekSaladImg from "../assets/greek-salad.jpg";
import BruchettaImg from "../assets/bruchetta.jpg";
import LemonDessertImg from "../assets/lemon-dessert.jpg";

// Array to hold the weekly specials
export const WEEKLY_SPECIALS = [
  {
    name: "Greek Salad",
    price: "$12.99",
    description:
      "The famous greek salad of crispy lettuce, peppers, olives, and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
    image: GreekSaladImg,
    alt: "Greek Salad",
  },
  {
    name: "Bruchetta",
    price: "$5.99",
    description:
      "Our Bruchetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
    image: BruchettaImg,
    alt: "Bruchetta",
  },
  {
    name: "Lemon Dessert",
    price: "$4.99",
    description:
      "This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
    image: LemonDessertImg,
    alt: "Lemon Dessert",
  },
];
