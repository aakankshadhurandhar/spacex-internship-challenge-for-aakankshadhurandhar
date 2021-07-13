import React from "react";
import { Pagination } from "semantic-ui-react";

function Paginate({ launches, activePage, setActivePage, launchCount }) {
	const handlePageChange = (e, { activePage }) => {
		setActivePage(activePage);
	};
	return (
		<>
			
            {launchCount > 12 ? (
				<div className="pagination-container">
					<Pagination
						boundaryRange={1}
						size="tiny"
						siblingRange={1}
						totalPages={Math.ceil(launchCount / 12)}
						onPageChange={handlePageChange}
						activePage={activePage}
						
						
					/>
				</div>
			) : (
				""
			)}
			
		</>
	);
}

export default Paginate;