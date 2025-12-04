import { useState } from "react";
import Icon from "../icons/Icon";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "How long does it take to complete a web development project?",
    answer:
      "The timeline varies depending on the project's complexity and requirements. Our team strives to deliver projects on time while maintaining the highest quality standards.",
  },
  {
    question: "Can you handle large-scale mobile app development projects?",
    answer:
      "The timeline varies depending on the project's complexity and requirements. Our team strives to deliver projects on time while maintaining the highest quality standards.",
  },
  {
    question: "Can you integrate third-party APIs into our mobile app?",
    answer:
      "The timeline varies depending on the project's complexity and requirements. Our team strives to deliver projects on time while maintaining the highest quality standards.",
  },
  {
    question: "How do you ensure cross-platform compatibility for mobile apps?",
    answer:
      "The timeline varies depending on the project's complexity and requirements. Our team strives to deliver projects on time while maintaining the highest quality standards.",
  },
  {
    question: "What is your approach to user experience (UX) design?",
    answer:
      "The timeline varies depending on the project's complexity and requirements. Our team strives to deliver projects on time while maintaining the highest quality standards.",
  },
];

function FAQSection() {
  const [expandedIndex, setExpandedIndex] = useState<number>(-1);

  const toggleFAQ = (index: number) => {
    setExpandedIndex(expandedIndex === index ? -1 : index);
  };

  return (
    <>
      <div className="flex items-center justify-between rounded-2xl bg-secondary p-12">
        <h2 className="text-5xl font-semibold text-orangeText">
          {"Frequently Asked Questions".toUpperCase()}
        </h2>
        <button className="flex items-center gap-2">
          <div className="flex size-16 items-center justify-center rounded-full border border-buttonBorderColor">
            <Icon type="SmallUpArrowIcon" />
          </div>
          <p className="font-mono text-xl font-medium text-gray">VIEW ALL</p>
        </button>
      </div>

      <div className="grid grid-cols-5 items-start gap-5">
        <div className="col-span-3 flex flex-col gap-5">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="rounded-2xl bg-secondary px-[60px] py-10 transition-all"
            >
              <div
                className={`flex items-center justify-between ${expandedIndex === index ? "pb-[30px]" : ""}`}
              >
                <h3 className="text-xl font-medium text-orangeText">
                  {faq.question}
                </h3>
                <button
                  onClick={() => toggleFAQ(index)}
                  className="flex size-[52px] items-center justify-center rounded-full border border-iconBorderColor bg-borderColor"
                >
                  {expandedIndex === index ? (
                    <Icon
                      type="MinusIcon"
                      className="size-6 text-orangeLight"
                    />
                  ) : (
                    <Icon type="PlusIcon" className="size-6 text-orangeLight" />
                  )}
                </button>
              </div>
              {expandedIndex === index && (
                <p className="border-t border-buttonBorderColor pt-[30px] text-lg text-gray">
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>

        <div className="col-span-2 flex flex-col self-start rounded-2xl bg-secondary p-[60px]">
          <h2 className="border-b border-buttonBorderColor pb-[50px] text-2xl font-medium text-orangeText">
            {"Ask Your Question".toUpperCase()}
          </h2>
          <form className="flex flex-col gap-5 pt-[50px]">
            <div className="flex flex-col gap-2">
              <label className="text-lg font-medium text-orangeText">
                NAME
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                className="rounded-xl bg-primary p-6 text-lg text-gray placeholder:text-gray focus:outline-none focus:ring-2 focus:ring-orange"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-lg font-medium text-orangeText">
                EMAIL
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="rounded-xl bg-primary p-6 text-lg text-gray placeholder:text-gray focus:outline-none focus:ring-2 focus:ring-orange"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-lg font-medium text-orangeText">
                YOUR QUESTION
              </label>
              <textarea
                placeholder="Enter Your Question Here ....."
                rows={4}
                className="rounded-xl bg-primary p-6 text-lg text-gray placeholder:text-gray focus:outline-none focus:ring-2 focus:ring-orange"
              />
            </div>
            <button
              type="submit"
              className="mt-[30px] rounded-xl bg-orange px-6 py-4 text-lg font-medium text-primary transition-all hover:bg-orangeLight"
            >
              {"Send Your Message".toUpperCase()}
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default FAQSection;
