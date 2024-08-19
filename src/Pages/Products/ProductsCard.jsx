import { BsStar } from "react-icons/bs";
import { Link } from "react-router-dom";


const ProductsCard = ({product}) => {
   const { _id, productName, brandName, categoryName, price, dateAdded, description, productImg, rating } = product;

      return (
      <div className="gap-4 space-y-4 my-4 mx-auto">
      <div className="w-[350px] min-h-[586px] border-2 border-sky-200 p-2 rounded-lg lit-bg2">
        {/* Card Top */}
        <div className="">
          
          <h2 className="mx-2 border-y p-1 text-center my-1 font-semibold">{productName}</h2>
        </div>
        <div className="mx-4">
          <img src={productImg} alt="" className="rounded-md mx-auto border border-sky-300" />
        </div>
        {/* After Image */}
        <div className="mx-2 my-1">
          <h1 className="font-semibold"><span className="font-semibold">Product Name:</span> {productName}</h1>
          <h3><span className="font-semibold">Brand:</span> {brandName}</h3>
          <p className="border-t py-1 my-1"><span className="font-semibold">Category:</span> {categoryName}</p>
          <p className="border-t py-1 my-1"><span className="font-semibold">Description:</span> {description}</p>
          <p className="border-t py-1 my-1 font-bold"><span className="font-semibold">Price:</span> $ {price}</p>
          <p className="border-t flex items-center py-1 my-1"><span className="font-semibold">Rating:</span> <span className="px-1 text-yellow-500  yello"><BsStar></BsStar></span> {rating}</p>
          <Link to={`/`}>
          <button className="btn btn-sm btn-outline btn-accent btn-wide mx-auto flex">See Details</button>
          </Link>
        </div>
      </div>
    </div>
   );
};

export default ProductsCard;