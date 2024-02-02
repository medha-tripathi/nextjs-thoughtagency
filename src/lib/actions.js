"use server"

import { revalidatePath } from "next/cache"
import { connectDB } from "./utils"
import { Post, User } from "./models"
import { signIn, signOut } from "./auth"
import bcrypt from "bcryptjs"

export const addPost = async (formData) => {
    const { title, desc, slug, userId } = Object.fromEntries(formData)
    try {
        connectDB()
        const newPost = new Post({
            title,
            desc,
            slug,
            userId
        });
        await newPost.save();
        console.log("saved to db")
        revalidatePath("/blog")
    } catch (err) {
        console.error(err)
        return ("Failed to add post")
    }
}

export const deletePost = async (formData) => {
    const { id } = Object.fromEntries(formData)
    try {
        connectDB()
        await Post.findByIdAndDelete(id);
        console.log("deleted from db")
        revalidatePath("/blog")
    } catch (err) {
        console.error(err)
        throw new Error("Failed to delete post")
    }
}

export const handleGithubLogin = async (e) => {
    await signIn('github')
}

export const handleLogout = async (e) => {
    await signOut()
}

export const register = async (formData) => {
    const { username, email, img, password, passwordRepeat } = Object.fromEntries(formData)
    if (password !== passwordRepeat) {
        throw new Error("Passwords don't match")
    }

    try {
        connectDB()
        const user = await User.findOne({ username })
        if (user) {
            throw new Error("Username already exists")
        }
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)
        const newUser = new User({
            username,
            email,
            password: hashedPassword,
            img
        });
        await newUser.save();
        console.log("saved to db")
        revalidatePath("/blog")
    } catch (err) {
        console.error(err)
        throw new Error("Failed to add user")
    }
}

export const login = async (formData) => {
    const { username, password } = Object.fromEntries(formData)

    try {
        connectDB()
        await signIn("credentials",{username,password})
        
    } catch (err) {
        console.error(err)
        return ("Failed to login")
    }
}