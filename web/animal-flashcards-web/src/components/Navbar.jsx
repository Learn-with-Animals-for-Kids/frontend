import { Link, useLocation } from "react-router-dom";

function Navbar() {
    const { pathname } = useLocation();

    const linkStyle = (path) =>
        `rounded-full px-4 py-2 text-sm font-bold transition-all duration-200 ${
            pathname === path
                ? "bg-pink-300 text-white shadow-md"
                : "text-pink-200 hover:bg-pink-200"
        }`;

    return (
        <nav className="bg-yellow-100 shadow-lg border-b-4 border-pink-300 w-full">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-20 items-center justify-between">
                    {/* Logo */}
                    <div className="flex items-center space-x-2">
                        <img
                            className="h-10 w-10 rounded-full border-2 border-pink-400"
                            src="https://media.istockphoto.com/id/931785704/vector/paw_print.jpg?s=612x612&w=0&k=20&c=CXBPHlf7XHdJiiOULJrI9nGZjVNAj7cqnkM_eDyDdCU="
                            alt="Logo"
                        />

                    </div>

                    {/* Navigation Links */}
                    <div className="hidden sm:flex space-x-6 items-center">
                        <Link to="/" className={linkStyle("/")}>
                            Home
                        </Link>
                        <Link to="/admin" className={linkStyle("/admin")}>
                            Admin
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
