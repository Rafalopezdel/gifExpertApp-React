import { useState } from "react"
import { AddCategory, GifGrid } from "./components"

export const GifExpertApp = () => {

    const [categories, setcategories] = useState(['One punch'])

    const onAddCategory = (newCategory) => {
        // validacion de categoria repetida
        let newCatLower = [];
        for (let i in categories) {
            newCatLower.push(categories[i].replace(/ /g, "").toLowerCase())
        }

        if (newCatLower.includes(newCategory.replace(/ /g, "").toLowerCase())) return;

        setcategories([newCategory, ...categories]);
    }

    return (
        <>
            <h1>GifExpertApp</h1>
            <AddCategory onNewCategory={onAddCategory} />
            {
                categories.map((category) => (
                    <GifGrid
                        key={category}
                        category={category} />
                ))
            }

        </>
    )
}
