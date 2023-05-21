
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
  { id: 1, name: 'Product 1', category: 'Category1' },
  { id: 2, name: 'Product 2', category: 'Category1' },
  { id: 3, name: 'Product 3', category: 'Category2' },
  { id: 4, name: 'Product 4', category: 'Category2' },
  { id: 5, name: 'Product 5', category: 'Category3' },
  { id: 6, name: 'Product 6', category: 'Category3' },
];

export function App (){
  const [category, setCategory] = useState<string>('');

  return(
    <div>
      <h1>Product Listing</h1>
      <CategoryButton name="Category1" setCategory={setCategory} />
      <CategoryButton name="Category2" setCategory={setCategory} />
      <CategoryButton name="Category3" setCategory={setCategory} />
      <ProductList products={products} category={category} />
    </div>
    
  )
}