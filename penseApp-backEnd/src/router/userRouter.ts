import {Router} from "express"
import getProfile from "../endpoints/users/getProfile"
import getUserById from "../endpoints/users/getUserById"
import login from "../endpoints/users/login"
import signup from "../endpoints/users/signup"

export const userRouter = Router()

userRouter.post("/signup", signup)
userRouter.post("/login", login)
userRouter.get("/profile", getProfile)
userRouter.get("/:id/profile", getUserById)
