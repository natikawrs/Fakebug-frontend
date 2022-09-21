import DropdownMenu from "./DropdownMenu";
import DropdownToggle from "./DropdownToggle";
import { useEffect, useRef, useState } from "react";

function ProfileIcon() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownEl = useRef();

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!dropdownEl.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="d-flex justify-content-end flex-1">
      <div className="dropdown" ref={dropdownEl}>
        <DropdownToggle setIsOpen={() => setIsOpen((prev) => !prev)} />
        <DropdownMenu isOpen={isOpen} setIsOpen={() => setIsOpen(false)} />
      </div>
    </div>
  );
}

export default ProfileIcon;
