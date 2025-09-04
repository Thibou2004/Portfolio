import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import Navbar from "../components/Navbar";
import Skill from "../components/Skill";
import Project from "../components/Project";
import Footer from "../components/Footer";
export default function Home() {
  const form = useRef();
  const inputName = useRef();
  const inputEmail = useRef();
  const inputMessage = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    const confirmSend = confirm("Voulez-vous vraiment me contacter ?")

    if(!confirmSend)
      return;

    emailjs
      .sendForm('service_rx80lkm', 'template_n1lrktp', form.current, {
        publicKey: 'DD83K-5PeNNSn0yFx',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          inputName.current.value = ""
          inputEmail.current.value = ""
          inputMessage.current.value = ""
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  const arraySkill = [
     {
      logoClass: "fa-brands fa-html5",
      logoColor: "#e91e63",
      title: "Front-end", 
      array: [{Langages: "Javascript"}, {"Frameworks et Bliliothèques": "React"}, {"Intégration web": "HTML5, CSS3, Sass"}]
     },
     {
      logoClass: "fa-solid fa-database",
      logoColor: "#2229b4ff",
      title: "Back-end",
      array: [{"Langages et Frameworks": "Node.js (Express.js)"}, {"Base de Données": "MongoDB"}, {API: "Création d'API REST"}]
     },
     {
      logoClass: "fa-solid fa-wrench",
      logoColor: "#ffb600",
      title: "Outils",
      array: [{"Gestion de Version": "Git, Github"}, {Environnements: "Visual Studio Code, ChatGPT"}]
     }
  ]

  const arrayProject = [
    {
      title: "Application web de location immobilière",
      imgUrl: "/page_d-acceuil_application_immobilière.png",
      imgDescription: "Photo de la page d'acceuil de l'app web",
      repoUrl: "https://github.com/Thibou2004/Projet-5-openClassrooms.git",
      textPresentation: "Ce projet a été realisé dans le cadre d'une formation (openClassrooms)",
      webSiteUrl: "https://app-kasa.netlify.app/",
      array: [{"Langages et framweworks": "React, Sass"}]
    },
    {
      title: "Backend site de notation de livres",
      imgUrl: "/backend-site-notation-de-livre.png",
      imgDescription: "Photo d'un site de notation de livre",
      repoUrl: "https://github.com/Thibou2004/Projet-6-openClassrooms.git",
      textPresentation: "Ce projet a été realisé dans le cadre d'une formation (openClassrooms)",
      webSiteUrl: "https://github.com/Thibou2004/Projet-6-openClassrooms.git",
      array: [{"Langages et framweworks": "Node.js, Express.js"}, {"Base de données": "MongoDB"}]
    }
  ]
  
  return (
    <>
    <header>
        <Navbar />
        <section className="hero-section" id="presentation">
            <p>Bonjour,</p>
           <h1>
            <span>Je suis BAH THIBOU</span>
            <span>Développeur front-end</span>
           </h1>
           <div className="description">
            <p>Développeur web spécialisé dans le <strong>front-end (Javascript, React, Sass)</strong></p>
           <p>Je peux aussi intervenir pour <strong>déboguer du code</strong> et <strong>améliorer les performances</strong>.</p>
          </div>
            <div className="hero-container">
            <a href="#contact" className="contact-link hero-link">Me contacter</a>
            <a href="/CV_BAH-Thibou.pdf" className="cv-link hero-link" target="_blank">Télécharger mon CV</a>
           </div>
        </section>
    </header>
    <main>
        <section id="skills">
            <h2>Compétences</h2>
            <div className="container-skills">
                {arraySkill.map((el, index) => (
                  <Skill 
                  key={index}
                  logoClass={el.logoClass}
                  logoColor={el.logoColor}
                  title={el.title}
                  array={el.array}
                  />
                ))}
            </div>
         </section>
         <section id="projects">
            <h2>Projets</h2>
            <div className="container-projects">
                {arrayProject.map((el, index) => (
                  <Project
                  key={index}
                  title={el.title}
                  imgUrl={el.imgUrl}
                  imgDescription={el.imgDescription}
                  repoUrl={el.repoUrl}
                  textPresentation={el.textPresentation}
                  webSiteUrl={el.webSiteUrl}
                  array={el.array}
                  />
                ))}
            </div>
         </section>
         {/* <section id="about">
           <p>Je recherche actuellement un contrat en alternance. Je souhaite évoluer en tant que développeur et mettre en pratique les compétences que je développerai au fil des projets.</p>
         </section> */}
         <section id="contact">
            <h2>Contactez moi !</h2>
            <form ref={form} onSubmit={sendEmail} className="contact-form">
            <div className="input-group">
                <label htmlFor="user_name">Nom :</label>
                <input type="text" name="user_name" id="user_name" ref={inputName} />
            </div>
            <div className="input-group">
                <label htmlFor="user_email">Email :</label>
                <input type="email" name="user_email" id="user_email" ref={inputEmail} />
            </div>
            <div className="input-group">
                <label htmlFor="user_message">Message :</label>
                <textarea name="message" id="user_message" style={{width: "100%"}} ref={inputMessage} />
            </div>
            <button type="submit" 
            value={"Envoyer"}
            className="submit"
            >Envoyer</button>
            </form>
         </section>
    </main>
    <Footer />
    </>
  )
}