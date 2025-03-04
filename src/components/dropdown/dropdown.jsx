import React, { useState, useEffect, useRef } from "react";

import { useClickOutside } from "../../hooks/useClickOutside/useClickOutside";
import styles from "./Dropdown.module.scss";

const Dropdown = ({ children, trigger, forcedOpen = false, onStateChange }) => {
  const [isOpen, setIsOpen] = useState(forcedOpen);

  const dropdownRef = useRef(null);

  useEffect(() => {
    if (forcedOpen) {
      setIsOpen(true);
    } else setIsOpen(false);
  }, [forcedOpen]);

  const handleClick = () => {
    setIsOpen(!isOpen);
    onStateChange && onStateChange(isOpen);
  };

  const handleClose = () => {
    if (isOpen) {
      setIsOpen(false);
      onStateChange && onStateChange(isOpen);
    }
  };

  useClickOutside(dropdownRef, handleClose);

  return (
    <div className={styles.wrapper} ref={dropdownRef}>
      <div onClick={handleClick}>{trigger}</div>
      {isOpen ? <div className={styles.dropdownContent}>{children}</div> : null}
    </div>
  );
};

export default Dropdown;
