import { useEffect, useState } from "react";
import { BsSearch } from "react-icons/bs";
import ProductsCard from "./ProductsCard";


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