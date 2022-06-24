import bcrypt from "bcrypt";

const salt = 10;
export const hashPassword = (plainPass) => {
  return bcrypt.hashSync(plainPass, salt);
};
