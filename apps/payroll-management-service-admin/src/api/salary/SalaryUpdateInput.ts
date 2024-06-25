import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type SalaryUpdateInput = {
  baseSalary?: number | null;
  bonus?: number | null;
  user?: UserWhereUniqueInput | null;
};
