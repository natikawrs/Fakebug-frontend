import Joi from "joi";

const schema = Joi.object({
  firstName: Joi.string().required(),
  lastName: Joi.string().required(),
  emailOrMobile: Joi.alternatives().try(
    Joi.string()
      .email({
        // minDomainSegments: 2,
        tlds: { allow: ["com", "net"] }
      })
      .required(),
    Joi.string()
      .length(10)
      .pattern(new RegExp(/^[0-9]+$/))
      .required()
  ),

  password: Joi.string().pattern(new RegExp("^[a-zA-Z0-9]{6,16}$")),

  confirmPassword: Joi.ref("password")

  //   access_token: [Joi.string(), Joi.number()],

  //   birth_year: Joi.number().integer().min(1900).max(2013),

  //   email: Joi.string().email({
  //     minDomainSegments: 2,
  //     tlds: { allow: ["com", "net"] }
  //   })
}).with("password", "confirmPassword");

export const validateRegister = (input) =>
  schema.validate(input, { abortEarly: false });
