import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleDarkMode } from '../../redux/actions';

function DarkModeToggle() {
  const dispatch = useDispatch();
  const isDarkMode = useSelector((state) => state.settings.isDarkMode);

  const handleToggle = () => {
    dispatch(toggleDarkMode());
  };

  return (
    <div>
      <label>
        Dark Mode
        <input type="checkbox" checked={isDarkMode} onChange={handleToggle} />
      </label>
    </div>
  );
}

export default DarkModeToggle;
