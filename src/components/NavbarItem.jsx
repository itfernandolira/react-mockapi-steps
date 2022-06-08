import React, {useEffect, useState} from "react";


import './NavbarItem.css';

const NavbarItem = props => {

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch("https://629a16cd7b866a90ec4954ee.mockapi.io/api/v1/categories")
            .then(res => res.json())
            .then(
                (data) => {
                    setIsLoaded(true);
                    setCategories(data);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }, []);

    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {
        return (
            <>
                {categories.map(category => (
                    <a key={category.id} href={"/" + category.id} className="text-white bg-dark list-group-item list-group-item-action linkcateg">{category.category}</a>
                ))}
            </>
        );
    }

}

export default NavbarItem;