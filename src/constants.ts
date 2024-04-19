import {
  AddOnsOption,
  FormData,
  FormSteps,
  PlanOption,
} from "./types/form.types";

const planOptions: PlanOption[] = [
  {
    id: 1,
    img: "/assets/form/icon-arcade.svg",
    title: "Standard",
    monthlyPrice: "9",
    yearlyPrice: "90",
  },
  {
    id: 2,
    img: "/assets/form/icon-advanced.svg",
    title: "Advanced",
    monthlyPrice: "12",
    yearlyPrice: "120",
  },
  {
    id: 3,
    img: "/assets/form/icon-pro.svg",
    title: "Pro",
    monthlyPrice: "15",
    yearlyPrice: "150",
  },
];

const AddOnsOptions: AddOnsOption[] = [
  {
    id: 0,
    isChecked: false,
    title: "Online Courses",
    description: "Access multiple courses",
    monthlyPrice: "1",
    yearlyPrice: "10",
  },
  {
    id: 1,
    isChecked: false,
    title: "+20 jobs",
    description: "Send you +20 job opportunities a day",
    monthlyPrice: "2",
    yearlyPrice: "20",
  },
  {
    id: 2,
    isChecked: false,
    title: "Customized Jobs",
    description: "Custom jobs algin with your profile",
    monthlyPrice: "2",
    yearlyPrice: "20",
  },
];

const formSteps: FormSteps = [
  {
    index: 0,
    title: "YOUR INFO",
  },
  {
    index: 1,
    title: "SELECT PLAN",
  },
  {
    index: 2,
    title: "ADD-ONS",
  },
  {
    index: 3,
    title: "SUMMARY",
  },
];

const initialData: FormData = {
  name: "",
  email: "",
  phone: "",
  planOption: planOptions[0],
  planType: "monthly",
  addOnOptions: undefined,
  summary: "",
};

export { planOptions, AddOnsOptions, formSteps, initialData };
