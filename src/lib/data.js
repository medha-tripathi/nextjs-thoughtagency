import { Post, User } from "./models";
import { connectDB } from "./utils"

export const getPosts=async()=>{
    try{
        connectDB();
        const posts=await Post.find()
        console.log(posts)
        return posts
    }catch(err){
        console.error(err)
        throw new Error("Failed to fetch posts")
    }
}

export const getPost=async(slug)=>{
    try{
        connectDB();
        const post=await Post.findOne({slug})
        return post
    }catch(err){
        console.error(err)
        throw new Error("Failed to fetch post")
    }
}


export const getUser=async(id)=>{
    try{
        connectDB();
        const user=await User.findById(id)
        return user
    }catch(err){
        console.error(err)
        throw new Error("Failed to fetch user")
    }
}

export const getUsers=async()=>{
    try{
        connectDB();
        const users=await User.find()
        return users
    }catch(err){
        console.error(err)
        throw new Error("Failed to fetch users")
    }
}