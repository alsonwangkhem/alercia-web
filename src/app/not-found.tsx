import Link from "next/link";

export default function NotFound () {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="text-center">
                <h1 className="text-4xl font-bold mb-4 text-red-400">404</h1>
                <p className="text-xl text-gray-600 mb-4">Oops! Page not found</p>
                <Link href="/" className="btn-cta">
                    Return to Home
                </Link>
            </div>
        </div>
    )
};