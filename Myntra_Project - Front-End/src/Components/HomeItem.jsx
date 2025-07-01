import React from 'react'
import { bagActions } from '../Store/BagSlice';
import { useDispatch, useSelector } from 'react-redux';

const HomeItem = ({ item }) => {
    const bag = useSelector(store => store.bag);
    const dispatch = useDispatch();
    const eleFound = bag.includes(item.id);

    return (
        <>
            <div className="item-container">
                <img className="item-image" src={item.image} alt="item image" />
                <div className="rating">
                    {item.rating.stars} ⭐ | {item.rating.count}
                </div>
                <div className="company-name">{item.company}</div>
                <div className="item-name">{item.item_name}</div>
                <div className="price">
                    <span className="current-price">Rs {item.current_price}</span>
                    <span className="original-price">Rs {item.original_price}</span>
                    <span className="discount">({item.discount_percentage}% OFF)</span>
                </div>

                {eleFound ?
                    <button type="button" className="btn btn-add-bag btn-danger"
                        onClick={() => {
                            dispatch(bagActions.deleteFromBag(item.id))
                        }}>Remove</button>
                    :
                    <button type="button" className="btn btn-add-bag btn-success"
                        onClick={() => {
                            dispatch(bagActions.addToBag(item.id))
                        }}>Add To Cart</button>
                }


            </div>
        </>
    )
}

export default HomeItem; 