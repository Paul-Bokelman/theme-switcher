import React from "react";
import { useStore } from "../components";
import { IconWrapper } from "../elements";
import { BiMoon, BiSun } from "react-icons/bi";

export const Icon = ({ toggleDarkMode }) => {
  const dark = useStore((state) => state.dark);
  return (
    <IconWrapper onClick={() => toggleDarkMode()}>
      {dark ? <BiMoon /> : <BiSun />}
    </IconWrapper>
  );
};
