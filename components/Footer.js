// components/Footer.js
import { useMediaQuery, Button } from '@mui/material';

const Footer = () => {
  const isMobile = useMediaQuery('(max-width: 768px)');

  return (
    <footer className="bg-white py-6 text-center">
      <div className="flex justify-center items-center">
        {/* MRK Logo */}
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
      </div>

      <div className="mt-4">
        <Button href="https://github.com/mohitkamblework" target="_blank" className="hover:underline">
          GitHub
        </Button>
        <Button href="https://linkedin.com/in/mohitravindrakamble" target="_blank" className="hover:underline">
          LinkedIn
        </Button>
        <Button href="https://public.tableau.com/profile/mohit.kamble" target="_blank" className="hover:underline">
          Tableau
        </Button>
      </div>

      <p className="text-gray-600 mt-4">&copy; 2024 Mohit Ravindra Kamble. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
