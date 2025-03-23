export default function(){
    return (
        <div className="w-screen h-screen flex flex-col justify-center items-center">
        SignIn
            <input className="border border-white-600 rounded-lg mb-2 p-2" type="text" placeholder="Username" />
            <input className="border border-white-600 rounded-lg p-2" type="password" placeholder="Password" />
            <button className="bg-green-600 color-white-600 p-1 m-2">Signin</button>
        </div>
    )
}