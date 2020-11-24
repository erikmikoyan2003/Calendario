const { randomBytes } = require("crypto");
const {compare: bcryptCompare} = require("bcrypt")

exports.genToken = (rawSize = 16) => {
  const size = Math.max(1, Math.ceil(rawSize / 2));
  const bytes = randomBytes(size);

  return bytes.toString("hex").slice(0, rawSize);
};

exports.comparePassword = async (inputPassword, userPassword) => {
  return await bcryptCompare(inputPassword, userPassword)
}