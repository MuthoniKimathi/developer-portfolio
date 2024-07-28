

// const skills = [
//   { name: 'HTML', years: '4 Years Experience' },
//   { name: 'CSS', years: '4 Years Experience' },
//   { name: 'JavaScript', years: '4 Years Experience' },
//   { name: 'Accessibility', years: '4 Years Experience' },
//   { name: 'React', years: '3 Years Experience' },
//   { name: 'Sass', years: '3 Years Experience' },
// ];

// const Skills = () => {
//   return (
//     <section className="bg-black text-white py-8">
//       <div className="max-w-6xl mx-auto px-4">
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//           {skills.map((skill) => (
//             <div key={skill.name} className="text-center">
//               <h3 className="text-2xl font-semibold">{skill.name}</h3>
//               <p className="text-sm text-gray-400">{skill.years}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Skills;

const skills = [
  { name: 'HTML', years: '4 Years Experience' },
  { name: 'CSS', years: '4 Years Experience' },
  { name: 'JavaScript', years: '4 Years Experience' },
  { name: 'Accessibility', years: '4 Years Experience' },
  { name: 'React', years: '3 Years Experience' },
  { name: 'Sass', years: '3 Years Experience' },
];

const Skills = () => {
  return (
    <section className="bg-black text-white p-16" >
      <div className="max-w-6xl mx-auto px-4">
        <hr className="border-gray-600 mb-8" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill) => (
            <div key={skill.name} className="text-center">
              <h3 className="text-2xl font-semibold">{skill.name}</h3>
              <p className="text-sm text-gray-400">{skill.years}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
