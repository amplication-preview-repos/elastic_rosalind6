import { PayrollCreateNestedManyWithoutUsersInput } from "./PayrollCreateNestedManyWithoutUsersInput";
import { InputJsonValue } from "../../types";
import { SalaryCreateNestedManyWithoutUsersInput } from "./SalaryCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  email?: string | null;
  firstName?: string | null;
  fullName?: string | null;
  lastName?: string | null;
  password: string;
  payrolls?: PayrollCreateNestedManyWithoutUsersInput;
  role?: "Option1" | null;
  roles: InputJsonValue;
  salaries?: SalaryCreateNestedManyWithoutUsersInput;
  username: string;
};
