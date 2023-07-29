import React, { useEffect, useState } from "react";
import EmailListSetting from "./EmailListSetting";
import "./Email.scss";
import EmailType from "./EmailType";
import EmailBody from "./EmailBody";
import { db } from "../../../firebase/firebase";

const Email = () => {
  const [emails, setEmails] = useState([]);

  useEffect(() => {
    const unsubscribe = db
      .collection("emails")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setEmails(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        );
      });

    // Clean up the listener when the component unmounts
    return () => {
      unsubscribe();
    };
  }, []);

  console.log(emails);

  return (
    <div className="email_list">
      <EmailListSetting />
      <EmailType />
      {emails.map(({ id, data }) => (
        <EmailBody
          key={id}
          name={data.to}
          subject={data.subject}
          message={data.message}
          time={new Date(data.timestamp?.seconds * 1000).toLocaleTimeString()}
        />
      ))}
    </div>
  );
};

export default Email;
