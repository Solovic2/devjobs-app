import { AddOnsData } from "./AddOns";
import { SelectPlanData } from "./SelectPlan";

type SummaryData = { summary: string };
type SummaryProps = SummaryData & SelectPlanData & AddOnsData;

const Summary = ({ summary }: SummaryProps) => {
  return <div>Summary</div>;
};

export default Summary;
