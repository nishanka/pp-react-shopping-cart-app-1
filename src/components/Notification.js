import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { uiActions } from '../store/ui-slice';
import AlertBox from './AlertBox';

const Notification = ({ type, message }) => {
  const dispatchFn = useDispatch();
  const notification = useSelector((state) => state.ui.notification);

  const closeHandler = () => {
    dispatchFn(
      uiActions.showNotification({
        open: false,
      })
    );
  };

  return (
    <>
      {notification.open && (
        <AlertBox type={type} message={message} onClose={closeHandler} />
      )}
    </>
  );
};

export default Notification;
