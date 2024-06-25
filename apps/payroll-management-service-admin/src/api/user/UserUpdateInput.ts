import { PayrollUpdateManyWithoutUsersInput } from "./PayrollUpdateManyWithoutUsersInput";
import { InputJsonValue } from "../../types";
import { SalaryUpdateManyWithoutUsersInput } from "./SalaryUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  email?: string | null;
  firstName?: string | null;
  fullName?: string | null;
  lastName?: string | null;
  password?: string;
  payrolls?: PayrollUpdateManyWithoutUsersInput;
  role?: "Option1" | null;
  roles?: InputJsonValue;
  salaries?: SalaryUpdateManyWithoutUsersInput;
  username?: string;
};
