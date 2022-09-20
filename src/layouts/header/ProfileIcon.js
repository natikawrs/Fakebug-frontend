import DropdownMenu from "./DropdownMenu";
import DropdownToggle from "./DropdownToggle";

function ProfileIcon() {
  return (
    <div className="d-flex justify-content-end flex-1">
      <div className="dropdown"></div>
      <DropdownToggle />
      <DropdownMenu />
    </div>
  );
}

export default ProfileIcon;
