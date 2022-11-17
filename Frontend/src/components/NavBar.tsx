import React, { useEffect, useState } from 'react';
import LogoutBtn from './LogoutBtn';
import ShowBalance from './ShowBalance';
import '../styles/navbar.css';

function NavBar() {
  const [username, setUsername] = useState();

  useEffect(() => {
    const getUsername = async () => {
      const userData = localStorage.getItem('user');

      if (userData) {
        const useData = JSON.parse(userData);

        setUsername(useData.username);
      }
    };
    getUsername();
  }, []);
  return (
    <header>
      <div className="infos-navbar">
        <svg
          id="ff9bdafa-ff9a-4cb0-bbd8-b34da612ef09"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 96 62.74"
        >
          <path
            d="M23.79,3.58l-2.61,7.29c-1.37,3.9-2.92,8.49-5.13,15.29l5-21.11L17,3.59,5.15,36.28,8,37.38l2.6-7.28c1.37-3.75,2.83-8.16,5.12-15.22l-5,21,4,1.47L26.68,4.68Z"
            fill="#fff"
          />
          <path
            d="M31,18.44,25.52,33.58a10.59,10.59,0,0,1-2.17.72,3.18,3.18,0,0,1,.19-.77L32.46,8.87c.82-2.21,1.22-2.21,1.54-2.21s.64.09.64.83a11.57,11.57,0,0,1-.85,3.23l-.31.81,3,1.09.24-.72a13.46,13.46,0,0,0,1-4.6,3.76,3.76,0,0,0-1-2.69,3.45,3.45,0,0,0-2.58-1,3.78,3.78,0,0,0-2.9,1.21,11.68,11.68,0,0,0-2.17,4L20.5,32.49c-.64,1.79-.67,3.18-.07,4a2.09,2.09,0,0,0,1.81.84c1.39,0,2.16-.87,3.81-2.77l2.19.78L34,19.53Z"
            fill="#fff"
          />
          <polygon
            points="31.96 36.19 35.25 37.38 37.71 30.66 34.43 29.48 31.96 36.19"
            fill="#fff"
          />
          <path
            d="M45.94,32.09c-.82,2.22-1.22,2.22-1.54,2.22s-.64-.1-.64-.83a11.35,11.35,0,0,1,.86-3.24L52.36,8.87c.83-2.21,1.23-2.21,1.55-2.21s.63.09.63.83a11.57,11.57,0,0,1-.85,3.23l-.3.81,3,1.09.24-.72a13.5,13.5,0,0,0,1-4.6,3.8,3.8,0,0,0-1-2.69,3.48,3.48,0,0,0-2.58-1,3.75,3.75,0,0,0-2.9,1.21,11.51,11.51,0,0,0-2.18,4L42.36,27.1c-1.49,4.14-1.64,5.13-1.64,6.57a3.76,3.76,0,0,0,1,2.68,3.43,3.43,0,0,0,2.58,1,3.79,3.79,0,0,0,2.9-1.22,11.54,11.54,0,0,0,2.18-4l1-2.88-3-1Z"
            fill="#fff"
          />
          <path
            d="M76.83,8.87c.82-2.21,1.22-2.21,1.54-2.21s.64.09.64.83a11.3,11.3,0,0,1-.86,3.23l-.3.81,3,1.09.25-.72a13.46,13.46,0,0,0,1-4.6,3.8,3.8,0,0,0-1-2.69l-.18-.17,1.21-3.35L79.14,0,77.82,3.67a3.79,3.79,0,0,0-2.08,1,7.67,7.67,0,0,0-1.9,3.14C72.69,11,72.32,15.85,72,20.58c-.33,4.56-.65,8.87-1.61,11.51-.83,2.22-1.23,2.22-1.55,2.22s-.63-.1-.63-.83A11.57,11.57,0,0,1,69,30.25l.31-.81-3-1.1-.24.73a13.46,13.46,0,0,0-1,4.6A3.91,3.91,0,0,0,66,36.25l-1.19,3.27,3,1.09L69,37.34a3.92,3.92,0,0,0,2.47-1,7.57,7.57,0,0,0,1.91-3.14c1.15-3.17,1.51-8.07,1.86-12.8l-.18,0h.18C75.55,15.82,75.87,11.52,76.83,8.87Z"
            fill="#fff"
          />
          <polygon
            points="93.01 3.59 87.42 19.01 85.42 19.01 90.61 4.68 87.62 3.59 75.74 36.29 78.73 37.38 84.32 22.05 86.32 22.05 81.14 36.29 84.13 37.38 96 4.68 93.01 3.59"
            fill="#fff"
          />
          <path
            d="M65.39,3.6,51,36.28l3,1.09,6.47-15.32H61.6L57.38,36.3l3,1.08L69.65,5.16ZM62.78,19H61.5L66.24,7.45l.2.08L62.84,19Z"
            fill="#fff"
          />
          <polygon
            points="10.85 57.16 21.97 56.5 89.8 49.42 89.64 46.49 0.16 46.49 0.16 49.42 40.65 49.42 79.87 48.62 50.22 50.61 0 55.85 0.07 58.79 71.34 62.74 71.51 59.82 21.97 57.07 10.85 57.16"
            fill="#fff"
          />
        </svg>
        <div className="balance-user">
          <ShowBalance />
          <span className="navbar_span">{username}</span>
        </div>
        <LogoutBtn />
      </div>
    </header>
  );
}

export default NavBar;