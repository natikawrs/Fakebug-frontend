import { useRef, useState } from "react";
import Avatar from "../../components/ui/Avatar";
import { useAuth } from "../../contexts/AuthContext";

function ProfileImageForm() {
  const {
    user: { profileImage }
  } = useAuth();

  const [file, setFile] = useState(null);

  const inputEl = useRef();

  return (
    <>
      <div className="d-flex justify-content-between align-items-center">
        <h5 className="mb-0">Profile Picture</h5>
        <input
          type="file"
          className="d-none"
          ref={inputEl}
          //   multiple ใส่คำนี้จะเลือกได้หลายรูป
          onChange={(e) => {
            console.dir(e.target.files);
            if (e.target.files[0]) {
              setFile(e.target.files[0]);
            }
          }}
        />
        <div>
          {file && (
            <>
              <button
                className="btn btn-link text-decoration-none hover-bg-gray-100"
                // onClick={() => inputEl.current.click()}
              >
                Save
              </button>
              <button
                className="btn btn-link text-decoration-none hover-bg-gray-100"
                onClick={() => {
                  setFile(null);
                  inputEl.current.value = null;
                }}
              >
                Cancle
              </button>
            </>
          )}
          <button
            className="btn btn-link text-decoration-none hover-bg-gray-100"
            onClick={() => inputEl.current.click()}
          >
            Edit
          </button>
        </div>
      </div>
      <div className="text-center mt-3">
        <span onClick={() => inputEl.current.click()}>
          <Avatar
            src={file ? URL.createObjectURL(file) : profileImage}
            size="168"
          />
        </span>
      </div>
    </>
  );
}

export default ProfileImageForm;
