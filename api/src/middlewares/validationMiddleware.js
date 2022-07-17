import Joi from "joi";

export const productValidation = (req, res, next) => {
  const schema = Joi.object({
    name: Joi.string().max(50).required(),
    status: Joi.string().max(50).required(),
    type: Joi.string().max(50).required(),
    cost: Joi.number().max(5000).required(),
    description: Joi.string().max(5000).required(),
  });
  const { error } = schema.validate(req.body);
  if (error) {
    return res.json({
      status: "error",
      message: error.message,
    });
  }
  next();
};

export const updateProductValidation = (req, res, next) => {
  const schema = Joi.object({
    _id: Joi.string().max(100).required(),
    name: Joi.string().max(50).required(),
    status: Joi.string().max(50).required(),
    type: Joi.string().max(50).required(),
    cost: Joi.number().max(5000).required(),
    description: Joi.string().max(5000).required(),
  });
  const { error } = schema.validate(req.body);
  if (error) {
    return res.json({
      status: "error",
      message: error.message,
    });
  }
  next();
};
