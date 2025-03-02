import React, { useEffect, useState } from "react";
import "./Cards.css";

interface MostViewAndFocus {
  img: string;
  images: string;
  title: string;
  text: string;
  description: string;
  duration: string;
  lessons: string;
  comments: string;
}

const Card = ({
  // img,
  // images,
  title,
  text,
  description,
  duration,
  lessons,
  comments,
}: MostViewAndFocus) => {
  return (
    <div
  className="flex flex-col justify-start items-end flex-grow overflow-hidden gap-6 p-8 rounded-lg bg-[#f1f0e8]/50 border-2 border-[#024f40]"
>
  <div
    className="flex justify-between items-center self-stretch flex-grow-0 flex-shrink-0 relative pb-5 border-t-0 border-r-0 border-b-2 border-l-0 border-[#024f40]"
  >
    <div
      className="flex justify-center items-center flex-grow-0 flex-shrink-0 h-10 relative gap-5 px-4 py-2 rounded-lg bg-[#ffcaca]"
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="flex-grow-0 flex-shrink-0 w-6 h-6"
        preserveAspectRatio="xMidYMid meet"
      >
        <mask
          id="mask0_78_569"
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="24"
          height="24"
        >
          <rect width="24" height="24" fill="#D9D9D9"></rect>
        </mask>
        <g mask="url(#mask0_78_569)">
          <path
            d="M5.00018 21C4.15018 21 3.54602 20.6208 3.18768 19.8625C2.82935 19.1042 2.91685 18.4 3.45018 17.75L9.00018 11V5H8.00018C7.71685 5 7.47935 4.90417 7.28768 4.7125C7.09602 4.52083 7.00018 4.28333 7.00018 4C7.00018 3.71667 7.09602 3.47917 7.28768 3.2875C7.47935 3.09583 7.71685 3 8.00018 3H16.0002C16.2835 3 16.521 3.09583 16.7127 3.2875C16.9044 3.47917 17.0002 3.71667 17.0002 4C17.0002 4.28333 16.9044 4.52083 16.7127 4.7125C16.521 4.90417 16.2835 5 16.0002 5H15.0002V11L20.5502 17.75C21.0835 18.4 21.171 19.1042 20.8127 19.8625C20.4544 20.6208 19.8502 21 19.0002 21H5.00018ZM5.00018 19H19.0002L13.0002 11.7V5H11.0002V11.7L5.00018 19Z"
            fill="#FF5A5D"
          ></path>
        </g>
      </svg>
      <p className="flex-grow-0 flex-shrink-0 text-base font-bold text-left text-[#ff5a5d]">Science</p>
    </div>
    <svg
      width="24"
      height="30"
      viewBox="0 0 24 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="flex-grow-0 flex-shrink-0"
      preserveAspectRatio="xMidYMid meet"
    >
      <path
        d="M0.666504 30V3.33333C0.666504 2.41667 0.992893 1.63194 1.64567 0.979167C2.29845 0.326389 3.08317 0 3.99984 0H20.6665C21.5832 0 22.3679 0.326389 23.0207 0.979167C23.6734 1.63194 23.9998 2.41667 23.9998 3.33333V30L12.3332 25L0.666504 30ZM3.99984 24.9167L12.3332 21.3333L20.6665 24.9167V3.33333H3.99984V24.9167Z"
        fill="#024F40"
      ></path>
    </svg>
  </div>
  <div className="flex flex-col justify-start items-end self-stretch flex-grow-0 flex-shrink-0 gap-6">
    <div className="flex justify-start items-start self-stretch flex-grow-0 flex-shrink-0 gap-6">
      <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 w-[180px] gap-3">
        <div className="flex flex-col justify-start items-start flex-grow relative gap-3">
          <p
            className="self-stretch flex-grow-0 flex-shrink-0 w-[180px] text-[25px] font-bold text-left text-[#024f40]"
          >
            {title}
          </p>
          <p
            className="self-stretch flex-grow-0 flex-shrink-0 w-[180px] text-[13px] text-left text-[#024f40]"
          >
            {text}
          </p>
        </div>
      </div>
      <div className="flex flex-col justify-start items-start flex-grow relative gap-6">
        <p
          className="self-stretch flex-grow-0 flex-shrink-0 w-[284px] text-base text-left text-[#024f40]"
        >
          {description}
        </p>
        <div
          className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-2"
        >
          <p
            className="self-stretch flex-grow-0 flex-shrink-0 w-[284px] text-[13px] font-bold text-left text-[#024f40]"
          >
            Total Duration: {duration}
          </p>
          <p
            className="self-stretch flex-grow-0 flex-shrink-0 w-[284px] text-[13px] font-bold text-left text-[#024f40]"
          >
            Number of Classes: {lessons}
          </p>
          <p
            className="self-stretch flex-grow-0 flex-shrink-0 w-[284px] text-[13px] font-bold text-left text-[#024f40]"
          >
            {comments}
          </p>
        </div>
      </div>
    </div>
  </div>
</div>
  );
};

const CardList = () => {
  const [data, setData] = useState<MostViewAndFocus[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:3000/mostviewandfocus")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  const displayedCards = Array.from({ length: 3 }).map((_, index) => {
    const item = data[index] ||
      data[0] || {
        img: "/images/Frame_card.png",
        images: "/images/bookmark.png",
        title: "Placeholder Title",
        text: "Placeholder Text",
        description: "Placeholder Description",
        duration: "0 hours",
        lessons: "0 lessons",
        comments: "No comments",
      };
    return <Card key={index} {...item} />;
  });

  return <div className="card-container">{displayedCards}</div>;
};

export default CardList;
