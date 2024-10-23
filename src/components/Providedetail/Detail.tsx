import React from 'react';

interface PdfCardProps {
  title: string;
  pdfUrl: string;
}

const Detail: React.FC<PdfCardProps> = ({ title, pdfUrl }) => {
  return (
    <div className="border-2 border-gray-300 p-4 w-1/3 animate-slide-up bg-white">
      <h2 className="text-lg font-semibold">{title}</h2>
      <iframe src={pdfUrl} className="w-full h-32" />
    </div>
  );
};

export default Detail;