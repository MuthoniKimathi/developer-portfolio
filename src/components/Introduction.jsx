

// import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

// const Introduction = () => {
//   return (
//     <section>
//       <div className="bg-black text-white p-4 flex flex-col md:flex-row justify-between items-center">
//         <div className="text-2xl font-bold mb-4 md:mb-0">
//           adamKeyes
//         </div>
//         <nav>
//           <ul className="flex space-x-4">
//             <li>
//               <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-green-500">
//                 <FaGithub size={12} />
//               </a>
//             </li>
//             <li>
//               <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-green-500">
//                 <FaLinkedin size={12} />
//               </a>
//             </li>
//             <li>
//               <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-green-500">
//                 <FaTwitter size={12} />
//               </a>
//             </li>
//           </ul>
//         </nav>
//       </div>
      
//       <div className="bg-black text-white p-4 flex flex-col md:flex-row items-center md:items-start">
//         <div className="md:w-3/4 mb-8 md:mb-0">
//           <h1 className="text-5xl font-bold mb-4">Nice to meet you! <br /> I’m Adam Keyes.</h1>
//           <p className="text-xl mb-6">
//             Based in the UK, I’m a front-end developer <br /> passionate about building accessible web apps<br/>  that users love.
//           </p>
//         </div>
//         <div className="md:w-1/4 flex">
//           <img 
//             src="../src/assets/images/portfolioimage1.svg" 
//             alt="Adam Keyes" 
//             className="bg-slate-800 w-64 h-64 md:w-80 md:h-80 object-cover"
//           />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Introduction;






import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';
import { SiFrontendmentor } from 'react-icons/si';
import portfolioImage1 from '../assets/images/portfolioimage1.svg';

const Introduction = () => {
  return (
    <section className="relative min-h-screen flex flex-col bg-black text-white px-16 py-4">
      <div className="flex justify-between items-center w-full md:px-8 relative z-10">
        <h2 className="text-2xl font-bold hidden md:block">adamkeyes</h2>
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
      <div className="flex flex-col md:flex-row py-20 px-16 w-full mt-8 md:mt-0">
        <div className="lg:w-2/3 md:text-left md:w-2/3 relative z-10">
          <h1 className="text-5xl md:text-5xl lg:text-7xl font-bold leading-tight">
            Nice to meet you!<br />I`m Adam Keyes.
          </h1>
          <p className="text-xl md:text-xl lg:text-2xl mt-4 leading-relaxed">
            Based in the UK, I`m a front-end developer<br /> passionate about building accessible web apps<br /> that users love.
          </p>
        </div>
        <div className="relative lg:w-1/3 md:w-1/3 -mt-20 md:-mt-28 lg:-mt-40 z-0">
          <img src={portfolioImage1} alt="Adam Keyes" className="absolute top-0 right-0 w-full bg-customGray py-0 " />
        </div>
      </div>
      <a
        href="#contact"
        className="absolute bottom-4 left-4 px-16 text-lg font-bold text-white-500 hover:text-green-500 underline underline-offset-2 decoration-green-500"
      >
        CONTACT ME
      </a>
    </section>
  );
};

export default Introduction;







