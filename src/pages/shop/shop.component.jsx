import React from 'react';


// ? data import

// ! components import
import CollectionsOverview from '../../components/collections-overview/collections-overview.component';

const ShopPage = ({collections}) => {

    return(
        <div className='shop-page'>
            <CollectionsOverview />
        </div>
    )

}

export default ShopPage;