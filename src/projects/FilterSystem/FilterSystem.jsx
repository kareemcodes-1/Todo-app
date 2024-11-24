import React, { useEffect, useState } from "react";
import data from "../../../data";
import { AiFillStar } from "react-icons/ai";

const FilterSystem = () => {
  const [products, setProducts] = useState(data);
  const [isActive, setIsActive] = useState("");

  useEffect(() => {
    setIsActive("all");
  }, []);


  function onInput(e){
    const value = e.target.value;
    setProducts(data.filter((product) => product.title.toLowerCase().includes(value.toLowerCase())));
}

  function handleFilter(value) {
    setIsActive(value);

      if (value === "all") {
          setProducts([...data]);
      } else if (["nike", "puma", "adidas", "vans"].includes(value)) {
          setProducts(data.filter((product) => product.company.toLowerCase() === value));
      } else if (["sneakers", "flats", "heels"].includes(value)) {
          setProducts(data.filter((product) => product.category === value));
      } else if (value === "0") {
          setProducts(data.filter((product) => product.newPrice >= 0 && product.newPrice <= 50));
      } else if (value === "50") {
          setProducts(data.filter((product) => product.newPrice >= 50 && product.newPrice <= 100));
      } else if (value === "100") {
          setProducts(data.filter((product) => product.newPrice >= 100 && product.newPrice <= 150));
      } else if (value === ">150") {
          setProducts(data.filter((product) => product.newPrice > 150));
      }
  }

  return (
    <div>
      <div className="fixed bg-white top-0 left-0 w-[20%] h-screen z-[1000] shadow-lg p-[1rem]">
        <div>
          <h2>Category</h2>
          <div className="flex items-start flex-col gap-[.5rem] mt-[1rem]">
            <div className="flex gap-[.5rem] items-center justify-center">
              <input
                type="radio"
                name="category"
                id="all"
                className="!bg-[#80808030]"
                onClick={() => handleFilter("all")}
              />
              <label htmlFor="all">All</label>
            </div>

            <div className="flex gap-[.5rem] items-center justify-center">
              <input
                type="radio"
                name="category"
                id="sneakers"
                className="!bg-[#80808030]"
                onClick={() => handleFilter("sneakers")}
              />
              <label htmlFor="sneakers">Sneakers</label>
            </div>

            <div className="flex gap-[.5rem] items-center justify-center">
              <input
                type="radio"
                name="category"
                id="flats"
                className="!bg-[#80808030]"
                onClick={() => handleFilter("flats")}
              />
              <label htmlFor="flats">Flats</label>
            </div>

            <div className="flex gap-[.5rem] items-center justify-center">
              <input
                type="radio"
                name="category"
                id="heels"
                className="!bg-[#80808030]"
                onClick={() => handleFilter("heels")}
              />
              <label htmlFor="heels">Heels</label>
            </div>
          </div>
        </div>

        <div>
          <h2>Price</h2>
          <div className="flex items-start flex-col gap-[.5rem] mt-[1rem]">
            <div className="flex gap-[.5rem] items-center justify-center">
              <input
                type="radio"
                name="price"
                id="0"
                onClick={() => handleFilter("0")}
              />
              <label htmlFor="0">$0 - 50</label>
            </div>

            <div className="flex gap-[.5rem] items-center justify-center">
              <input
                type="radio"
                name="price"
                id="50"
                onClick={() => handleFilter("50")}
              />
              <label htmlFor="50">$50 - $100</label>
            </div>

            <div className="flex gap-[.5rem] items-center justify-center">
              <input
                type="radio"
                name="price"
                id="100"
                onClick={() => handleFilter("100")}
              />
              <label htmlFor="100">$100 - $150</label>
            </div>

            <div className="flex gap-[.5rem] items-center justify-center">
              <input
                type="radio"
                name="price"
                id="150"
                onClick={() => handleFilter(">150")}
              />
              <label htmlFor="150">Over $150</label>
            </div>
          </div>
        </div>

        <div>
          <h2>Colors</h2>
          <div className="flex items-start flex-col gap-[.5rem] mt-[1rem]">
            <div className="flex gap-[.5rem] items-center justify-center">
              <input type="radio" name="" id="all" />
              <label htmlFor="all">All</label>
            </div>

            <div className="flex gap-[.5rem] items-center justify-center">
              <input type="radio" name="" id="sneakers" />
              <label htmlFor="sneakers">Black</label>
            </div>

            <div className="flex gap-[.5rem] items-center justify-center">
              <input type="radio" name="" id="flats" />
              <label htmlFor="flats">Blue</label>
            </div>

            <div className="flex gap-[.5rem] items-center justify-center">
              <input type="radio" name="" id="heels" />
              <label htmlFor="heels">Red</label>
            </div>

            <div className="flex gap-[.5rem] items-center justify-center">
              <input type="radio" name="" id="heels" />
              <label htmlFor="heels">Green</label>
            </div>

            <div className="flex gap-[.5rem] items-center justify-center">
              <input type="radio" name="" id="heels" />
              <label htmlFor="heels">White</label>
            </div>
          </div>
        </div>
      </div>

      <div className="pl-[20rem] py-[1rem]">
      <div className="yena-input w-[50%]">
          <input type="text" name="" id="" placeholder="Search products" onInput={onInput}/>
      </div>

        <div className="flex items-center gap-[1rem] my-[1rem]">
          <button
            type="button"
            onClick={() => handleFilter("all")}
            className={`${
              isActive === "all"
                ? "yena-button-stack --black"
                : "yena-button-stack"
            }`}
          >
            All
          </button>
          <button
            type="button"
            onClick={() => handleFilter("nike")}
            className={`${
              isActive === "nike"
                ? "yena-button-stack --black"
                : "yena-button-stack"
            }`}
          >
            Nike
          </button>
          <button
            type="button"
            onClick={() => handleFilter("puma")}
            className={`${
              isActive === "puma"
                ? "yena-button-stack --black"
                : "yena-button-stack"
            }`}
          >
            Puma
          </button>
          <button
            type="button"
            onClick={() => handleFilter("adidas")}
            className={`${
              isActive === "adidas"
                ? "yena-button-stack --black"
                : "yena-button-stack"
            }`}
          >
            Adidas
          </button>
          <button
            type="button"
            onClick={() => handleFilter("vans")}
            className={`${
              isActive === "vans"
                ? "yena-button-stack --black"
                : "yena-button-stack"
            }`}
          >
            Vans
          </button>
        </div>

        <div className="grid grid-cols-5 gap-[1rem] ">
          {products.map((product, index) => (
            <div key={index}>
              <img src={product.img} alt="" />
              <h1>{product.title}</h1>
              <h1>{product.company}</h1>
              <h1>${product.newPrice}</h1>
              <div className="flex items-center gap-[.2rem] text-yellow-500">{Array(4).fill(null).map((_, index) => (
                  <AiFillStar key={index} className="rating-star" />
              ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FilterSystem;
