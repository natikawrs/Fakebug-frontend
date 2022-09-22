import CoverImage from "../../components/ui/CoverImage";
// import { useAuth } from "../../contexts/AuthContext";

function ProfileCover({ coverImage }) {
  //   const {
  //     user: { coverImage }
  //   } = useAuth();
  return (
    <div
      className="overflow-hidden position-relative mx-auto rounded-b-lg max-w-274 max-h-101"
      style={{
        aspectRatio: "1096/404"
      }}
    >
      <CoverImage src={coverImage} />
    </div>
  );
}

export default ProfileCover;