export default function Project({title, imgUrl, imgDescription, repoUrl, textPresentation, webSiteUrl, array}) {
  return (
    <section className="project">
        <h3>{title}</h3>
        <a href={webSiteUrl} target="_blank" rel="noopener noreferrer">
        <img src={imgUrl} alt={imgDescription}
        />
        </a>
        <p>{textPresentation}</p>
        <ul>
        {array.map((el, i) => {
            const key = Object.keys(el)[0];
            return (
              <li key={i}><span className="bold">{key} :</span> {el[key]}</li> 
            )
        })}
        <li className="github-li"><span className="bold">Lien github :</span> <a href={repoUrl} className="github_link"><i class="fa-brands fa-github"></i></a></li>
        </ul>
     </section>
  )
}