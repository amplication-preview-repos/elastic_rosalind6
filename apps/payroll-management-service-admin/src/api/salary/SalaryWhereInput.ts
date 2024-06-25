import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type SalaryWhereInput = {
  baseSalary?: FloatNullableFilter;
  bonus?: FloatNullableFilter;
  id?: StringFilter;
  user?: UserWhereUniqueInput;
};
