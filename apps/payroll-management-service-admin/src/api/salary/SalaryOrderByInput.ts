import { SortOrder } from "../../util/SortOrder";

export type SalaryOrderByInput = {
  baseSalary?: SortOrder;
  bonus?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
