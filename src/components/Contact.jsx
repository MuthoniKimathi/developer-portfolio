

// const Contact = () => {
//   return (
//     <section className="bg-black text-white py-12">
//       <div className="container mx-auto flex flex-col md:flex-row justify-between">
//         <div className="md:w-1/2 mb-8 md:mb-0">
//           <h2 className="text-3xl font-bold mb-4">Contact</h2>
//           <p className="text-gray-400 mb-8">
//             I would love to hear from you! Please fill out the form on the right to get in touch.
//           </p>
//         </div>
//         <form className="md:w-1/2 space-y-6">
//           <div>
//             <label htmlFor="name" className="block text-sm text-gray-400 mb-2">Name</label>
//             <input
//               type="text"
//               id="name"
//               className="w-full bg-black border-b border-gray-600 text-gray-400 focus:outline-none focus:border-white"
//             />
//           </div>
//           <div>
//             <label htmlFor="email" className="block text-sm text-gray-400 mb-2">Email</label>
//             <input
//               type="email"
//               id="email"
//               className="w-full bg-black border-b border-gray-600 text-gray-400 focus:outline-none focus:border-white"
//             />
//           </div>
//           <div>
//             <label htmlFor="message" className="block text-sm text-gray-400 mb-2">Message</label>
//             <textarea
//               id="message"
//               rows="4"
//               className="w-full bg-black border-b border-gray-600 text-gray-400 focus:outline-none focus:border-white"
//             ></textarea>
//           </div>
//           <div className="flex items-center justify-right mt-6">
//             <span className="text-gray-400">Send Message</span>
//             <div className="border-b border-gray-600 flex-1 ml-2"></div>
//           </div>
//         </form>
//       </div>
//     </section>
//   );
// };

// export default Contact;
const Contact = () => {
  return (
    <section className="bg-customGray text-white p-16">
      <div className="container mx-auto flex flex-col md:flex-row justify-between">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h2 className="text-4xl font-bold mb-4">Contact</h2>
          <p className="text-gray-400 mb-8">
           I would love to hear about your project and how i<br/>
           could help.Please fill out the form and I`ll get back <br/>
           to you as soon as possible.
          </p>
        </div>
        <form className="md:w-1/2 space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm text-gray-400 mb-2">NAME</label>
            <input
              type="text"
              id="name"
              className="w-full bg-customGray border-b border-gray-600 text-gray-400 focus:outline-none focus:border-white"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm text-gray-400 mb-2">EMAIL</label>
            <input
              type="email"
              id="email"
              className="w-full bg-customGray border-b border-gray-600 text-gray-400 focus:outline-none focus:border-white"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm text-gray-400 mb-2">MESSAGE</label>
            <textarea
              id="message"
              rows="4"
              className="w-full bg-customGray border-b border-gray-600 text-gray-400 focus:outline-none focus:border-white"
            ></textarea>
          </div>
          <div className="flex justify-end mt-6">
            <button 
              type="submit" 
              className="text-gray-400 relative hover:text-green-500"
            >
              SEND MESSAGE
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-transparent hover:bg-green-500 transition-all duration-300"></span>
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;

