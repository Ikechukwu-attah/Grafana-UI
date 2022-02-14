import React, { useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { BankData, BankOnNIP, generateRandom } from "../dummyData/BankData";
import BankList from "../bankList/BankList";
import "./bank.scss";
import BanksOnNIP from "../banksOnNIP/BanksOnNIP";


const Banks = () => {
  const [open, setOpen] = useState(false);
  const [close, setClose] = useState(true);
  console.log("OPEN", open);
 const check  = generateRandom(100);
 console.log(check)
  const onOpen = () => {
    if (close) {
      setOpen(true);
      setClose(false);
    } else {
      setOpen(false);
      setClose(true);
    }
  };
  const nipBanks = BankOnNIP.map((nipBank=>(
      <BanksOnNIP nip = {nipBank} key={nipBank.id} />
  )));
  const banks = BankData.map((bank) => <BankList banks={bank} key={bank.id} />);
  return (
    <div className="bank">
      <div className="bank__bank-core">
        <KeyboardArrowDownIcon
          onClick={onOpen}
          fontSize="large"
          className="core-icon"
        />
        <span className="core-text">Core Banks</span>
      </div>

      <div className={`${open && "bank__bank-data--change"} bank__bank-data `}>
        {banks}
      </div>

      <span className="bank__nip-text">Banks On NIP</span>
      <div className="bank__nipbank">
        {nipBanks}
      </div>
    </div>
  );
};

export default Banks;
