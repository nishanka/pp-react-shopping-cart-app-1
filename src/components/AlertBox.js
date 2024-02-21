import React from 'react';

const AlertBox = ({ type, message, onClose }) => {
  return (
    <div
      className={`alert alert-${type} rounded-0 text-center m-0 fixed-top opacity-75`}
      role='alert'
    >
      {message}
      {onClose && (
        <button onClick={onClose} className='btn btn-danger btn-sm ms-2'>
          Close
        </button>
      )}
    </div>
  );
};

export default AlertBox;
