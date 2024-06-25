import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type PayrollWhereInput = {
  amount?: FloatNullableFilter;
  id?: StringFilter;
  payDate?: DateTimeNullableFilter;
  user?: UserWhereUniqueInput;
};
