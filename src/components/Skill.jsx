import LogoSkill from "./logoSkill";

export default function Skill({logoClass, logoColor, title, array}) {
  return (
     <section className="skill-info">
          <header>
          <LogoSkill logoClass={logoClass} styleLogo={logoColor}/>
          <h3>{title}</h3>
          </header>
          {array.map((el, i) => { 
            const key = Object.keys(el)[0];
            return (
              <p key={i}><span className="bold">{key} :</span> {el[key]}</p> 
            )
          })}
      </section>
  )
}