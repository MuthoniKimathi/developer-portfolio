import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { SiFrontendmentor } from 'react-icons/si';
function Footer() {
  return (
    
    <div className="bg-customGray text-white p-16 flex flex-col md:flex-row justify-between items-center ">
      <div className="text-2xl font-bold mb-4 md:mb-0">
        adamKeyes
      </div>
      <div className="flex space-x-4">
        <a href="https://github.com/adamkeyes" className="text-white hover:text-gray-400">
            <FaGithub size={24} />
          </a>
          <a href="https://www.frontendmentor.io/profile/adamkeyes" className="text-white hover:text-gray-400">
            <SiFrontendmentor size={24} />
          </a>
          <a href="https://www.linkedin.com/in/adamkeyes" className="text-white hover:text-gray-400">
            <FaLinkedin size={24} />
          </a>
         
          <a href="https://twitter.com/adamkeyes" className="text-white hover:text-gray-400">
            <FaTwitter size={24} />
          </a>
          
        </div>
    </div>
  )
}

export default Footer