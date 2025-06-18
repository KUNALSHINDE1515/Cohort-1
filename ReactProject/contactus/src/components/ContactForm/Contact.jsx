import React from "react";
import styles from "./Contact.module.css";
import Button from "../Button/Button";
import { LuMessageSquareText } from "react-icons/lu";
import { IoMdCall } from "react-icons/io";
import { SiGmail } from "react-icons/si";
function Contact() {
  return (
    <section className={`${styles.container} container`}>
      <div className={styles.contactForm}>
        <div className={styles.top_btn}>
          <Button
            text="VIA SUPPORT CHAT"
            icon={<LuMessageSquareText fontSize={"24px"} />}
          />
          <Button text="VIA CALL" icon={<IoMdCall fontSize={"24px"} />} />
        </div>

        <Button
          isOutline={true}
          text="VIA EMAIL FROM"
          icon={<SiGmail fontSize={"24px"} />}
        />

        <form>
          <div className={styles.form_control}>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" />
          </div>
          <div className={styles.form_control}>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" />
          </div>
          <div className={styles.form_control}>
            <label htmlFor="text">Text</label>
            <textarea name="text" rows="8"/>
          </div>
           <div style={{
            display: "flex",
            justifyContent:"end"
           }}>
            <Button
          text="SUBMIT BUTTON"
        />
           </div>
        </form>
      </div>
      <div className={`${styles.contactImg}`}>
        <img src="\Service 24_7-pana 1@2x.png" alt="image" />
      </div>
    </section>
  );
}

export default Contact;
