import { useEffect, useState } from "react";
import { BsSearch } from "react-icons/bs";
import ProductsCard from "./ProductsCard";
import { TbFilterQuestion } from "react-icons/tb";


const Products = () => {
   const [products, setProducts] = useState([]);
   const [searchText, setSearchText] = useState('')
   const [search, setSearch] = useState("")
   // console.log(products)

   useEffect(() => {
      fetch(`${import.meta.env.VITE_API_URL}/product?&search=${search}`)
         .then((res) => res.json())
         .then((data) => setProducts(data));
   }, [search]);

   const handleSearch = e => {
      e.preventDefault()
      const text = e.target.search.value;
      setSearch(text)
   }
   // console.log(search);



   return (
      <div>
         <h2 className="text-4xl font-bold text-center mt-6 lg:mt-16 mb-4 lg:mb-8  dark-color underline">
            Products
         </h2>

         {/* Search , Filters Funtions */}

         <div className="flex lg:flex-row flex-col-reverse justify-center lg:justify-around">
            {/* Filter by Brand */}
            <div className="dropdown md:ml-4">
               <div tabIndex={0} role="button" className="btn m-1"><TbFilterQuestion/> Brand Name</div>
               <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] p-2 shadow">
               {
               products.map((brand) => (<>
               
                  <li key={brand._id}><button>{brand.brandName}</button></li>
               
               </>))
               }
               </ul>
            </div>

            {/* Filter by Categories */}
            <div className="dropdown md:ml-4">
               <div tabIndex={0} role="button" className="btn m-1"><TbFilterQuestion/> Category Name</div>
               <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] p-2 shadow">
               {
               products.map((category) => (<>
               
                  <li key={category._id}><button>{category.categoryName}</button></li>
               
               </>))
               }
               </ul>
            </div>

            {/* Filter by Price */}
            <div className="dropdown md:ml-4">
               <div tabIndex={0} role="button" className="btn m-1"><TbFilterQuestion/> Price Range</div>
               <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] p-2 shadow">
               <li className="text-base"><button>$ 0 to 49</button></li>
               <li className="text-base"><button>$ 50 to 99</button></li>
               </ul>
            </div>

            {/* Sort by Price and Date */}
            <div className="dropdown md:ml-4">
               <div tabIndex={0} role="button" className="btn m-1">Sort by</div>
               <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box w-44 z-[1] p-2 shadow">
               <li className="text-base"><button>Price: Low to High</button></li>
               <li className="text-base"><button>Price: High to Low</button></li>
               <li className="text-base"><button>Date: Newest First</button></li>
               </ul>
            </div>

            {/* Search Functions */}
            <div className="mx-auto flex lg:flex-none justify-end">
               <form onSubmit={handleSearch}>
                  <div className="flex justify-between p-1 overflow-hidden rounded-lg border-2 border-orange-300 mr-2 md:mr-4">
                     <input
                        className="md:px-5 px-2 py-2 text-gray-700 bg-white outline-none"
                        type="text"
                        onChange={(e) => setSearchText(e.target.value)}
                        value={searchText}
                        name="search"
                        placeholder="Search Product by Title"
                     />
                     <button className="btn btn-accent text-lg">
                        <BsSearch /> Search
                     </button>
                  </div>
               </form>
            </div>
         </div>


         {/* Card Component */}
         {
            products.length > 0 ? <div className="grid lg:grid-cols-3 md:grid-cols-2 justify-around">
               {products.map((product) => (
                  <ProductsCard key={product._id} product={product}></ProductsCard>
               ))}
            </div> : <h2 className="text-center my-8 text-sky-600 text-2xl font-semibold">No data available by this name</h2>
         }

      </div>
   );
};

export default Products;