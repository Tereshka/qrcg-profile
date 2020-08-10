export type PlanType = {
  id: number;
  name: string;
  label: string;
  params: PlanParamsType;
};

type PlanParamsType = {
  scans: number;
  dynamicsCodes: number;
  staticCodes: number;
  users: number;
};