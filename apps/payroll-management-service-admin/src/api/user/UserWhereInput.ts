import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { PayrollListRelationFilter } from "../payroll/PayrollListRelationFilter";
import { SalaryListRelationFilter } from "../salary/SalaryListRelationFilter";

export type UserWhereInput = {
  email?: StringNullableFilter;
  firstName?: StringNullableFilter;
  fullName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  payrolls?: PayrollListRelationFilter;
  role?: "Option1";
  salaries?: SalaryListRelationFilter;
  username?: StringFilter;
};
