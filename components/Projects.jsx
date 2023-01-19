import Image from "next/image";
import Link from "next/link";
import React from "react";

import ProjectsItem from "./ProjectsItem";

function Projects() {
  const h2 = "What I've Built";
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="py-4 uppercase text-xl tracking-widest text-[#5651e5]">
          Projects
        </p>
        <h2 className="py-5">{h2}</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectsItem
            title="Functional Chat"
            backgroundImg="/assets/projects/chat.png"
            projectURL="https://boomerland-private-chat.netlify.app/"
            overview="A functional chat application, made with Nextjs and firebase, allows users to login and send chats to other users and chat groups in real time, showing the time the message was sent."
            tecnologys="Nextjs, Firebase, TailwindCSS"
            deploy="true"
          />
          <ProjectsItem
            title="Netflix Clon"
            backgroundImg="/assets/projects/netflix.png"
            projectURL="https://netflix-clon-dun.vercel.app"
            overview="A netflix clone made with nextjs, typescript and tailwind CSS, made with the help of a movie API with which I can show the different trends, genres and other options."
            tecnologys="Nextjs, TailwindCSS"
            deploy="true"
          />
          <ProjectsItem
            title="Chat con IA"
            backgroundImg="/assets/projects/text.png"
            projectURL="https://chat-openai.netlify.app"
            overview="A chat application in which you can ask questions that will be answered with the help of the OpenAI api, is made with Nextjs and is based on the gp3 model with which ChatGPT works."
            tecnologys="Nextjs, Firebase, TailwindCSS"
            deploy="true"
          />
          <ProjectsItem
            title="CryptoTracker"
            backgroundImg="/assets/projects/criptos.png"
            projectURL="https://angular-cryptomonedas.vercel.app"
            overview="An Angular application that can check prices and other data on cryptocurrencies with the help of an external API, has a search engine that filters cryptocurrencies."
            tecnologys="Angular, TailwindCSS"
            deploy="true"
          />
          <ProjectsItem
            title="Popetas Inventory"
            backgroundImg="/assets/projects/popetas.png"
            projectURL="https://crud-angular-firebase-5c874.web.app"
            overview="An application made for managing the inventory of a microenterprise in my city, which allows the user to do CRUD of all their products that they have in the two branches of their business."
            tecnologys="Angular, Firebase, TailwindCSS"
            deploy="true"
          />
          <ProjectsItem
            title="Login With Auth0"
            backgroundImg="/assets/projects/auth.webp"
            projectURL="https://github.com/JohanLeon0914/auth0Login"
            overview="A login made with the Auth0 library and deployed with NodeJS, which allows the user to log in with google and be able to give and remove session permissions and provide user registration. With which he has developed other projects taking this as a basis for managing sessions and records within the applications."
            tecnologys="React, NodeJS, Auth0"
          />
          <ProjectsItem
            title="Dating App"
            backgroundImg="/assets/projects/citas.png"
            projectURL="https://github.com/JohanLeon0914/rentClient"
            overview="Fullstack application which was made using Reactjs for the frontend and Nodejs for the backend, where a dating app is simulated with the possibility of logging in with google and seeing the other people who have registered on the page and sending requests for email appointments within the platform."
            tecnologys="React, NodeJS, MySQL"
          />
          <ProjectsItem
            title="Stripe Project"
            backgroundImg="/assets/projects/stripe.webp"
            projectURL="https://github.com/JohanLeon0914/stripe-react"
            overview="Website made in react and the use of a library called stripe, which allowed me to implement a credit card payment manager in different applications that I have created. It helps me to verify if a credit card is authentic."
            tecnologys="React, Stripe"
          />
          <ProjectsItem
            title="Movies API"
            backgroundImg="/assets/projects/movie.jpg"
            projectURL="https://github.com/JohanLeon0914/MoviesReact"
            overview="Website made in react in which a movie API is consumed, where you can filter these by genre and search for a specific one, it also has a detail section for each of the movies with all the information provided by the movie. API about it, such as its release date, cast, etc."
            tecnologys="React"
          />
          <ProjectsItem
            title="CryptoBot"
            backgroundImg="/assets/projects/bot.png"
            projectURL="https://github.com/JohanLeon0914/frontend-cryptobot"
            overview="A telegram bot that allows users to track the cryptocurrencies of their preferences, so that the bot could send them news and price updates from time to time."
            tecnologys="Nextjs, Firebase, Nodejs, TailwindCSS"
          />
          
        </div>
      </div>
    </div>
  );
}

export default Projects;
