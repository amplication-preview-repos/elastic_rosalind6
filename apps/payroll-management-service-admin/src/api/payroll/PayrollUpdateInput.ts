import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type PayrollUpdateInput = {
  amount?: number | null;
  payDate?: Date | null;
  user?: UserWhereUniqueInput | null;
};
