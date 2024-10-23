import React from 'react';

const Detail = () => {
  return (
    <div className="flex flex-col items-center mt-8 mb-96">
      <div className="flex flex-row space-x-4">
        <div className="border-2 border-gray-300 p-4 w-1/3 animate-slide-up">
          <h2 className="text-lg font-semibold">Title 1</h2>
          <iframe src="https://media.geeksforgeeks.org/wp-content/cdn-uploads/20210101201653/PDF.pdf" className="w-full h-32" />
        </div>
        <div className="border-2 border-gray-300 p-4 w-1/3 animate-slide-up">
          <h2 className="text-lg font-semibold">Title 2</h2>
          <iframe src="https://media.geeksforgeeks.org/wp-content/cdn-uploads/20210101201653/PDF.pdf" className="w-full h-32" />
        </div>
        <div className="border-2 border-gray-300 p-4 w-1/3 animate-slide-up">
          <h2 className="text-lg font-semibold">Title 3</h2>
          <iframe src="https://media.geeksforgeeks.org/wp-content/cdn-uploads/20210101201653/PDF.pdf" className="w-full h-32" />
        </div>
      </div>
    </div>
  );
}

export default Detail;

