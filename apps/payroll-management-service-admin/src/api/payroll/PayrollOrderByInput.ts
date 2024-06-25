import { SortOrder } from "../../util/SortOrder";

export type PayrollOrderByInput = {
  amount?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  payDate?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
