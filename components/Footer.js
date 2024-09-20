// components/Footer.js
import { useMediaQuery, Button } from '@mui/material';

const Footer = () => {
  const isMobile = useMediaQuery('(max-width: 768px)');

  return (
    <footer className="bg-white py-6 text-center">
      <div className="flex justify-center items-center">
        {/* MRK Logo */}
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
