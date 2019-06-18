import React from "react"
import { Stack } from "office-ui-fabric-react"
import Title from "./title";
import Section from "./sections";
import SubSection from "./subSection";
import "./index.css"

const App: React.FunctionComponent = () => {
  return (
    <Stack className="App" gap={15}>
      <Title />
      <Section
        title="Work Experience"
        children={
          <React.Fragment>
            <SubSection
              title="Mueller Reports, Buffalo, NY"
              date="July 2018 – Present"
              subTitle="Software Developer"
              bulletPoints={[
                "Developed UX/UI for a complex web-application using ReactJS, JavaScript, HTML and CSS. Made custom components and libraries to achieve the desired brand standard",
                "Created APIs and business logic of the web application to get, store and edit information in the database. Also wrote SQL scripts and stored procedures to maintain and grow the database",
                "Used latest technology and best practices to develop software in an agile team environment where much importance is given to software design techniques and code reviews",
              ]}
            />
            <SubSection
              title="SeerNet Technologies, Milpitas, CA"
              date="June 2017 – August 2017"
              subTitle="Research Intern"
              bulletPoints={[
                "Designed and developed Machine Learning models like Decision Tree Classifier, SVM, Logistic Regression and Deep Learning models like Convolutional Neural Network, Recurrent Neural Network for the speech act recognition problem",
                "Built Recurrent Convolutional Neural Network model in Python (Tensorflow) which further increased the accuracy to 70.77% which is the state-of-the-art accuracy for the problem",
              ]}
            />
            <SubSection
              title="Mpiric Software, Ahmedabad, India"
              date="December 2015 – May 2016"
              subTitle="Software Developer Intern"
              bulletPoints={[
                "Responsible for designing the frontend technology of school administration software using Angular, Bootstrap, HTML, CSS and JavaScript",
                "Wrote and maintained SQL queries to fetch, store and manipulate data used by the web application",
                "Developed backend APIs using Java, C#, bash scripts and PostgreSQL database of a web app which takes the URL of any website and converts it into a hybrid Android/iOS application",
                "Reduced the time latency by 80% by redesigning CLIs and server module. Also, developed test cases which improved the quality and reliability of the website"
              ]}
            />
          </React.Fragment>
        }
      />

      <Section
        title="Technical Skills"
        children={
          <React.Fragment>
            <SubSection
              title="Areas"
              bulletPoints={[
                "Data Structures and Algorithms, Object Oriented Design, Deep Learning, Distributed Systems, Full Stack, Web Development, Agile"
              ]}
            />
            <SubSection
              title="Languages"
              bulletPoints={[
                "Java, Python, C, C++, PHP, C#.NET, Bash Script, Python, JavaScript"
              ]}
            />
            <SubSection
              title="Tools and Frameworks"
              bulletPoints={[
                "ASP.NET, ReactJS, Angular, HTML, CSS, Tensorflow, Tomcat, XML, REST, Git"
              ]}
            />
            <SubSection
              title="Database Solutions"
              bulletPoints={[
                "MS SQL Server, MySQL, PostgreSQL, NoSQL, MongoDB"
              ]}
            />
            <SubSection
              title="OS and Platform"
              bulletPoints={[
                "UNIX, Linux, Windows"
              ]}
            />
          </React.Fragment>
        }
      />
      <Section
        title="Education"
        children={
          <React.Fragment>
            <SubSection
              title="Master of Science – Computer Science"
              subTitle="University at Buffalo, The State University of New York, 2018"
              date="GPA - 3.584"
            />
            <SubSection
              title="Bachelor of Technology – Computer Engineering"
              subTitle="Dharmsinh Desai University, 2016"
            />
          </React.Fragment>
        }
      />

      <Section
        title="Projects"
        children={
          <React.Fragment>
            <SubSection
              title="Q&A Search Engine"
              date="September 2016 – November 2016"
              bulletPoints={[
                "Created a search engine that produces a one-word answer to the questions asked and retrieves relevant tweets from NoSQL database and renders it on to the UI",
                "Devised and executed an efficient way using Python and MongoDB to store more than 1 million tweets fetched using twitter API to keep the relevant information which reduced the data storage by 50%",
                "Researched and coded algorithms based on Natural Language Processing in Java for specific question types that helped mine the answer. Achieved an accuracy of more than 70% even from unorganized tweet data",
              ]}
            />
            <SubSection
              title="E-Yantra Project in Embedded – C"
              date="September 2014 – March 2015"
              bulletPoints={[
                "Led a team of four to build a bot that completed its task in record time to earn the runner-up title at a national level competition in which a total of 3107 teams participated from all over India",
                "Assembled and configured an automated line-follower bot that detects and correctly places the cargo that is unaligned",
                "Improvised and shaped Dijkstra’s algorithm to find the shortest path taking into account all the restrictions of the given arena like finding way through hurdles and keeping out of unwarranted areas"
              ]}
            />
          </React.Fragment>
        }
      />
    </Stack>
  )
}

export default App
