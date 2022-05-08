import { useEffect, useState } from 'react';

const useAllItems = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch('https://calm-sea-17054.herokuapp.com/items')
            .then(res => res.json())
            .then(data => setItems(data))
    }, []);
    return {items, setItems};
};

export default useAllItems;