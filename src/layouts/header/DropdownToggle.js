import Avatar from "../../components/ui/Avatar";
import { useAuth } from "../../contexts/AuthContext";

function DropdownToggle({ setIsOpen }) {
  const {
    user: { profileImage }
  } = useAuth();
  return (
    <div onClick={setIsOpen}>
      <Avatar src={profileImage} size="40" />
    </div>
  );
}

export default DropdownToggle;
