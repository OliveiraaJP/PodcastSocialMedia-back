import joi from "joi"

export const InsertPodcastSchema = joi.object({
    name: joi.string().required(),
    episodes: joi.number().min(1).required(),
    beginAt: joi.string().regex(/^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/),
    finished: joi.boolean().required(),
    image: joi.string().uri().required()
})