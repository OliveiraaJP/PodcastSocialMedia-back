import joi from "joi";

export const signUpSchema = joi.object({
    email: joi.string().email().required(),
    username: joi.string().min(3).required(),
    password: joi.string().min(3).required(),
    image: joi.string().uri().required(),
    confirmPassword: joi.valid(joi.ref('password')).required()
})

export const signInSchema = joi.object({
    email: joi.string().email().required(),
    password: joi.string().min(3).required()
})