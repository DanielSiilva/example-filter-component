
import { useState } from 'react';
import { CategoryButton } from './components/CategoryButton'
import { ProductList } from './components/ProductList'

interface Product {
  id: number;
  name: string;
  category: string;
}

//Mock De Dados
const products: Product[] = [
  { id: 1, name: 'Product 1', category: 'Camisas' },
  { id: 2, name: 'Product 2', category: 'Tenis' },
  { id: 3, name: 'Product 3', category: 'Tenis' },
  { id: 4, name: 'Product 4', category: 'Tenis' },
  { id: 5, name: 'Product 5', category: 'Tenis' },
  { id: 6, name: 'Product 6', category: 'Camisas' },
];

export function App (){

  const [category, setCategory] = useState<string>('');

  return(
    <div>
      <h1>Product Listing</h1>
        {products.map(category => (
          <CategoryButton 
            key={category.id} 
            name={category.category} 
            setCategory={setCategory} 
          />
        ))}
      <ProductList products={products} category={category} />
    </div>
  )
}