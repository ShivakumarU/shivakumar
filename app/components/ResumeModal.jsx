import { useState } from "react";
import { MdFileDownload } from "react-icons/md";

export default function ResumeModal() {
  const [showModal, setShowModal] = useState(false);
  const fileName = "Shivakumar_Ummeda_Resume.pdf";
  const filePath = "/Shivakumar_Ummeda_SoftwareEngineer_Resume_2025.pdf";

  const triggerDownload = () => {
    const link = document.createElement("a");
    link.href = filePath;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setShowModal(false);
  };

  return (
    <>
      <button
        onClick={() => setShowModal(true)}
        className="w-fit flex items-center justify-center gap-2 bg-gradient-to-r from-orange-700 via-pink-700 to-purple-900 hover:from-purple-900 hover:to-orange-700 hover:via-pink-700 text-orange-50 hover:text-white md:px-4.5 md:py-2.5 px-3 py-1.5 rounded-lg md:font-medium transition-colors duration-200 md:text-lg text-sm"
      >
        Download Resume <MdFileDownload className="md:text-lg text-sm upDown" />
      </button>

      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-transparent backdrop-blur-sm z-50">
          <div className="bg-gray-700 border-2 border-amber-500 rounded-lg p-6 w-80 text-center">
            <h2 className="text-lg font-bold mb-2 text-orange-200">Download My Resume</h2>
            <p className="mb-4 ">File: <strong className="gradient-flex">{fileName}</strong></p>
            <div className="flex justify-center gap-4">
              <button
                onClick={triggerDownload}
                className="bg-amber-500 text-gray-700 px-4 py-2 rounded-lg hover:bg-amber-600 transition-colors duration-200"
              >
                Download
              </button>
              <button
                onClick={() => setShowModal(false)}
                className="bg-gray-300 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-400 transition-colors duration-200"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
