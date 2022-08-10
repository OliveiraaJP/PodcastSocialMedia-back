import { UserData, UserDataSignin } from "../interfaces/authInterface";
import { AppError } from "../utils/error.js"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import { chalkLogger } from "../utils/chalkLogger.js"
import * as authRepository from "../repositories/authRepository.js"

const signup = async (userObj: UserData) => {
    const {email, password, username, image} = userObj
    const hasEmail = await authRepository.getEmail(email)
    if(hasEmail) {
        throw new AppError(400, 'Email already registered!')
    }

    const hasUser = await authRepository.getUser(username)
    if(hasUser) {
        throw new AppError(400, 'Username already registered!')
    }

    const cryptPass = bcrypt.hashSync(password, 10)
    await authRepository.createUser({email, password: cryptPass, username, image})
}


const signin = async (userObj: UserDataSignin) => {
    const {email, password} = userObj
    const activeUser = await authRepository.getEmail(email)
    if(!activeUser) {
        throw new AppError(401, 'Invalid email!')
    }

    const confirmPassword = bcrypt.compareSync(password, activeUser.password)
    if(!confirmPassword){
        throw new AppError(401, 'Invalid password!')
    }

    const {username, image} = await authRepository.getEmail(email)

    const [jwtUser, jwtId] = [activeUser.email, activeUser.id]
    const token = jwt.sign({jwtUser, jwtId}, process.env.JWT_SECRET, {expiresIn:'24h'})
    chalkLogger.log('service', token)
    return {token, username, image }
}

export {
    signup,
    signin
}