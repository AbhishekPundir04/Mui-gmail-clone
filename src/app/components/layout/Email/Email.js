import React from "react";
import EmailListSetting from "./EmailListSetting";
import "./Email.scss";
import EmailType from "./EmailType";
import EmailBody from "./EmailBody";
const Email = () => {
  return (
    <div className="email_list">
      <EmailListSetting />
      <EmailType />
      <EmailBody
        subject={"This is subject"}
        message="We are learning react js We are learning react js We are learning react js We are learning react js We are learning react js We are learning react js We are learning react js We are learning react js"
      />
      <EmailBody
        subject={"This is subject"}
        message="We are learning react js"
      />
   
    </div>
  );
};

export default Email;
