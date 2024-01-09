import React from 'react';
import config from '../../config.json';

export const Ps1 = () => {
  return (
    <div>
      <span className="text-[#FF1E00] dark:text-[#FF1E00]">
        {config.ps1_username}
      </span>
      <span className="text-[#59CE8F] dark:text-[#59CE8F]">@</span>
      <span className="text-[#00ADB5] dark:text-[#00ADB5]">
        {config.ps1_hostname}
      </span>
      <span className="text-[#59CE8F] dark:text-[#59CE8F]">:$ ~ </span>
    </div>
  );
};

export default Ps1;
