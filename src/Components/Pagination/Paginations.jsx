import React from 'react';
import { Pagination } from 'semantic-ui-react';


const Paginations=()=>{


    return (
        <div className="pagination-container">
                 <Pagination 
                    boundaryRange={1}
                    activePage={1}
                    size="tiny"
                    siblingRange={1}
                    totalPages={10}
                    firstItem={null}
                    lastItem={null}
                   
                 />
        </div>
    )
}
export default Paginations;