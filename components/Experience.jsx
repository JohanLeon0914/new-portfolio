/* eslint-disable @next/next/no-img-element */
const Experience = () => {
  const h2 = "Where I have worked";
  const handleDownload = () => {
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
              src="/assets/experience/htext.webp"
              alt="Milenium Group Logo"
              className="w-15 h-12 mr-4"
            />
            <div>
              <h2 className="text-lg font-semibold">
                Fullstack Developer in HTEX SAS
              </h2>
              <p className="text-gray-500">Jan/2024 - Dec/2024</p>
            </div>
          </div>
          <p className="text-gray-400 mb-4">
            Full Stack Developer at HTEX S.A.S., responsible for managing and
            developing the company&apos;s IT solutions. Responsible for
            designing and building web applications that optimize business
            processes, as well as developing static websites to showcase the
            company&apos;s product catalog, brand distribution, and affiliate
            network.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 pt-12">
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
              <p className="text-gray-500">Jan/2023 - Oct/2023</p>
            </div>
          </div>
          <p className="text-gray-400 mb-4">
            Developer of user interface components and logic features using
            Angular. Primarily responsible for the design and implementation of
            business logic for several applications at the Millennium Group.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Experience;
