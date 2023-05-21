import React from "react"

interface CategoryButtonProps {
    name: string,
    setCategory: React.Dispatch<React.SetStateAction<string>>
}


export function CategoryButton({name, setCategory}:CategoryButtonProps){

    return <button
                onClick={()=> setCategory(name)}
            >
                {name}
            </button>
}