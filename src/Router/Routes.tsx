import { Route, Routes } from "react-router-dom";
import { DefaultLayout } from "../layouts/DefaultLayout";
import { ButtonFilter } from "../pages/ButtonFilter";



export function Router (){


    return(

        <Routes>
            <Route path="/" element ={<DefaultLayout/>}>
                <Route  path="/" element ={<ButtonFilter/>} />
                
            </Route>

        </Routes>
    )
}