// components/Header.js
import { useMediaQuery, Button } from '@mui/material';

const Header = () => {
  const isMobile = useMediaQuery('(max-width: 768px)');

  return (
    <header className="bg-white shadow-lg p-4 fixed w-full top-0 z-10 flex justify-between items-center">
      <div className="flex items-center mx-auto">
        {/* Clean MRK Logo (No Square Outline) */}
        <svg
          width={isMobile ? "40" : "60"}
          height={isMobile ? "40" : "60"}
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
        >
          <text
            x="10"
            y="50"
            fill="url(#grad1)"
            fontFamily="Arial, Helvetica, sans-serif"
            fontSize={isMobile ? "35" : "55"}
            fontWeight="bold"
          >
            MRK
          </text>
          <defs>
            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: "#2196F3", stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: "#21CBF3", stopOpacity: 1 }} />
            </linearGradient>
          </defs>
        </svg>

        <h1 className={`ml-4 ${isMobile ? "text-xl" : "text-2xl"} font-bold`}>
          Mohit Ravindra Kamble
        </h1>
      </div>

      {/* Navigation Links (Right-aligned) */}
      <nav className="flex space-x-6">
        <Button href="https://github.com/mohitkamblework" target="_blank" className="hover:underline">
          GitHub
        </Button>
        <Button href="https://linkedin.com/in/mohitravindrakamble" target="_blank" className="hover:underline">
          LinkedIn
        </Button>
        <Button href="https://public.tableau.com/profile/mohit.kamble" target="_blank" className="hover:underline">
          Tableau
        </Button>
      </nav>
    </header>
  );
};

export default Header;
