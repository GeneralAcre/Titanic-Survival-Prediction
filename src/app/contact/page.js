export default function Contact() {
    return (
      <div className="bg-white w-full h-full min-h-screen overflow-hidden">
        {/* Main Content */}
        <div className="ml-4 sm:ml-[45px] mr-4 sm:mr-0">
          <div className="text-5xl text-[#2541B2] font-medium leading-[50px] mb-[40px] mt-[65px]">
            CONTACT
          </div>
          <p className="text-[#2541B2] bg-[#EEC750] px-2 py-1 text-[20px] mb-[35px] inline-block max-w-max">
            Let’s build something great together!
          </p>
  
          <div className="mb-[5px]">
            <p className="font-medium text-[18px]">Call</p>
            <p className="font-normal text-[18px] mb-[20px]">+66.84.145.5306</p>
  
            <p className="font-medium text-[18px]">Email</p>
            <p className="font-normal text-[18px] mb-[55px]">sanpaphat14@gmail.com</p>
          </div>
        </div>
  
        {/* Footer */}
        <footer className="mt-auto flex justify-center">
          <div className="w-[486px] max-w-full">
            {/* Blue Box */}
            <div className="bg-[#2541B2] h-[166px] relative">
              <div className="text-[#EEC750] text-[18px] absolute top-[24px] ml-4 sm:ml-[45px] right-4">
                Follow me on social network
              </div>
  
              <div className="absolute top-[80px] left-4 sm:left-[20px] right-4 flex flex-col sm:flex-row sm:space-x-20 space-y-4 sm:space-y-0 px-[25px] sm:px-0">
                <button className="border border-white text-white py-3 w-full sm:w-[170px]">
                  Instagram
                </button>
                <button className="border border-white text-white py-3 w-full sm:w-[170px]">
                  LinkedIn
                </button>
              </div>
            </div>
  
            {/* Yellow Box */}
            <div className="bg-[#EEC750] h-[166px] flex flex-col justify-center text-[#2541B2] text-[18px] space-y-6">
              <div className="ml-4 sm:ml-[45px]">Privacy Policy</div>
              <hr className="border-[#2541B2]" />
              <div className="ml-4 sm:ml-[45px]">Titanic Survival Prediction 2025</div>
            </div>
          </div>
        </footer>
      </div>
    );
  }
  