

export default function About(){
    return(
        <div className="bg-white min-h-screen ">
            <div className="ml-[45px]">

                {/* ml-[45px] - Make margin left 45px all page */}
                {/* inline-block - Color only that text space */}
                {/* Leading - Space between row */}
                
                <div className="text-5xl text-[#2541B2] font-medium leading-[50px]">ABOUT</div>
                <div className="text-5xl text-[#2541B2] font-medium leading-[50px] mb-[40px]">PROJECT</div>

                <p className="text-[#2541B2] bg-[#EEC750] px-[5px] py-1 text-[20px] mb-[45px] inline-block">Created by Acre Sanpaphat</p>
                
                <div className="text-[20px]">This project draws inspiration and makes use <br/>
                   of data insights from the excellent notebook <br/>

                   by <a href= 'https://www.kaggle.com/code/abhishek0032/titanic-survival-prediction-feature-engineering' 
                   className="text-[#2541B2] underline decoration-[#2541B2]">Abhishek on Kaggle.</a> <br/>

                   The original work provided valuable feature <br/>
                   engineering techniques and predictive <br/>
                   modeling approaches for the Titanic survival prediction problem.<br/>
                   <p className="mt-[10px]">Sincere thanks to Abhishek for sharing such a well-structured 
                   and informative notebook with the community.
                   </p>
                </div>

            </div>

        </div>
    )
}