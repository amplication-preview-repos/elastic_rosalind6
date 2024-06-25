import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type SalaryCreateInput = {
  baseSalary?: number | null;
  bonus?: number | null;
  user?: UserWhereUniqueInput | null;
};
