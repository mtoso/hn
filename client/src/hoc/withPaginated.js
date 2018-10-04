import React from 'react';

const withPaginated = Component => props => {
    return (
      <div>
        <Component {...props} />
        <div className="interactions">
          {props.page !== null &&
            !props.isLoading && (
              <button type="button" onClick={props.onPaginatedSearch}>
                More
              </button>
            )}
        </div>
      </div>
    );
};

export default withPaginated;
