import React from 'react';

const FileDownloadButton = ({code}) => {
  const handleDownload = (code) => {
    // Sample data for demonstration

    // Create a Blob from the data
    const blob = new Blob([code], { type: 'text/plain' });

    // Create a download link
    const downloadLink = document.createElement('a');
    downloadLink.href = URL.createObjectURL(blob);

    // Set the filename for the download
    downloadLink.download = 'Component.jsx';

    // Append the link to the body and trigger the click event
    document.body.appendChild(downloadLink);
    downloadLink.click();

    // Clean up
    document.body.removeChild(downloadLink);
  };

  return (
    <button onClick={()=>handleDownload(code)} className='mx-2 pr-3 hover:text-white'>
      Download Code
    </button>
  );
};

export default FileDownloadButton;
