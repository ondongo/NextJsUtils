'use client';
import { AvatarComponent } from 'avatar-initials';
import React from 'react';

function page() {
  const userName = 'Gloire ODG';

  const initials = userName
    .split(' ')
    .map((namePart) => namePart[0])
    .join('');

  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <AvatarComponent
          classes="rounded-full"
          useGravatar={false}
          size={44}
          color="white"
          background="#4EBEA4"
          fontSize={16}
          fontWeight={400}
          offsetY={24}
          initials={initials}
        />
      </div>
    </>
  );
}

export default page;
