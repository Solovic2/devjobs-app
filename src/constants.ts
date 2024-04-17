import { AddOnsOption, PlanOption } from "./types/form.types";

const planOptions: PlanOption[] = [
  {
    id: 1,
    img: "/src/assets/form/icon-arcade.svg",
    title: "Arcade",
    monthlyPrice: "9",
    yearlyPrice: "90",
  },
  {
    id: 2,
    img: "/src/assets/form/icon-advanced.svg",
    title: "Advanced",
    monthlyPrice: "12",
    yearlyPrice: "120",
  },
  {
    id: 3,
    img: "/src/assets/form/icon-pro.svg",
    title: "Pro",
    monthlyPrice: "15",
    yearlyPrice: "150",
  },
];

const AddOnsOptions: AddOnsOption[] = [
  {
    id: 0,
    isChecked: false,
    title: "Online Service",
    description: "Access to multiplayer games",
    monthlyPrice: "1",
    yearlyPrice: "10",
  },
  {
    id: 1,
    isChecked: false,
    title: "Larger Storage",
    description: "Extra 1TB of cloud save",
    monthlyPrice: "2",
    yearlyPrice: "20",
  },
  {
    id: 2,
    isChecked: false,
    title: "Customizable Profile",
    description: "Custom theme on your profile",
    monthlyPrice: "2",
    yearlyPrice: "20",
  },
];

export { planOptions, AddOnsOptions };
