import React from "react";
import hero from "../assets/hero_removed.png";
import logo from "../assets/newLogo.svg";
import TreatmentCard from "../components/TreatmentCard";

const Treatment = () => {
  return (
    <div>
      <div className="pt-28 md:pt-[8vw] px-6 md:px-[16vw]">
        <p className="text-[3vw] md:text-[1.3vw] mb-[1vw] text-[#00000063] md:text-black">ホーム 施術メニュー（料金表）</p>
        <p className="text-[7vw] text-center px-20 md:px-0 md:text-left md:text-[3.3vw] mb-5 font-[400]">施術メニュー（料金表）</p>
      </div>
      <div className="w-full h-[75vw] md:h-[25vw] bg-[#EFEFEF] md:flex md:px-[13vw]">
        <div className="w-full md:w-1/2 h-full">
          <img src={hero} alt="" className="h-full w-full object-cover" />
        </div>
        <div className="w-1/2 h-full items-center hidden md:flex">
          <img src={logo} alt="" className="h-25" />
        </div>
      </div>
      <div className="px-6 text-[3vw] md:leading-[2.5vw] md:px-[13vw] mt-8 md:text-[1.4vw] mb-20 text-[#707070] font-[300]">
        当院には様々な最先端医療がございますので、まずは施術(値段)一覧よりご希望のメニューご確認いただき、カウンセリングにお越しください。美容治療のスペシャリスト達が、患者様の「究極の美」を追求するため、お悩みに合わせたプランをご提案させていただきます。
      </div>

      <TreatmentCard/>
    </div>
  );
};

export default Treatment;
