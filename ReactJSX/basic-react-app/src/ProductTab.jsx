// import Product from "./Product.jsx"
// function ProductTab() {
//     let options = ['hi-tech', 'durable', 'ai-support'];
//     return (
//         <>
//             <Product title='Laptop' price={50000} features={options} />
//             <Product title='Translator' price={70000}/>
//         </>
//     )
// }
// export default ProductTab;

import ProductCard from "./ProductCard";
import './ProductTab.css';
export default function ProductTab() {
    
    return (
        <div className="productTab">
            <ProductCard title='MX C 1234h' idx={0} />
            <ProductCard title='MAC HYPER H' idx={1} />
            <ProductCard title='ZEBRONICS 4898J' idx={2} />
            <ProductCard title='HOME THEATER RT56' idx={3} />
        </div>
    )
}