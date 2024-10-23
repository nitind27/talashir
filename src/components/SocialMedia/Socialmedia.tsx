import React from 'react';
import { SocialIcon } from 'react-social-icons';

const Socialmedia = () => {
  return (
    <div className="flex flex-row space-x-2">
      <SocialIcon url="https://twitter.com" className="hover:opacity-75" style={{ height: 30, width: 30 }} />
      <SocialIcon url="https://facebook.com" className="hover:opacity-75" style={{ height: 30, width: 30 }} />
      <SocialIcon url="https://instagram.com" className="hover:opacity-75" style={{ height: 30, width: 30 }} />
    </div>
  );
}

export default Socialmedia;