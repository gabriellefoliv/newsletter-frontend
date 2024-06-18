"use client"

import { useSendMail } from "@/hooks/useSendMail";
import styles from "./page.module.css";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Image from "next/image";
import { ArrowIcon } from "@/components/icons/arrow-icon";

export default function Home() {
  const [email, setEmail] = useState("")
  const { isSuccess, isError, mutate } = useSendMail()

  useEffect(() => {
    if (!isSuccess) return;
    toast("Assinatura confirmada! ✅", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      progress: undefined,
      theme: "dark",
      type: "success"
    })
  }, [isSuccess])

  useEffect(() => {
    if (!isError) return;
    toast("Erro ao confirmar, verifique seu e-mail e tente novamente! 😞", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      progress: undefined,
      theme: "dark",
      type: "error"
    })
  }, [isError])

  const submit = () => {
    mutate({
      email
    })
  }

  return (
    <main className={styles.main}>
      <Image
        alt="ByteNews"
        height={150}
        width={150}
        src="/luzimg.jpg"
      />
      <h1 className={styles.heading}>ByteNews</h1>
      <p className={styles.paragraph}>Fique por dentro de tudo que rola no mundo da tecnologia!</p>
      <div className={styles.inputWrapper}>
        <input className={styles.input} onChange={e => setEmail(e.target.value)} placeholder="digite o seu e-mail aqui"></input>
        <button onClick={submit} className={styles.btn}>
          <ArrowIcon/>
        </button>
      </div>
    </main>
  );
}
