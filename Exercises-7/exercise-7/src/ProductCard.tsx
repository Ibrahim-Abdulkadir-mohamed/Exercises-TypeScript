// interface ProductProps{
//    name: string,
//    price: number,
//    description?: string
// }

type ProductProps={
       name: string,
       price: number,
       description?: string
}

function Products({ name, price, description }: ProductProps) {
    return (
        <div>
             <h1>{name}</h1>
             <h1>{price}</h1>
             <h1>{description}</h1>
        </div>
    )
}
export default Products
