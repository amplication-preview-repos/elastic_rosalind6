import { User } from "../user/User";

export type Salary = {
  baseSalary: number | null;
  bonus: number | null;
  createdAt: Date;
  id: string;
  updatedAt: Date;
  user?: User | null;
};
