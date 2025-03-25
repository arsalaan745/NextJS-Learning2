import { getServerSession } from "next-auth";

// better approach
export default async function Home(){
  const session = await getServerSession();

  return (
    <div>
      {JSON.stringify(session)}
    </div>
  )
}







// ***** not a good approach
// "use client";;
// import { SessionProvider, signIn, signOut, useSession } from "next-auth/react";


// export default function Home() {
//   return (
//     <SessionProvider>
//       <OtherHome/>
//     </SessionProvider>
//   );
// }

// function OtherHome(){
//   const session = useSession();

//   return <div>
//     {session.status == "unauthenticated" && <button onClick={()=>signIn()}>Sign in</button>}
//     {session.status == "authenticated" && <button onClick={()=>signOut()}>Sign out</button>}
//     {JSON.stringify(session)}
//   </div>
// } 
