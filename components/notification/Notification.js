import React from 'react';
import NotificationsIcon from '@mui/icons-material/Notifications';
import styled from 'styled-components';

const StyledNotification = styled.div`
  position: relative;
  border-radius: 50%;
  padding: 8px;
  .notify-icon {
    font-size: 2rem;
    color: #34b3f1;
  }
`;

const StyledNumberNotify = styled.div`
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #f15412;
  position: absolute;
  top: 0;
  right: 10px;
  font-size: 16px;
  font-weight: 600;
`;

const Notification = (props) => {
  const { notify } = props;

  return (
    <StyledNotification>
      <NotificationsIcon className="notify-icon" />
      <StyledNumberNotify>{notify}</StyledNumberNotify>
    </StyledNotification>
  );
};

export default Notification;
