import React, { useState } from 'react';
import "../Style/Faq.css";
import faq1 from "../Assets/img/f1.svg";
import plus from "../Assets/img/plus.svg";
import minus from "../Assets/img/minus.svg";

const Faq = () => {
  const faqData = [
    {
      question: "What is an Independent living?",
      answer: "Our independent living Villas are designed for residents who are still active, able and require very little in the way of assistance. Residents have all the comforts of home, while enjoying the companionship, social life and security, medical support that comes with our wonderful community living",
    },
    {
        question: "Any social activities in the community?",
        answer: "Our independent living Villas are designed for residents who are still active, able and require very little in the way of assistance. Residents have all the comforts of home, while enjoying the companionship, social life and security, medical support that comes with our wonderful community living",
      },
      {
        question: "How much it will cost me for food?",
        answer: "Our independent living Villas are designed for residents who are still active, able and require very little in the way of assistance. Residents have all the comforts of home, while enjoying the companionship, social life and security, medical support that comes with our wonderful community living",
      },
      {
        question: "Can I have family and friends stay over?",
        answer: "Our independent living Villas are designed for residents who are still active, able and require very little in the way of assistance. Residents have all the comforts of home, while enjoying the companionship, social life and security, medical support that comes with our wonderful community living",
      },
      {
        question: "Can I WILL it to my son / daughter?",
        answer: "Our independent living Villas are designed for residents who are still active, able and require very little in the way of assistance. Residents have all the comforts of home, while enjoying the companionship, social life and security, medical support that comes with our wonderful community living",
      },
      {
        question: "What about Security?",
        answer: "Our independent living Villas are designed for residents who are still active, able and require very little in the way of assistance. Residents have all the comforts of home, while enjoying the companionship, social life and security, medical support that comes with our wonderful community living",
      },
  ];

  const [openIndex, setOpenIndex] = useState(0); // Set the first question as open by default

  const toggleQuestion = (index) => {
    setOpenIndex(index);
  };

  return (
    <div>
      <div className="faq-index">
        <div className="faq-main">
          <div className="faq-left">
            <h1>Frequently Asked Questions</h1>
            {faqData.map((faq, index) => (
              <div key={index} className={`faq-question ${openIndex === index ? 'open' : ''}`}>
                <div className="question" onClick={() => toggleQuestion(index)}>
                  <h2>{faq.question}</h2>
                  <img src={openIndex === index ? minus : plus} alt="" />
                </div>
                {openIndex === index && (
                  <div className="answer">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="faq-right">
            <img src={faq1} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
