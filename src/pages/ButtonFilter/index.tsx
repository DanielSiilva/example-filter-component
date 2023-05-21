
import { useState } from "react";
import { CategoryButton } from "../../components/CategoryButton"
import { ProductList } from "../../components/ProductList"
import { products } from "../../mock/data"
import {Wrapper} from "./styled"




export function ButtonFilter (){
    const [category, setCategory] = useState<string>('');

    return(
        <Wrapper>
            <h1>Product Listing</h1>
            <section>
                <CategoryButton  name='Camisas' setCategory={setCategory}/>
                <CategoryButton  name='Tenis' setCategory={setCategory}/>
            </section>
            
            <ProductList products={products} category={category} />
        </Wrapper>
    )
}