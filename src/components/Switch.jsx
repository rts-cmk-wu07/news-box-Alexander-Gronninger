/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const Switch = () => {
  const styles = {
    switch: css`
      position: relative;
      display: inline-block;
      width: 60px;
      height: 34px;
      align-self: center;
      & input {
        opacity: 0;
        width: 0;
        height: 0;
      }
      & span {
        position: absolute;
        cursor: pointer;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: #ccc;
        -webkit-transition: 0.4s;
        transition: 0.4s;
        border-radius: 34px;
      }
      & span:before {
        position: absolute;
        content: "";
        height: 26px;
        width: 26px;
        left: 4px;
        bottom: 4px;
        background-color: white;
        -webkit-transition: 0.4s;
        transition: 0.4s;
        border-radius: 50%;
      }
      & input:checked + span {
        background-color: #32aaaa;
      }

      & input:focus + span {
        box-shadow: 0 0 1px purple;
      }
      & input:checked + span:before {
        transform: translateX(26px);
      }
    `,
  };
  return (
    <>
      <label css={styles.switch}>
        <input type="checkbox" />
        <span></span>
      </label>
    </>
  );
};

export default Switch;
