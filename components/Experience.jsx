const Experience = () => {
  const h2 = "Where I have worked";
  const handleDownload = () => {
    // Assuming the PDF file is in the public folder
    const certificateUrl = "/CertificadoJohan.pdf";

    // Trigger download
    const link = document.createElement("a");
    link.href = certificateUrl;
    link.download = "CertificadoJohan.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div id="experience" className="w-full mb-8">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="py-4 uppercase text-xl tracking-widest text-[#5651e5]">
          Experience
        </p>
        <h2 className="py-5">{h2}</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="flex items-center mb-4">
            <img
              src="/assets/experience/milenium-logo.svg"
              alt="Milenium Group Logo"
              className="w-12 h-12 mr-4"
            />
            <div>
              <h2 className="text-lg font-semibold">
                Frontend Web Developer - Angular
              </h2>
              <p className="text-gray-500">Jan/2023 - Apr/2023</p>
            </div>
          </div>
          <p className="text-gray-400 mb-4">
            Developed interfaces and functionalities using the Angular
            framework. Worked on various projects within the company, evolving
            in this role and proposing solution ideas for the company's web
            applications.
          </p>
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded"
            onClick={handleDownload}
          >
            Download Work Certificate
          </button>
        </div>
      </div>
    </div>
  );
};

export default Experience;
