import { useParams } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import ProfileCover from "./ProfileCover";
import ProfileInfo from "./ProfileInfo";

function ProfileContainer() {
  const { id } = useParams();

  const {
    user: { firstName, lastName, profileImage, coverImage }
  } = useAuth();

  return (
    <div
      className="shadow-sm pb-2"
      style={{ backgroundImage: "linear-gradient(#f0f2f5, #fff)" }}
    >
      <ProfileCover coverImage={coverImage} />
      <ProfileInfo user={{ firstName, lastName, profileImage }} isMe={!id} />
    </div>
  );
}

export default ProfileContainer;
