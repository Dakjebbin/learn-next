import React, { useState } from "react";

const Faq: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  type faq = {
    question: string; 
    answer: string;  
  }
  

  const handleToggle = (index:number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqItems: faq[] = [
    {
      question: "What is Netflix?",
      answer:
        "Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices. You can watch as much as you want, whenever you want without a single commercial – all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week!",
    },
    {
      question: "How much does Netflix cost?",
      answer:
        "Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₦2,200 to ₦7,000 a month. No extra costs, no contracts.",
    },
    {
      question: "Where can I watch it?",
      answer:
        "Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles. You can also download your favorite shows with the iOS or Android app.",
    },
    {
      question: "How do I cancel?",
      answer:
        "Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.",
    },
    {
      question: "What can I watch on Netflix?",
      answer:
        "Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.",
    },
    {
      question: "Is Netflix good for Kids?",
      answer:
        "The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies in their own space. Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.",
    },
  ];

  return (
    <section className="mt-10 text-white">
      <h3 className="text-2xl mt-5 font-bold text-white">
        Frequently Asked Questions
      </h3>

      <div className="mt-6">
        <ul>
          {faqItems.map((item, index) => (
            <li className="mb-2" key={index}>
              <p className="flex cursor-pointer items-center justify-between text-2xl font-semibold bg-[#2d2d2d] px-6 py-3 hover:bg-[#535353]">
                {item.question}
                <span
                  onClick={() => handleToggle(index)}
                  className="text-5xl font-light"
                >
                  {openIndex === index ? "x" : "+"}
                </span>
              </p>
              <p
                className={`faq-answer ${openIndex === index ? "open bg-[#2d2d2d] mt-1 p-5 text-2xl" : ""}`}
                style={{
                  maxHeight: openIndex === index ? "500px" : "0",
                  opacity: openIndex === index ? "1" : "0",
                }}
              >
                {item.answer}
              </p>
            </li>
          ))}
        </ul>
      </div>

        
      <div className="mt-16">
      <p className="text-[1rem] font-medium sm:text-center  mb-3">
          Ready to watch? Enter your email to create or restart your membership.
        </p>
        <form className="w-full flex items-center justify-center">
          <div className="flex w-full justify-center sm:items-center flex-col sm:flex-row gap-3">
            <input
              className="sm:w-[550px] px-8 py-4 w-[90%] rounded-md text-white font-semibold pl-4 border border-green-300 bg-[#ffffff18] "
              type="email"
              required
              placeholder="Email Address"
            />
            <span>
              <button className="w-40 py-3 pl-1 pr rounded-md font-bold font-sans md:text-[1.5rem] text-[1.2rem] bg-[#d4131d]">
                Get Started &gt;
              </button>
            </span>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Faq;
