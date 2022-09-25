import React from 'react';

interface AvatarProps {
  avatar: string;
  firstName: string;
  lastName: string;
}

const Avatar = ({ avatar, firstName, lastName }: AvatarProps) => {
  return (
    <div className="flex items-center py-2 text-gray-700 dark:text-gray-100 font-medium rounded-lg">
      <img
        src={avatar}
        alt=""
        className="w-14 mr-2 aspect-square rounded-full"
      />
      <div className="flex flex-col">
        <strong className="text-md">Welcome {firstName}👋</strong>
        <span className="text-sm">{`${firstName} ${lastName}`}</span>
      </div>
    </div>
  );
};

export default Avatar;
