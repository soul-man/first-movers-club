import React, { useEffect } from 'react';
import { gsap } from "gsap";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const Faq = () => {

  const Question = (props: any) => {
    const [isActive, setActive] = React.useState(false);
    const handleClick = () => {
      setActive(!isActive);
    };
    return (
      <div className="w-11/12 md:w-9/12 lg:w-8/12 xl:w-7/12 2xl:w-5/12 question-wrapper p-2 sm:p-3">
        <div className="question" id={props.id} onClick={() => handleClick()}>
          <h3 className="text-lg sm:text-xl md:text-3xl font-semibold">{props.question}</h3>
          <button>
            {isActive ? <IoIosArrowUp className="text-2xl" /> : <IoIosArrowDown className="text-2xl" />}
          </button>
        </div>
        <div className={(isActive ? "answer active" : "answer") + ' text-md sm:text-xl text-gray-200/90 pr-2 md:pr-10'}>
          {props.answer}
        </div>
      </div>
    );
  };  

  const Q1 = () => {
    return (
      <>
        <p className="mb-3">
        A Non-Fungible Token (NFT) is a digital asset that represents ownership or proof of authenticity 
        of a unique item or piece of content, typically stored on a blockchain. 
        </p>
        <p className="mb-3">
          Unlike cryptocurrencies such as Bitcoin or Ethereum, which are fungible and can be exchanged on a 
          one-to-one basis, each NFT is distinct and cannot be replicated or exchanged equivalently. 
        </p>
        <p>
          This uniqueness makes NFTs ideal for certifying ownership of digital and physical 
          items, including artwork, music, videos, virtual real estate, collectibles, and more.
        </p>
      </>
    );
  }; 
  
  const Q2 = () => {
    return (
      <>
        <p>
          Imagine you have a favorite picture on your computer. Normally, you can copy and share that picture with your 
          friends, and they can do the same. But with an NFT, it's like putting a magical lock on 
          your photo. When you have the NFT, you're the only one who can say, "I own this special 
          picture, and nobody else can have the real one."
        </p>
      </>
    );
  };

  const Q3 = () => {
    return (
      <>
        <p className="mb-3">
          People are using NFTs for all sorts of thing like digital art, collectibles, music and even 
          virtual real estate in video games. It's a way to show that you have something very unique and 
          rare in the digital world, just like having a rare toy or a special trading card in the physical world.
        </p>
        <p>
          But remember, unlike traditional assets, NFTs can be resold at any time on marketplaces like opensea.io.
        </p>
      </>
    );
  };

  const questions = [
    {
      id: 0,
      question: "What are NFTs?",
      answer: <Q1 />
    },
    {
      id: 1,
      question: "Ok can you tell me more?",
      answer: <Q2/>
    },
    {
      id: 2,
      question: "Why do people care about NFTs?",
      answer: <Q3/>
    }
  ];

  useEffect(() => {
    gsap.fromTo(".faq-anim-top", {
        y: -150,
        opacity: 0,
      }, {
        y: 0,
        opacity: 1,
        duration: 1,
        scrollTrigger: {
            trigger: ".faq-anim-trigger",
        }
      });

      gsap.fromTo(".faq-anim-bottom", {
        y: 150,
        opacity: 0,
      }, {
        y: 0,
        opacity: 1,
        duration: 1,
        scrollTrigger: {
            trigger: ".faq-anim-trigger",
        }
      });
}, []);
  
  return (
    <div id="frequently-asked-questions" className="bg-[#4247d7] flex flex-col py-14 md:py-28">
      <h2 className="
        faq-anim-top
        !leading-[2.7rem] 
        sm:!leading-[3.5rem] 
        md:!leading-[4.5rem] 
        lg:!leading-[4rem] 
        xl:!leading-[5.3rem] 
        2xl:!leading-[6rem] 
        text-center 
        text-5xl
        sm:text-5xl 
        md:text-6xl
        lg:text-6xl
        xl:text-7xl
        2xl:text-8xl
        font-bold 
        mb-2"
      >
        FAQ
      </h2>
      <p className="faq-anim-top text-center text-2xl text-white/70 mb-20">Frequently Asked Questions</p>
      <section className="faq faq-anim-bottom faq-anim-trigger">
        {questions.map((item: any, index: number) => (
          <Question key={index} question={item.question} answer={item.answer} />
        ))}
      </section>
    </div>
  );
};

export default Faq;
