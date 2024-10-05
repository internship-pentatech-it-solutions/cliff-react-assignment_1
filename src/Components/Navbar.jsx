import { Link } from "react-router-dom";
function Navbar() {
  return (
    <div className="fixed top-0 left-0 h-full w-72 bg-gray-800 text-white transform">
      <div className="flex justify-end p-2 cursor-pointer ">
        <svg
          className="w-9 h-9 "
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="size-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M6 18 18 6M6 6l12 12"
          />
        </svg>
      </div>

      <nav className="flex flex-col mt-4">
        <Link to="/" className="list">
          Home
        </Link>
        <Link to="/shop" className="list">
          Shop
        </Link>
        <Link to="/about" className="list">
          About
        </Link>
        <Link to="/contacts" className="list">
          Contacts
        </Link>
      </nav>
    </div>
  );
}

export default Navbar;
