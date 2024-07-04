import React from "react";

const Features = () => {
  const data = [
    {
      id: 1,
      title: "Overview",
      desp: "Lorem ipsum dolor sit amet, consectetur adipiscing eliLorem ipsum dolor sit amet, consectetur adipiscing eli",
    },

    {
      id: 2,
      title: "Comfortable",
      desp: "Lorem ipsum dolor sit amet, consectetur adipiscing eliLorem ipsum dolor sit amet, consectetur adipiscing eli",
    },
    {
      id: 3,
      title: "Battery",
      desp: "Lorem ipsum dolor sit amet, consectetur adipiscing eliLorem ipsum dolor sit amet, consectetur adipiscing eli",
    },
    {
      id: 4,
      title: "Highlights",
      desp: "Lorem ipsum dolor sit amet, consectetur adipiscing eliLorem ipsum dolor sit amet, consectetur adipiscing eli",
    },
  ];

  return (
    <div className="feature-wrapper">
        <h1>
            Features
        </h1>
          <div className="feature-content">
      <div className="feature-box">
      {data && data?.map((item) => (

          <div key={item.id}>
            <h4>{item.title}</h4>
            <p>{item.desp}</p>
          </div>
        ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
