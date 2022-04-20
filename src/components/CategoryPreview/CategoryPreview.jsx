import removal_img from "../../assets/images/removal_category.jpg";
import custom_img from "../../assets/images/custom_category.jpg";
import pizza_img from "../../assets/images/pizza_category.jpg";
import { Link } from "react-router-dom";

export default function CategoryPreview() {
  return (
    <div className="bg-gray-50">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="sm:flex sm:items-baseline sm:justify-between">
          <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">
            Shop by Category
          </h2>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:grid-rows-2 sm:gap-x-6 lg:gap-8">
          <div className="group aspect-w-2 aspect-h-1 rounded-lg overflow-hidden sm:aspect-h-1 sm:aspect-w-1 sm:row-span-2">
            <img
              src={removal_img}
              alt="Two models wearing women's black cotton crewneck tee and off-white cotton crewneck tee."
              className="object-center object-cover group-hover:opacity-75"
            />
            <div
              aria-hidden="true"
              className="bg-gradient-to-b from-transparent to-black opacity-50"
            />
            <div className="p-6 flex items-end">
              <div>
                <h3 className="font-semibold text-white">
                  <Link to="product/0">
                    <span className="absolute inset-0" />
                    Removals
                  </Link>
                </h3>
                <p aria-hidden="true" className="mt-1 text-sm text-white">
                  Explore all kinds of boxes suited for removals
                </p>
              </div>
            </div>
          </div>
          <div className="group aspect-w-2 aspect-h-1 rounded-lg overflow-hidden sm:relative sm:aspect-none sm:h-full">
            <img
              src={pizza_img}
              alt="Wooden shelf with gray and olive drab green baseball caps, next to wooden clothes hanger with sweaters."
              className="object-center object-cover group-hover:opacity-75 sm:absolute sm:inset-0 sm:w-full sm:h-full"
            />
            <div
              aria-hidden="true"
              className="bg-gradient-to-b from-transparent to-black opacity-50 sm:absolute sm:inset-0"
            />
            <div className="p-6 flex items-end sm:absolute sm:inset-0">
              <div>
                <h3 className="font-semibold text-white">
                <Link to="product/1">
                    <span className="absolute inset-0" />
                    Pizza
                  </Link>
                </h3>
                <p aria-hidden="true" className="mt-1 text-sm text-white">
                  Boxes designed for pizzas
                </p>
              </div>
            </div>
          </div>
          <div className="group aspect-w-2 aspect-h-1 rounded-lg overflow-hidden sm:relative sm:aspect-none sm:h-full">
            <img
              src={custom_img}
              alt="Walnut desk organizer set with white modular trays, next to porcelain mug on wooden desk."
              className="object-center object-cover group-hover:opacity-75 sm:absolute sm:inset-0 sm:w-full sm:h-full"
            />
            <div
              aria-hidden="true"
              className="bg-gradient-to-b from-transparent to-black opacity-50 sm:absolute sm:inset-0"
            />
            <div className="p-6 flex items-end sm:absolute sm:inset-0">
              <div>
                <h3 className="font-semibold text-white">
                <Link to="product/2">
                    <span className="absolute inset-0" />
                    Custom
                  </Link>
                </h3>
                <p aria-hidden="true" className="mt-1 text-sm text-white">
                  Create a custom box that suit your needs
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 sm:hidden">
          <a
            href="#"
            className="block text-sm font-semibold text-indigo-600 hover:text-indigo-500"
          >
            Browse all categories<span aria-hidden="true"> &rarr;</span>
          </a>
        </div>
      </div>
    </div>
  );
}
