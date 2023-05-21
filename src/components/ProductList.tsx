
interface Product {
    id: number,
    name: string,
    category: string
}

interface ProductListProps  {
    products: Product[];
    category: string
}

export function ProductList({products, category}:ProductListProps){
    const filterdedProducts = products.filter(product => product.category === category )

    return (
        <div>
            {filterdedProducts.map(product => (
                <div key={product.id}>{product.name}</div>
            ))}
        </div>
    )
}