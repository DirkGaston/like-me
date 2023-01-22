const yup = require("yup");

const querySchema = yup.object().shape({
  titulo: yup.string().required(),
  url: yup.string().required(),
  descripcion: yup.string().required(),
});

const queryValidator = async (req, res, next) => {
  try {
    await querySchema.validate(req.body);
    next();
  } catch (error) {
    return res.status(400).json({ success: false, error: error.message });
  }
};

module.exports = { queryValidator };
