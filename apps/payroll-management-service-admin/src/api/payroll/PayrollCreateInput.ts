import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type PayrollCreateInput = {
  amount?: number | null;
  payDate?: Date | null;
  user?: UserWhereUniqueInput | null;
};
