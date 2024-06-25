import { User } from "../user/User";

export type Payroll = {
  amount: number | null;
  createdAt: Date;
  id: string;
  payDate: Date | null;
  updatedAt: Date;
  user?: User | null;
};
