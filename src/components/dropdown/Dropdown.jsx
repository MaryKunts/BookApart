import React, { useState, useEffect, useRef } from "react";

import { useClickOutside } from "../../hooks/useClickOutside/useClickOutside";
import styles from "./Dropdown.module.scss";

const Dropdown = ({ children, trigger, forcedOpen = false, onStateChange }) => {
  const [isOpen, setIsOpen] = useState(forcedOpen);

  const dropdownRef = useRef(null);

  useEffect(() => {
    setIsOpen(forcedOpen);
  }, [forcedOpen]);

  const handleClick = () => {
    setIsOpen(!isOpen);
    onStateChange && onStateChange(!isOpen);
  };

  const handleClose = () => {
    if (isOpen) {
      setIsOpen(false);
      onStateChange && onStateChange(false);
    }
  };

  useClickOutside(dropdownRef, handleClose);

  return (
    <div ref={dropdownRef} className={styles.wrapper}>
      <div onClick={handleClick}>{trigger}</div>
      {isOpen ? <div className={styles.dropdownContent}>{children}</div> : null}
    </div>
  );
};

export default Dropdown;
