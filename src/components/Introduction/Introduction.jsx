import React from "react";
import "./Introduction.scss";
import BigIdea from "../../images/the big idea 1.png";
import SittingPretty from "../../images/sitting-pretty.png";
import Them from "../../images/them.png";
import DeepThoughts from '../../images/deep-thoughts.png'


const Introduction = () => {

    const questions = [
        {
            id: 1,
            question: 'Can I work on a project I started before the hackathon?'
        }, 

        {
            id: 2,
            question: 'What happens if I need help during the hackathon?'
        }, 

        {
            id: 3,
            question: "What happens if I don't have an idea for a project?"
        }, 

        {
            id: 4,
            question: 'Can I join a team or do I have to come with one?'
        }, 

        {
            id: 5,
            question: 'What happens after the hackathon ends'
        }, 

        {
            id: 6,
            question: 'Can I work on a project I started before the hackathon?'
        }, 
    ]

  return (
    <article className="intro">
      <section className="bigIdea section">
        <img src={BigIdea} alt="bigIdea" />
        <div className="bigIdeacontent content">
          <h1>
            Introduction to getlinked <span>tech Hackathon 1.0</span>
          </h1>
          <p>
            Our tech hackathon is a melting pot of visionaries, and its purpose
            is as clear as day: to shape the future. Whether you're a coding
            genius, a design maverick, or a concept wizard, you'll have the
            chance to transform your ideas into reality. Solving real-world
            problems, pushing the boundaries of technology, and creating
            solutions that can change the world, that's what we're all about!
          </p>
        </div>
      </section>

      <section className="section rules" id="overview">
        <div className="rulesContent content">
          <h2>
            Rules and <span>Guidelines</span>
          </h2>
          <p>
            Our tech hackathon is a melting pot of visionaries, and its purpose
            is as clear as day: to shape the future. Whether you're a coding
            genius, a design maverick, or a concept wizard, you'll have the
            chance to transform your ideas into reality. Solving real-world
            problems, pushing the boundaries of technology, and creating
            solutions that can change the world, that's what we're all about!
          </p>
        </div>

        <img src={SittingPretty} alt="lady" />
      </section>

      <section className="section criteria">
        <img src={Them} alt="them" />

        <div className="criteriaContent">
          <h2>
            Judging Criteria <span>Key attributes</span>
          </h2>
          <p>
            <span>Innovation and Creativity</span>:Evaluate the uniqueness and
            creativity of the solution. Consider whether it addresses a
            real-world problem in a novel way or introduces innovative features.
          </p>

          <p>
            <span>Functionality: </span>Assess how well the solution works. Does it perform its intended functions effectively and without major issues? Judges would consider the completeness and robustness of the solution.
          </p>
          <p>
            <span>Impact and Relevance:</span>Determine the potential impact of the solution in the real world. Does it address a significant problem, and is it relevant to the target audience? Judges would assess the potential social, economic, or environmental benefits.
          </p>
          <p>
            <span>Technical Complexity:</span> Evaluate the technical sophistication of the solution. Judges would consider the complexity of the code, the use of advanced technologies or algorithms, and the scalability of the solution.
          </p>
          <p>
            <span>Adherence to Hackathon Rules:</span> Judges will Ensure that the team adhered to the rules and guidelines of the hackathon, including deadlines, use of specific technologies or APIs, and any other competition-specific requirements.
          </p>

          <button className="primaryBtn">Read More</button>
        </div>
      </section>

      <section className="section faq" id="faq">
        <div className="faqContent">
            <h2>Frequently Ask<span>Question</span></h2>
            <p className="faqText">We got answers to the questions that you might want to ask about getlinked Hackathon 1.0</p>

            <div className="qna">
                {
                    questions.map(item =>(
                        <div className="qBox" key={item.id}>
                            <p className="questionss">{item.question}</p>
                            <span>+</span>
                        </div>
                    ))
                }
            </div>
        </div>
        <div className="imgWrapper">

        <img src={DeepThoughts} alt="deep-thoughts" />
        <h3 className="s1">?</h3>
        <h3 className="s2">?</h3>
        <h3 className="s3">?</h3>
        </div>
      </section>
    </article>
  );
};

export default Introduction;
