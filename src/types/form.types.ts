export type PlanOption = {
  id: number;
  img: string;
  title: string;
  monthlyPrice: string;
  yearlyPrice: string;
};

export type AddOnsOption = {
  id: number;
  isChecked: boolean;
  title: string;
  description: string;
  monthlyPrice: string;
  yearlyPrice: string;
};

export type FormData = {
  name: string;
  email: string;
  phone: string;
  planOption: PlanOption;
  planType: "monthly" | "yearly";
  addOnOptions: AddOnsOption[] | undefined;
  finishedSteps: boolean[];

  summary: string;
};

export type FormSteps = {
  index: number;
  title: string;
}[];
