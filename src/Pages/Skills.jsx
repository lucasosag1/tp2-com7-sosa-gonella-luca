import SkillCard from "../Componentes/SkillCard"

const habilidades = ["java", "react", "git", "node.js", "html", "css"];


const Skills = () => {
  return (
    <div>

    <h1>habilidades</h1>
    <div className="skills-card">
      {habilidades.map((habilidad)=>(
        <SkillCard key={habilidad} nombre={habilidad}/>
      ))}
    </div>



      
    </div>
  )
}

export default Skills
