import React from 'react'
import BagSummary from '../Components/BagSummary'
import BagItem from '../Components/BagItem'
import { useSelector } from 'react-redux';

const Bag = () => {
  const bagItems = useSelector(store => store.items);
  const bagItemIDs = useSelector(store => store.bag);

  const finalItems = bagItems.filter((item) => {
    return bagItemIDs.includes(item.id);
  })

  return (
    <main>
      <div className="bag-page">
        <div className="bag-items-container">
          {finalItems.map((item) => <BagItem item={item} />)}
        </div>
        <BagSummary />
      </div>
    </main>
  )
}

export default Bag
