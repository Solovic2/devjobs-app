import { ReactNode } from "react";

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
  summary: string;
};

export type FormSteps = {
  index: number;
  title: string;
}[];

export type FormWrapperProps = {
  title: string;
  description: string;
  children: ReactNode;
};

// Personal Info
type YourInfoData = {
  name: string;
  email: string;
  phone: string;
};

export type YourInfoProps = YourInfoData & {
  updateFields: (fields: Partial<YourInfoData>) => void;
};
// Select Plan
type Plan = {
  planOption: PlanOption;
  planType: "monthly" | "yearly";
};
export type SelectPlanProps = {
  updateFields: (fields: Partial<Plan>) => void;
};
// AddOns
type AddOnOption = {
  addOnOptions: AddOnsOption[] | undefined;
};
type PlanType = {
  planType: "monthly" | "yearly";
};
export type AddOnsProps = PlanType & {
  updateFields: (fields: Partial<AddOnOption>) => void;
};
