import {
  SubjectCard,
  computerNetwork,
  differentialEquations,
  calculus,
  electronics,
  cyberSecurity,
  ai,
  toc,
  database,
  coa,
} from "../assets/assets";

const subjects = [
  {
    name: 'Differenital Equations',
    iconRef: differentialEquations,



  },
  {
    name: 'Computer Network',
    iconRef: computerNetwork

  },
  {
    name: 'Calculus and Statistical Analysis',
    iconRef: calculus,


  },
  {
    name: 'Basics of Electronics Engineering',
    iconRef: electronics,

  },
  {
    name: 'Cyber Security',
    iconRef: cyberSecurity,

  },
  {
    name: 'Artificial Intelligence',
    iconRef: ai,

  },
  {
    name: 'COA',
    iconRef: coa,

  },
  {
    name: 'TOC',
    iconRef: toc,

  },
  {
    name: 'DBMS',
    iconRef: database,

  },

]



const Subjects = () => {
  return (
    <div className=" h-screen pt-20 ">
      <h1 className="text-center font-semibold pt-5 text-6xl mt-3 underline decoration-[#FCE38A]">Subjects</h1>
      <div className="grid grid-cols-3 max-w-6xl mx-auto gap-10 mt-20">
        {subjects.map((subject, index) => (
          <SubjectCard subject={subject} key={index} />
        ))}
      </div>
    </div>

  )
}
export default Subjects;


// {/* <div className=" border-4 border-blue-400 text-center font-semibold pt-5  text-5xl">Subjects
//             </div>
//             <div className="border border-3 border-red-600">
//             {/* subjects div */}
//             <div className="">Modern And Computational Physics </div>
//             <div>Differenital Equations </div>
//             <div>Calculus and Statistical Analysis</div>
//             <div>Basics of Electronics Engineering </div>
//             <div>DBMS </div>
//             <div>TOC </div>
//             <div>Cyber Security </div>
//             <div>Artificial Intelligence </div>
//             <div>Computer Networks </div>
//             <div>COA </div>
//             </div> */}
