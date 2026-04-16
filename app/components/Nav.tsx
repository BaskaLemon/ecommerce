import React from "react";
type props = {
  setCategory: React.Dispatch<React.SetStateAction<string>>;
  setSkip: React.Dispatch<React.SetStateAction<number>>;
  category: string;
};
export const Nav = ({ setCategory, setSkip, category }: props) => {
  return (
    <nav className="border-b border-zinc-800 bg-zinc-900 dark:border-zinc-800 dark:bg-zinc-900">
      <div className="mx-auto max-w-7xl px-6">
        <ul className="flex gap-1 overflow-x-auto py-3 no-scrollbar">
          <li>
            <button
              onClick={() => {
                setCategory("");
                setSkip(0);
              }}
              className={`rounded-full px-4 py-1.5 text-sm font-medium ${
                category === ""
                  ? "bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900"
                  : "text-zinc-600 hover:bg-zinc-100 dark:text-zinc-400 dark:hover:bg-zinc-800"
              }`}
            >
              All
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                setCategory("beauty");
                setSkip(0);
              }}
              className={`rounded-full px-4 py-1.5 text-sm font-medium ${
                category === "beauty"
                  ? "bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900"
                  : "text-zinc-600 hover:bg-zinc-100 dark:text-zinc-400 dark:hover:bg-zinc-800"
              }`}
            >
              Beauty
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                setCategory("fragrances");
                setSkip(0);
              }}
              className={`rounded-full px-4 py-1.5 text-sm font-medium ${
                category === "fragrances"
                  ? "bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900"
                  : "text-zinc-600 hover:bg-zinc-100 dark:text-zinc-400 dark:hover:bg-zinc-800"
              }`}
            >
              Fragrances
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                setCategory("furniture");
                setSkip(0);
              }}
              className={`rounded-full px-4 py-1.5 text-sm font-medium ${
                category === "furniture"
                  ? "bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900"
                  : "text-zinc-600 hover:bg-zinc-100 dark:text-zinc-400 dark:hover:bg-zinc-800"
              }`}
            >
              Furniture
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                setCategory("groceries");
                setSkip(0);
              }}
              className={`rounded-full px-4 py-1.5 text-sm font-medium ${
                category === "groceries"
                  ? "bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900"
                  : "text-zinc-600 hover:bg-zinc-100 dark:text-zinc-400 dark:hover:bg-zinc-800"
              }`}
            >
              Groceries
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                setCategory("home-decoration");
                setSkip(0);
              }}
              className={`rounded-full px-4 py-1.5 text-sm font-medium ${
                category === "home-decoration"
                  ? "bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900"
                  : "text-zinc-600 hover:bg-zinc-100 dark:text-zinc-400 dark:hover:bg-zinc-800"
              }`}
            >
              Home Decoration
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                setCategory("kitchen-accessories");
                setSkip(0);
              }}
              className={`rounded-full px-4 py-1.5 text-sm font-medium ${
                category === "kitchen-accessories"
                  ? "bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900"
                  : "text-zinc-600 hover:bg-zinc-100 dark:text-zinc-400 dark:hover:bg-zinc-800"
              }`}
            >
              Kitchen Accessories
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                setCategory("laptops");
                setSkip(0);
              }}
              className={`rounded-full px-4 py-1.5 text-sm font-medium ${
                category === "laptops"
                  ? "bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900"
                  : "text-zinc-600 hover:bg-zinc-100 dark:text-zinc-400 dark:hover:bg-zinc-800"
              }`}
            >
              Laptops
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                setCategory("smartphones");
                setSkip(0);
              }}
              className={`rounded-full px-4 py-1.5 text-sm font-medium ${
                category === "smartphones"
                  ? "bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900"
                  : "text-zinc-600 hover:bg-zinc-100 dark:text-zinc-400 dark:hover:bg-zinc-800"
              }`}
            >
              Smartphones
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                setCategory("sports-accessories");
                setSkip(0);
              }}
              className={`rounded-full px-4 py-1.5 text-sm font-medium ${
                category === "sports-accessories"
                  ? "bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900"
                  : "text-zinc-600 hover:bg-zinc-100 dark:text-zinc-400 dark:hover:bg-zinc-800"
              }`}
            >
              Sports Accessories
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                setCategory("vehicle");
                setSkip(0);
              }}
              className={`rounded-full px-4 py-1.5 text-sm font-medium ${
                category === "vehicle"
                  ? "bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900"
                  : "text-zinc-600 hover:bg-zinc-100 dark:text-zinc-400 dark:hover:bg-zinc-800"
              }`}
            >
              Vehicle
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};
