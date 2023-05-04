import React from "react";
import circle from "../../../public/image/CTA.png";

export const mail = () => {
  return (
    <div className="mx-100  mt-5 cta">
      <div className="cta-titre">عضویت در خبرنامه</div>
      <p className="cta-text">جهت عضویت در خبرنامه ایمیل خود را وارد کنید</p>
      <div className="mt-5">
        <input type="email" placeholder="padilomag@gmail.com" />
        <button>عضویت در خبرنامه</button>
      </div>
    </div>
  );
};
export default mail;
