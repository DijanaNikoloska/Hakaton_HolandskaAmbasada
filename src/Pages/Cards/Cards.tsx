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
  img,
  images,
  title,
  text,
  description,
  duration,
  lessons,
  comments,
}: MostViewAndFocus) => {
  return (
    <div className="card">
      <div className="card-header">
        <img src={img} alt="framecard" className="frame-image" />
        <img src={images} alt="bookmark" className="bookmark-image" />
      </div>
      <h3>{title}</h3>
      <p>{text}</p>
      <p>{description}</p>
      <p>
        <strong>Duration:</strong> {duration}
      </p>
      <p>
        <strong>Lessons:</strong> {lessons}
      </p>
      <p>
        <strong>Comments:</strong> {comments}
      </p>
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

  const displayedCards = Array.from({ length: 6 }).map((_, index) => {
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
