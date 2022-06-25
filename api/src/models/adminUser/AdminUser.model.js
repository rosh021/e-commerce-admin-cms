import AdminUserSchema from "./AdminUser.schema.js";

export const createNewAdmin = (obj) => {
  return AdminUserSchema(obj).save();
};

// export const updateVarificationCodeByUserID = (_id, varificationCode) => {
//   return AdminUserSchema.findByIdAndUpdate(_id, {
//     varificationCode,
//   });
// };
