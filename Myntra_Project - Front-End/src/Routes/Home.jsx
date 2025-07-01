import React from 'react'
import HomeItem from '../Components/HomeItem'
import { useSelector } from 'react-redux'

const Home = () => {

    const itemsObj = useSelector((store) => store.items)

    return (
        <main>
            <div className="items-container">
                {itemsObj.map((items) => <HomeItem key={items.id} item={items} /> )}
            </div>
        </main>
    )
}

export default Home
