import { Payroll } from "../payroll/Payroll";
import { JsonValue } from "type-fest";
import { Salary } from "../salary/Salary";

export type User = {
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  fullName: string | null;
  id: string;
  lastName: string | null;
  payrolls?: Array<Payroll>;
  role?: "Option1" | null;
  roles: JsonValue;
  salaries?: Array<Salary>;
  updatedAt: Date;
  username: string;
};
