import React, { useContext, useState } from "react";
import { FaEdit, FaSave, FaSpinner, FaTimes } from "react-icons/fa";
import { updateProfile } from "firebase/auth";
import toast from "react-hot-toast";
import { AuthContext } from "../../../contexts/AuthProvider";

const UserDetailsForms = () => {
  const { user } = useContext(AuthContext);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSaveChange = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;

    updateProfile(user, {
      displayName: name,
      photoURL: photo,
    })
      .then(() => {
        console.log("Updated Profile");
        toast.success("Profile updated");
        window.location.reload();
      })
      .catch((err) => {
        console.log(err.message);
        setError(err.message);
        toast.error(err.message);
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <div>
      {/* The button to open modal */}
      <label
        htmlFor="my-modal-6"
        className="my-btn flex gap-2 items-center mx-2 hover:bg-transparent transition-colors duration-200 ease-in-out"
      >
        Edit Profile <FaEdit />
      </label>

      <input type="checkbox" id="my-modal-6" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box relative">
          <label
            htmlFor="my-modal-6"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            <FaTimes />
          </label>
          <form onSubmit={handleSaveChange} className="">
            <input
              type="text"
              name="name"
              defaultValue={user.displayName}
              placeholder="Enter your new name"
              className="input input-bordered mx-auto w-full  mb-5"
              required
            />
            <input
              type="text"
              name="photo"
              defaultValue={user.photoURL}
              placeholder="Enter new photo url"
              className="input input-bordered mx-auto w-full  mb-5"
              required
            />

            <button
              type="submit"
              disabled={isSubmitting}
              className="my-btn mx-auto flex gap-2 items-center hover:bg-transparent transition-colors duration-200 ease-in-out"
            >
              {isSubmitting ? (
                <>
                  <FaSpinner className="animate-spin" /> Saving...
                </>
              ) : (
                <>
                  Save Changes <FaSave />
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UserDetailsForms;
