import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
    providers: [
        CredentialsProvider({
          name: "Email",
          credentials: {
            username: { label: "Username", type: "text", placeholder: "arslaan745@gmail.com" },
            password: { label: "Password", type: "password" }
          },
          async authorize(credentials, req) {
           const username = credentials?.username;
           const password = credentials?.password;

           const user = {
            name: "leo",
            id:1,
            username:"example@gmail.com"
           }
           if(user){
            return user;
           }else{
            return null
           }
          }
        })
      ]
})

export { handler as GET, handler as POST }