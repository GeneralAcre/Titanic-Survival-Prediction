export default function contact(){
    return(
        <div className="bg-white w-full h-full min-h-screen overflow-hidden">
            <div className="ml-[45px]">
                
                <div className="text-5xl text-[#2541B2] font-medium leading-[50px] mb-[40px] mt-[65px] ">CONTACT</div>
                <p className="text-[#2541B2] bg-[#EEC750] px-[5px] py-1 text-[20px] mb-[35px] inline-block">Let’s build something great together!</p>
                
                <div className="mb-[5px]">
                    <p className="font-medium text-[18px]">Call</p>
                    <p className="font-normal text-[18px] mb-[20px] ">+66.84.145.5306</p>

                    <p className="font-medium text-[18px]">Email</p>
                    <p className="font-normal text-[18px] mb-[55px]">sanpaphat14@gmail.com</p>
                </div>

            </div>
            <footer className="mt-auto">
                <div className="w-[486px]">

                    {/* Blue Box */}
                        {/* absolute -  an element outside of the normal flow of the document*/}
                        {/* Relative - normal flow of the document*/}

                    <div className="bg-[#2541B2] h-[166px] relative">
                        <div className="text-[#EEC750] text-[18px] absolute top-[24px] ml-[45px]">Follow me on social network</div>

                        <div className="absolute top-[80px] left-[32px] flex space-x-20 px-[25px]">
                            <button className="border border-white text-white px-10 py-3">Instagram</button>
                            <button className="border border-white text-white px-10 py-3">LinkedIn</button>
                        </div>

                    </div>

                    {/* Yellow Box */}
                    <div className="bg-[#EEC750] h-[166px] flex flex-col justify-center text-[#2541B2] text-[18px] space-y-6 ">
                        <div className="ml-[45px]">Privacy Policy</div>
                        {/* hr - Underline*/}
                        <hr className="border-[#2541B2]" />
                        <div className="ml-[45px]">Titanic Survival Prediction 2025</div>
                    </div>

                </div>
            </footer>

        </div>
    )
}