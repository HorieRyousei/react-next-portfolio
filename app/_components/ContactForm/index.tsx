"use client";
 
import { useState } from "react";
import styles from "./index.module.css";
import { createContactData } from "@/app/_actions/contact";
 
type FormStatus = {
    status: "success" | "error" | "initial";
    message: string;
}
 
export default function ContactForm() {
  // フォームの状態管理
    const [status, setStatus] = useState<FormStatus>({
        status: "initial",
        message: "",
    });

    // フォームの入力値を管理
    const [lastName, setLastName] = useState<string>("");
    const [firstName, setFirstName] = useState<string>("");
    const [company, setCompany] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [message, setMessage] = useState<string>("");
 
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>): Promise<void> => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const response = await createContactData(status, formData);
        setStatus(response);
    };
 
    if (status.status === "success") {
        return (
            <p className={styles.success}>
                お問い合わせいただき、ありがとうございます。
                <br />
                お返事まで今しばらくお待ちください。
            </p>
        );
    }
 
    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.horizontal}>
                <div className={styles.item}>
                    <label className={styles.label} htmlFor="lastname">姓</label>
                    <input
                      className={styles.textfield}
                      type="text"
                      id="lastname"
                      value={lastName}
                      onChange={(event) => setLastName(event.target.value)}
                      name="lastname"
                      required
                      placeholder="horie"
                    />
                </div>
                <div className={styles.item}>
                    <label className={styles.label} htmlFor="firstname">名</label>
                    <input
                      className={styles.textfield}
                      type="text"
                      id="firstname"
                      value={firstName}
                      onChange={(event) => setFirstName(event.target.value)}
                      name="firstname"
                      required
                      placeholder="ryosei"
                    />
                </div>
            </div>
            <div className={styles.item}>
                <label className={styles.label} htmlFor="company">会社名</label>
                <input 
                  className={styles.textfield}
                  type="text"
                  id="company"
                  value={company}
                  onChange={(event) => setCompany(event.target.value)}
                  name="company"
                  placeholder="office"
                />
            </div>
            <div className={styles.item}>
                <label className={styles.label} htmlFor="email">メールアドレス</label>
                <input 
                  className={styles.textfield}
                  type="email"
                  id="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  name="email"
                  required
                  placeholder="24a31e0013@edu.ac.jp"
                />
            </div>
            <div className={styles.item}>
                <label className={styles.label} htmlFor="message">メッセージ</label>
                <textarea 
                  className={styles.textarea}
                  value={message}
                  onChange={(event) => setMessage(event.target.value)}
                  id="message"
                  name="message"
                  required 
                  placeholder="comennt"
                  />
                  
            </div>
            <div className={styles.actions}>
                {status.status === "error" && <p className={styles.error}>{status.message}</p>}
                <input type="submit" value="送信する" className={styles.button} />
            </div>
        </form>
    );
}
 
 