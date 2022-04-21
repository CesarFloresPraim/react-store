import { Fragment, useEffect, useState } from "react";
import { Popover, Transition } from "@headlessui/react";
import { MenuIcon, XIcon, ShoppingCartIcon } from "@heroicons/react/outline";
import logo from "../../assets/images/inpack-logo.webp";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  loginUser,
  logoutUser,
} from "../../middleware/reducers/auth/auth.thunks";

const navigation = [
  { name: "Product", href: "#" },
  { name: "Features", href: "#" },
  { name: "Marketplace", href: "#" },
  { name: "Company", href: "#" },
];

export default function NavHeader(props) {
  const dispatch = useDispatch();
  //REDUX STATE
  const { accessToken, isTokenValid, lastLoginTime } = useSelector((state) => state.auth);
  const { cart } = useSelector((state) => state.cart);

  //LOCAL STATE
  const [cartCount, setCartCount] = useState(0);

  //PROPS
  const { isAuth } = props;

  //METHODS
  const isHomeNav = () => {
    if (!isAuth) {
      return navigation.map((item) => {
        return (
          <a
            key={item.name}
            href={item.href}
            className="font-medium text-gray-500 hover:text-gray-900"
          >
            {item.name}
          </a>
        );
      });
    }
    return;
  };
  //* METHODS
  const handleLogout = () => {
    dispatch(logoutUser());
  };
  const sumCart = () => {
    let total = 0
    for (const item of cart) {
      total += parseInt(item.quantity)
    }
    console.log(total);
    return total
  }

  //* WATCHERS
  useEffect(() => {
    setCartCount(sumCart())
  }, [])

  useEffect(() => {
    setCartCount(sumCart())
  }, [cart,])

  return (
    <Popover>
      <div className=" fixed z-50 bg-gray-50 shadow top-0 pt-4 px-4 min-w-full sm:px-6 lg:px-8" style={{ minHeight: '70px' }}>
        <nav
          className="relative flex items-center justify-around sm:h-10 lg:justify-start"
          aria-label="Global"
        >
          <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
            <div className="flex items-center justify-between w-full md:w-auto">
              <a href="/">
                <span className="sr-only">Workflow</span>
                <img className="h-12 w-auto" src={logo} />
              </a>
              <div className="-mr-2 flex items-center md:hidden">
                <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                  <span className="sr-only">Open main menu</span>
                  <MenuIcon className="h-6 w-6" aria-hidden="true" />
                </Popover.Button>
              </div>
            </div>
          </div>
          <div className="hidden md:flex md:pr-4 md:space-x-8 md:ml-auto">
            {isHomeNav()}
            <Link
              to="/auth"
              className={`font-medium text-indigo-600 hover:text-indigo-500 ${!isTokenValid ? "" : "hidden"
                } ${isAuth ? 'hidden' : ''}`}
            >
              Auth
            </Link>
            <div
              className={`font-medium text-red-600 hover:text-red-500 ${isTokenValid ? "" : "hidden"
                }`}
              onClick={handleLogout}
            >
              Logout
            </div>

            <a
              href="/cart"
              className="font-medium text-gray-500 hover:text-gray-900 flex items-center"
            >
              <ShoppingCartIcon className="h-6 w-6"></ShoppingCartIcon>
              <div className="font-medium text-lg ml-1">{parseInt(cartCount)}</div>
            </a>
          </div>
        </nav>
      </div>

      <Transition
        as={Fragment}
        enter="duration-150 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel
          focus
          className="absolute z-50 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
        >
          <div className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
            <div className="px-5 pt-4 flex items-center justify-between">
              <div>
                <img className="max-h-12 w-auto" src={logo} alt="" />
              </div>
              <div className="-mr-2">
                <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                  <span className="sr-only">Close main menu</span>
                  <XIcon className="h-6 w-6" aria-hidden="true" />
                </Popover.Button>
              </div>
            </div>
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                >
                  {item.name}
                </a>
              ))}
              <a
                href="/cart"
                className="flex px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 items-center"
              >
                <ShoppingCartIcon className="h-6 w-6 mr-1"></ShoppingCartIcon>
                <div className="font-medium text-lg ml-1">{cartCount}</div>

              </a>
            </div>
            <a
              href="#"
              className="block w-full px-5 py-3 text-center font-medium text-indigo-600 bg-gray-50 hover:bg-gray-100"
            >
              Log in
            </a>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}
