import React from 'react';

const Page = () => {
  return (
    <div>
      {/* PDF Display using iframe */}
      <iframe 
        src="/HussainCV.pdf" 
        width="100%" 
        height="600px" 
        title="CV"
        className="border rounded-md"
      ></iframe>

      <p className="mt-4">
        If you want to download the CV, click the link below:
      </p>
      <a href="/HussainCV.pdf" download className="text-blue-500 underline">Download CV</a>
    </div>
  );
};

export default Page;
