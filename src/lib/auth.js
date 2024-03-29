import NextAuth from "next-auth"
import GitHub from "next-auth/providers/github"
import CredentialsProvider from "next-auth/providers/credentials"
import { connectDB } from "./utils"
import { User } from "./models"
import bcrypt from "bcryptjs"

const login=async(credentials)=>{
    try{
        connectDB()
        const user=await User.findOne({username:credentials.username})
        if(!user){
            throw new Error("Wrong credentials")
        }
        const valid=await bcrypt.compare(credentials.password,user.password)
        if(!valid){
            throw new Error("Incorrect password")
        }
        return user
    }catch(err){
        console.error(err)
        throw new Error("Failed to login")
    }
}


export const { handlers:{GET,POST}, auth, signIn, signOut } = NextAuth({
    providers: [GitHub({
        clientId: process.env.GITHUB_ID,
        clientSecret: process.env.GITHUB_SECRET
    }),
    CredentialsProvider({
      async authorize(credentials) {
        try{
          const user=await login(credentials)
          return user
        }catch(err){
          console.error(err)
          return null
        }
      }
    })
  ],
    callbacks:{
        async signIn({user, account, profile}) {
            if (account.provider === 'github') {
              connectDB()
              try{
                const user=await User.findOne({email:profile.email});
                if(!user){
                  const newUser=new User({
                    username:profile.login,
                    email:profile.email,
                    img:profile.avatar_url
                  })
                  await newUser.save()
                }
              }catch(err){
                console.error(err)
                return false
              }
            }
            return true
          },
    }
})