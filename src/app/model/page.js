import Image from "next/image";

export default function model(){
    return(
        <div className="min-h-screen flex flex-col justify-between bg-white">
                
            <div className="bg-[#2541B2] w-[486px] h-[564px]">
                <div className="ml-[45px] mr-[45px]">

                    <div className="mt-[65px]">
                        <div className="text-5xl text-[#EEC750] font-medium mb-[40px]">MODEL</div>
                    </div>
                </div>
                {/*Text on Image*/}
                <div className="relative w-full h-[372px]">
                    <Image src= "/Screenshot 2025-04-10 180518.png" alt="Jack" layout="fill"  objectFit="cover" className=" opacity-75"/>
                </div>

                <div className="absolute inset-0 flex items-end justify-center pb-20 px-4">
                    <p className="text-[#FFFFFF] text-[20px]  text-left max-w-[600px] mb-6 ml-[25px]" >
                    This page showcases the machine learning model that predicts whether a passenger 
                    would have survived the tragic sinking of the Titanic in 1912.
                    </p>
                 </div>
                    
            </div>

         
            <div className="ml-[45px] mr-[#45px]">
                <div className="text-[36px] text-[#2541B2] font-medium mt-[40px]">SURVIVED RATE</div>
                    <hr className="border-[#2541B2]" />

                    {/*Embarked*/}
                    <div className="mb-[26px]">
                        <div className="text-[20px] inline-block bg-[#EEC750] px-[5px] py-1 mt-[18px] mb-[10px]">Survival Correlation by: Embarked </div>
                        <div className="flex items-center space-x-50 mb-[10px]">
                            <span className="text-[20px] w-[120px]">Embarked</span>
                            <span className="text-[20px]">Survived</span>
                        </div>  
                            
                        {[
                            { embarked: 'Cherbourg', survived: '0.553571' },{ embarked: 'Queenstown', survived: '0.389610' },{ embarked: 'Southampton', survived: '0.339009' },
                        ].map((item, index) => (
                            <div key={index} className="flex items-center space-x-50">
                                <span className="text-[20px] w-[120px]">{item.embarked}</span>
                                <span className="text-[20px]">{item.survived}</span>
                            </div>
                        ))}

                    </div>

                    <hr className="border-[#2541B2]" />

                    {/*P Class*/}

                    <div className="mb-[26px]">
                        <div className="text-[20px] inline-block bg-[#EEC750] px-[5px] py-1 mt-[18px] mb-[10px] ">Survival Correlation by: Pclass </div>

                        <div className="flex items-center space-x-50 mb-[10px]">
                            <span className="text-[20px] w-[120px]">Pclass </span>
                            <span className="text-[20px]">Survived</span>
                        </div>  
                            
                        {[
                            { Pclass: 'Class 1  ', survived: '0.629630' },{ Pclass: 'Class 2', survived: '0.472826' },{ Pclass: 'Class 3', survived: '0.242363' },
                        ].map((item, index) => (
                            <div key={index} className="flex items-center space-x-50">
                                <span className="text-[20px] w-[120px]">{item.Pclass}</span>
                                <span className="text-[20px]">{item.survived}</span>
                            </div>
                        ))}

                    <hr className="border-[#2541B2]" />

                    <div className="mb-[26px]">
                        <div className="text-[20px] inline-block bg-[#EEC750] px-[5px] py-1 mt-[18px] mb-[10px]">Survival Correlation by: Sex </div>

                        <div className="flex items-center space-x-50 mb-[10px]">
                            <span className="text-[20px] w-[120px]">Sex </span>
                            <span className="text-[20px]">Survived</span>
                        </div>  
                            
                        {[
                            { Sex: 'Female ', survived: '0.742038' },{Sex: 'Male', survived: '0.188908' }
                        ].map((item, index) => (
                            <div key={index} className="flex items-center space-x-50">
                                <span className="text-[20px] w-[120px]">{item.Sex}</span>
                                <span className="text-[20px]">{item.survived}</span>
                            </div>
                        ))}

                    <hr className="border-[#2541B2]" />

                    <div className="mb-[26px]">
                        <div className="text-[20px] inline-block bg-[#EEC750] px-[5px] py-1 mt-[18px] mb-[10px]">Survival Correlation by: Family Size</div>

                        <div className="flex items-center space-x-50 mb-[10px]">
                            <span className="text-[20px] w-[120px]">Family Size</span>
                            <span className="text-[20px]">Survived</span>
                        </div>  
                            
                        {[
                            { FamilySize: 'Small', survived: '0.578767' },{FamilySize: 'Alone', survived: '0.303538' },{FamilySize: 'Large ', survived: '0.161290' }
                        ].map((item, index) => (
                            <div key={index} className="flex items-center space-x-50">
                                <span className="text-[20px] w-[120px]">{item.FamilySize}</span>
                                <span className="text-[20px]">{item.survived}</span>
                            </div>
                        ))}



                </div>
        </div>
        </div>
        </div>
        </div>
    )
}