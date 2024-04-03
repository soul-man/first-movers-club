import React from 'react';
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
        <div className={(isActive ? "answer active" : "answer") + ' text-lg sm:text-xl text-gray-400/90 pr-10'}>
          {props.answer}
        </div>
      </div>
    );
  };  

  const Q1 = () => {
    return (
      <>
        <p className="mb-3">
          NFT stands for "Non-Fungible Token." Think of it like a special, one-of-a-kind digital certificate for 
          something you really like.
        </p>
        <p>
          It's like having a digital badge that says, "This is the only one in the whole world." Of course the 
          image can be copied, but there is always the possibility of checking the original.
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

  const Q4 = () => {
    return (
      <>
        <p className="mb-3">
          ...
        </p>
      </>
    );
  };

  const Q5 = () => {
    return (
      <>
        <p className="mb-3">
        ....
        </p>
        
      </>
    );
  };

  const questions = [
    {
      id: 0,
      question: "What is a NFT?",
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
    },
    {
      id: 3,
      question: "...and the First Movers are NFTs?",
      answer: <Q4/>
    },
    {
      id: 4,
      question: "Give me some key facts!",
      answer: <Q5/>
    }
  ];
  


  return (
    <div id="frequently-asked-questions" className="bg-[#2cbd21] flex flex-col py-20">
      <h2 className="text-center text-6xl mb-3">FAQ</h2>
      <p className="text-center text-2xl text-white/70">Frequently Asked Questions</p>
      {/* <Searchbar onSearchChange={handleSearchChange} /> */}
      <section className="faq">
        {questions.map((item: any, index: number) => (
          <Question key={index} question={item.question} answer={item.answer} />
        ))}
      </section>
    </div>
  );
};

export default Faq;
