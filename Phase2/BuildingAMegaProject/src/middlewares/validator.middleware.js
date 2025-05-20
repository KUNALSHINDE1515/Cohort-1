import {validationResult} from "express-validator";
import { ApiError } from "../utils/app-errors.js";
export const validator = (req,res,next) => {
    const error = validationResult(req) //log this erros
    
    if (!error.isEmpty) {
        return next()
    }

    const extractedError = []
    error.array().map((err) => extractedError.push({
        [err.path]: err.msg // log this erros
    }))

    throw new ApiError(422, "Recevied data in not valid", extractedError);


}