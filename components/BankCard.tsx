// components/BankCard.tsx
import { formatAmount } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Copy from "./Copy";

const BankCard = ({
  account,
  userName,
  showBalance = true,
}: CreditCardProps) => {
  return (
    <div className="flex flex-col ">
      <Link
        href={`/transaction-history/?id=${account.appwriteItemId}`}
        className="bank-card  hover:scale-105 duration-200"
      >
        <div className="bank-card_content">
          <div>
            <h1 className="text-16 font-semibold text-white">
              {account.name} Account
            </h1>
            <p className="font-black text-white">
              {formatAmount(account.currentBalance)}
            </p>
          </div>

          <article className="flex flex-col gap-2">
            <div className="flex justify-between">
              <h1 className="text-12 font-semibold text-white">{userName}</h1>
              <h2 className="text-12 font-semibold text-white">●● / ●●</h2>
            </div>
            <p className="text-14 font-semibold tracking-[1.1px] text-white">
              ●●●● ●●●● ●●●● <span className="text-16">{account?.mask}</span>
            </p>
          </article>
        </div>

        <div className="bank-card_icon">
          <Image src="/icons/Paypass.svg" width={20} height={24} alt="pay" />
          <Image
            src="/icons/mastercard.svg"
            width={45}
            height={32}
            alt="mastercard"
            className="ml-5"
          />
        </div>

        {/* <Image 
          src="/icons/lines.png"
          width={316}
          height={190}
          alt="lines"
          className="absolute top-0 left-0"
        /> */}
      </Link>
      <div className="flex justify-center items-center  hover:scale-105 duration-200">
        {showBalance && <Copy title={account?.shareableId} />}
      </div>
      <p className="text-white text-center pt-2">
        Copy above address &{" "}
        <Link href={`/payment-transfer`} className="underline font-semibold">
          {" "}
          transfer here.
        </Link>
      </p>
    </div>
  );
};

export default BankCard;
