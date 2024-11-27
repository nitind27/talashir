import React from "react";
import Detail from "./Detail";
import PdfDetail from "./PdfDetail";
import Footer from "../layout/Footer/Footer";

const Providedetails = () => {
  const data1 = {
    title: "External",
    items: ["Rule 1", "Rule 2", "Rule 3", "Circular Regarding Inter College Transfer 2024-25"],
  };

  const data2 = {
    title: "Internal",
    items: ["Regulation A", "Regulation B", "Regulation C", "Regulation D"],
  };

  const pdfData = [
    {
      title: "Title 1",
      pdfUrl:
        "https://media.geeksforgeeks.org/wp-content/cdn-uploads/20210101201653/PDF.pdf",
    },
    {
      title: "Title 2",
      pdfUrl:
        "https://media.geeksforgeeks.org/wp-content/cdn-uploads/20210101201653/PDF.pdf",
    },
    {
      title: "Title 3",
      pdfUrl:
        "https://media.geeksforgeeks.org/wp-content/cdn-uploads/20210101201653/PDF.pdf",
    },
  ];

  return (
    <div
      style={{
        backgroundImage:
          "url('https://zpbengaluruurban.karnataka.gov.in/assets/front/images/repeat_zp1.jpg')",
      }}
    >
      <div className="flex flex-col items-center mt-8 p-4">
        {/* <div className="flex flex-row space-x-4">
          {pdfData.map((item, index) => (
            <Detail key={index} title={item.title} pdfUrl={item.pdfUrl} />
          ))}
        </div> */}
      </div>
      <div className="flex flex-wrap justify-center gap-4 p-4">
        <PdfDetail
          title={data1.title}
          items={data1.items}
          additionalData="add detail"
        />
        <PdfDetail
          title={data2.title}
          items={data2.items}
          additionalData="add detail"
        />
        <PdfDetail
          title={data1.title}
          items={data1.items}
          additionalData="add detail"
        />
      </div>
      <div>

        <Footer />
      </div>
    </div>
  );
};

export default Providedetails;
