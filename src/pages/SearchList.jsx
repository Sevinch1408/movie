import React from 'react';
import { useParams } from 'react-router-dom';

const SearchList = () => {
     const {searchQuery}=useParams();
    return (

        <div>
           SearchList : {searchQuery}
        </div>
    );
}

export default SearchList;
