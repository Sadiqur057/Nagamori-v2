import React from "react";
import btn5 from "../assets/btn5.png";

const Contact1 = ({ formData, setFormData, onSubmit }) => {
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const requiredFields = [
      "consultation",
      "name",
      "nameKana",
      "email",
      "emailConfirm",
      "message",
      "phone",
      "age",
      "gender",
      "referralSource",
    ];

    const isFormValid = requiredFields.every(
      (field) => formData[field] && formData[field].trim() !== ""
    );

    if (isFormValid) {
      onSubmit();
    } else {
      alert("すべての必須項目を入力してください。");
    }
  };

  return (
    <div>
      <h1 className="text-center text-[8vw] md:text-[3.3vw] mb-1 cambria">
        Contact
      </h1>
      <div className="w-15 h-[1.5px] bg-[#707070] relative left-1/2 -translate-x-1/2 mb-3"></div>
      <p className="text-center mb-15 text-[4vw] md:text-[1.3vw] font-light">
        お問い合わせ内容
      </p>

      <div className="w-full flex justify-center mb-15">
        <div className="flex items-center">
          <div className="text-center">
            <div
              className={`w-15 h-15 md:w-20 md:h-20 bg-[#82CCC4] rounded-full flex items-center justify-center text-white text-[5vw] md:text-[1.6vw]`}
            >
              1
            </div>
            <p className="mt-2 font-light">ご入力</p>
          </div>
          <div className="w-15 md:w-30 bg-[#D9D9D9] h-1 mb-7"></div>
          <div className="text-center">
            <div
              className={`w-15 h-15 md:w-20 md:h-20 bg-[#D9D9D9] rounded-full flex items-center justify-center text-white text-[5vw] md:text-[1.6vw]`}
            >
              2
            </div>
            <p className="mt-2 font-light">ご確認</p>
          </div>
          <div className="w-15 md:w-30 bg-[#D9D9D9] h-1 mb-7"></div>
          <div className="text-center">
            <div className="w-15 h-15 md:w-20 md:h-20 bg-[#D9D9D9] rounded-full flex items-center justify-center text-white text-[5vw] md:text-[1.6vw]">
              3
            </div>
            <p className="mt-2 font-light">送信</p>
          </div>
        </div>
      </div>

      <p className="text-left md:text-center leading-9 md:leading-12 font-light">
        下記の入力フォームに必須事項をご入力の上
        <br />
        「入力内容を送信する」ボタンを押してください <br />
        ※WEBでのご予約は受け付けておりません。
      </p>
      <form
        onSubmit={handleSubmit}
        className="w-full md:w-[70%] mx-auto border-t mt-10 border-[#707070a0] md:px-5"
      >
        <div className="md:flex items-center justify-between mt-10 gap-5">
          <div className="flex gap-5 md:justify-between md:w-[35%] mb-3 md:mb-0">
            <p className="font-light text-[5.5vw] md:text-[1.3vw]">
              ご相談項目
            </p>
            <div className="bg-[#D93636] text-white px-4 py-1 rounded-xl font-bold">
              必須
            </div>
          </div>
          <div className="md:w-[65%]">
            <input
              type="text"
              name="consultation"
              value={formData.consultation}
              onChange={handleInputChange}
              placeholder="美肌、二重など"
              className="bg-[#EBE9E7] w-full h-full border border-[#707070] py-5 px-3 rounded-lg outline-0"
            />
          </div>
        </div>

        <div className="md:flex items-start justify-between mt-10 gap-5">
          <div className="flex gap-5 md:justify-between md:w-[35%] mb-3 md:mb-0 md:mt-3">
            <p className="font-light text-[5.5vw] md:text-[1.3vw]">お名前</p>
            <div className="bg-[#D93636] text-white px-4 py-1 rounded-xl font-bold">
              必須
            </div>
          </div>
          <div className="md:w-[65%]">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="山田 太郎"
              className="bg-[#EBE9E7] w-full h-full border border-[#707070] py-5 px-3 rounded-lg outline-0"
            />
            <p className="mt-2 font-light text-[4.5vw] md:text-lg">
              フルネームでご記入ください。
            </p>
          </div>
        </div>

        <div className="md:flex items-center justify-between mt-10 gap-5">
          <div className="flex gap-5 md:justify-between md:w-[35%] mb-3 md:mb-0">
            <p className="font-light text-[5.5vw] md:text-[1.3vw]">
              お名前（フリガナ）
            </p>
            <div className="bg-[#D93636] text-white px-4 py-1 rounded-xl font-bold">
              必須
            </div>
          </div>
          <div className="md:w-[65%]">
            <input
              type="text"
              name="nameKana"
              value={formData.nameKana}
              onChange={handleInputChange}
              placeholder="ヤマダ タロウ"
              className="bg-[#EBE9E7] w-full h-full border border-[#707070] py-5 px-3 rounded-lg outline-0"
            />
          </div>
        </div>

        <div className="md:flex items-start justify-between mt-10 gap-5">
          <div className="flex gap-5 md:justify-between md:w-[35%] mb-3 md:mb-0 md:mt-3">
            <p className="font-light text-[5.5vw] md:text-[1.3vw]">Eメール</p>
            <div className="bg-[#D93636] text-white px-4 py-1 rounded-xl font-bold">
              必須
            </div>
          </div>
          <div className="md:w-[65%]">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="example@email.com"
              className="bg-[#EBE9E7] w-full h-full border border-[#707070] py-5 px-3 rounded-lg outline-0"
            />
            <input
              type="email"
              name="emailConfirm"
              value={formData.emailConfirm}
              onChange={handleInputChange}
              placeholder="example@email.com"
              className="bg-[#EBE9E7] w-full h-full border border-[#707070] py-5 px-3 rounded-lg outline-0 mt-4 md:mt-7"
            />
            <p className="mt-2 font-light text-[4.5vw] md:text-lg">
              確認のためもう一度入力してください。
            </p>
          </div>
        </div>

        <div className="md:flex items-start justify-between mt-10 gap-5">
          <div className="flex gap-5 md:justify-between md:w-[35%] mb-3 md:mb-0 md:mt-3">
            <p className="font-light text-[5.5vw] md:text-[1.3vw]">
              お問い合わせ内容
            </p>
            <div className="bg-[#D93636] text-white px-4 py-1 rounded-xl font-bold">
              必須
            </div>
          </div>
          <div className="md:w-[65%]">
            <textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              className="bg-[#EBE9E7] w-full h-60 border border-[#707070] py-5 px-3 rounded-lg outline-0"
            />
          </div>
        </div>

        <div className="md:flex items-start justify-between mt-10 gap-5">
          <div className="flex gap-5 md:justify-between md:w-[35%] mb-3 md:mb-0 md:mt-3">
            <p className="font-light text-[5.5vw] md:text-[1.3vw]">電話番号</p>
            <div className="bg-[#D93636] text-white px-4 py-1 rounded-xl font-bold">
              必須
            </div>
          </div>
          <div className="md:w-[65%]">
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              className="bg-[#EBE9E7] w-full h-full border border-[#707070] py-5 px-3 rounded-lg outline-0"
            />
          </div>
        </div>

        <div className="md:flex items-center justify-between mt-10 gap-5">
          <div className="flex gap-5 md:justify-between md:w-[35%] mb-3 md:mb-0">
            <p className="font-light text-[5.5vw] md:text-[1.3vw]">ご年齢</p>
            <div className="bg-[#D93636] text-white px-4 py-1 rounded-xl font-bold">
              必須
            </div>
          </div>
          <div className="md:w-[65%]">
            <input
              type="number"
              name="age"
              value={formData.age}
              onChange={handleInputChange}
              className="bg-[#EBE9E7] w-full h-full border border-[#707070] py-5 px-3 rounded-lg outline-0"
            />
          </div>
        </div>

        <div className="md:flex items-start justify-between mt-10 gap-5">
          <div className="flex gap-5 md:justify-between md:w-[35%] mb-3 md:mb-0 md:mt-3">
            <p className="font-light text-[5.5vw] md:text-[1.3vw]">性別</p>
            <div className="bg-[#D93636] text-white px-4 py-1 rounded-xl font-bold">
              必須
            </div>
          </div>
          <div className="md:w-[65%] flex gap-10 md:block">
            <div className="flex gap-3 text-[5vw] md:text-[20px] md:mb-5">
              <input
                type="radio"
                name="gender"
                value="male"
                checked={formData.gender === "male"}
                onChange={handleInputChange}
              />
              男{" "}
            </div>
            <div className="flex gap-3 text-[5vw] md:text-[20px]">
              <input
                type="radio"
                name="gender"
                value="female"
                checked={formData.gender === "female"}
                onChange={handleInputChange}
              />
              女
            </div>
          </div>
        </div>

        <div className="md:flex items-start justify-between mt-10 gap-5">
          <div className="flex gap-5 md:justify-between md:w-[35%] mb-3 md:mb-0 md:mt-3">
            <p className="font-light text-[5.5vw] md:text-[1.3vw]">
              何を見て当院をお知り
              <br />
              になりましたか？
            </p>
            <div className="bg-[#D93636] h-9 text-white px-4 py-1 rounded-xl font-bold">
              必須
            </div>
          </div>
          <div className="md:w-[65%]">
            <textarea
              name="referralSource"
              value={formData.referralSource}
              onChange={handleInputChange}
              className="bg-[#EBE9E7] w-full h-30 border border-[#707070] py-5 px-3 rounded-lg outline-0"
            />
          </div>
        </div>

        <div className="w-full flex justify-center mt-20">
          <button type="submit">
            <img src={btn5} alt="" className="h-11" />
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact1;
