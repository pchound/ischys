'use client';
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaTiktok } from 'react-icons/fa';

const SocialMediaBar = () => {
  const iconClass =
    'text-[#a47135] text-align:center hover:text-blue-400 transition-colors duration-200 text-xl';

  return (
    <div className="flex justify-center space-x-4 text-align:center p-3 rounded-lg">
      <a
        href="https://www.facebook.com/"
        target="_blank"
        rel="noopener noreferrer"
        className={iconClass}
        aria-label="Facebook"
      >
        <FaFacebookF />
      </a>
      <a
        href="https://twitter.com/"
        target="_blank"
        rel="noopener noreferrer"
        className={iconClass}
        aria-label="Twitter"
      >
        <FaTwitter />
      </a>
      <a
        href="https://www.instagram.com/"
        target="_blank"
        rel="noopener noreferrer"
        className={iconClass}
        aria-label="Instagram"
      >
        <FaInstagram />
      </a>
      <a
        href="https://www.youtube.com/"
        target="_blank"
        rel="noopener noreferrer"
        className={iconClass}
        aria-label="YouTube"
      >
        <FaYoutube />
      </a>
      <a
        href="https://www.tiktok.com/"
        target="_blank"
        rel="noopener noreferrer"
        className={iconClass}
        aria-label="TikTok"
      >
        <FaTiktok />
      </a>
    </div>
  );
};

export default SocialMediaBar;
