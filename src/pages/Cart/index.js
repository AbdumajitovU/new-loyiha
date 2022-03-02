import { data } from "autoprefixer";
import { useContext } from "react";
import { ProductContext } from "../../utils/productContext";
import DeleteCard from "../components/deleteCard";
import Layout from "../components/Layout";

function CartPage() {
    const {cartStadions} = useContext(ProductContext);
    return ( 
        <Layout>
            <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 gap-10">
            { 
                cartStadions &&
                cartStadions.map((stadion)=>{
                    return <DeleteCard stadion={stadion} key={stadion.id} />
                    
                })
            }
            </div>
        </Layout>
     );
}

export default CartPage;