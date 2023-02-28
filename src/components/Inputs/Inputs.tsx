import React from "react";
import styles from "./Inputs.module.css";

type Props = {
  type?: string;
  value: string | number;
  onChange: (val: any) => void;
};

export const Inputs = (props: Props) => {
  return (
    <input
      className={styles.input}
      type={props.type}
      value={props.value}
      onChange={props.onChange}
    />
  );
};
