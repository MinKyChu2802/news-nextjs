import { useState, useLayoutEffect } from 'react';
import moment from 'moment';

/**
 * check size screen
 * @returns
 */
export const useWindowSize = () => {
  const [size, setSize] = useState(0);
  useLayoutEffect(() => {
    const updateSize = () => {
      setSize(window.innerWidth);
    };
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);
  return size;
};

/**
 *
 * Format published date
 * @param {*} date
 * @returns
 */
export const formatDate = (date) => {
  return moment(date).format('dddd, DD MMM YYYY');
};
