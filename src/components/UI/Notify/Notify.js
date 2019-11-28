import React from 'react';
import { useSelector } from 'react-redux';

import {
  useToast
} from '@chakra-ui/core';

const Notify = () => {

  const notifications = useSelector(state => Object.values(state.notifications));
  const toast = useToast();

  const renderNotifications = () => {
    notifications.forEach(notification => {
      toast({
        title: notification.title,
        description: notification.description,
        status: "success",
        duration: 5000,
        isClosable: true
      })
    })
  }

  return (
    <div>{renderNotifications()}</div>
  );
}

export default Notify;
