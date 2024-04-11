import { Link } from "react-router-dom";

export const Error = () => {
    return (
        <div className="bg-gradient-to-r from-indigo-400 to-cyan-400 h-[auto] w-full bg-center bg-no-repeat min-h-[100vh]">
            <div className="flex flex-col items-center justify-center h-[80vh] w-full">
                <h1 className="text-9xl font-bold text-white">404</h1>
                <h2 className="text-2xl text-white">Page not found</h2>
                <Link to="/" className="text-white text-xl">Go to home</Link>
            </div>
        </div>
    )
}