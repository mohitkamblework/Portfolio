// components/Header.js
import { useMediaQuery, Button } from '@mui/material';

const Header = () => {
  const isMobile = useMediaQuery('(max-width: 768px)');

  return (
    <header className="bg-white shadow-lg p-4 fixed w-full top-0 z-10 flex justify-between items-center">
      <div className="flex items-center mx-auto">
        {/* Clean MRK Logo (No Square Outline) */}
      
        <h1 className={` ${isMobile ? "text-xl" : "text-2xl"} font-bold`}>
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
