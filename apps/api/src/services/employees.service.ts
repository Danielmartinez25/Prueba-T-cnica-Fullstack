import { EmployeeModel } from "../models/employee.model";

export const employeesService = {
  async listGrouped() {
    return EmployeeModel.aggregate([
      { $sort: { area: 1, fullName: 1 } },
      {
        $group: {
          _id: "$area",
          total: { $sum: 1 },
          employees: {
            $push: {
              id: "$_id",
              fullName: "$fullName",
              age: "$age",
              area: "$area",
              seniority: "$seniority",
              phone: "$phone",
            },
          },
        },
      },
      { $project: { _id: 0, area: "$_id", total: 1, employees: 1 } },
      { $sort: { area: 1 } },
    ]);
  },

  byId(id: string) {
    return EmployeeModel.findById(id).lean();
  },
};
