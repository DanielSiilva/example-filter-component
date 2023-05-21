export interface Product {
    id: number;
    name: string;
    category: string;
}
  
//Mock De Dados
export const products: Product[] = [
    { id: 1, name: 'Product 1', category: 'Camisas' },
    { id: 2, name: 'Product 2', category: 'Tenis' },
    { id: 3, name: 'Product 3', category: 'havaianas' },
    { id: 4, name: 'Product 4', category: 'Tenis' },
    { id: 5, name: 'Product 5', category: 'Tenis' },
    { id: 6, name: 'Product 6', category: 'Camisas' },
];