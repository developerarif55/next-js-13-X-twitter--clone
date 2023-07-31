"use client";
import useEdit from "@/app/hooks/EditModal";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "react-hot-toast";
import Input from "../Input";
import ImageUpload from "./ImageUpload";
import Modal from "./Modal";

function Edit({ user }) {
  const router = useRouter();
  const [name, setName] = useState(user?.name);
  const [username, setUsername] = useState(user?.username);
  const [bio, setBio] = useState(user?.bio);
  const [coverPic, setCoverPic] = useState(user?.coverPic);
  const [profilePic, setProfilePic] = useState(user?.profilePic);

  const [isLoading, setIsLoading] = useState(false);
  const useEditModal = useEdit();

  //   send apin request for edit profile
  const onSubmit = 
    async (e) => {
      try {
        setIsLoading(true);
        await fetch(`/api/user/${user.id}`, {
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
            method: "PATCH",
            body: JSON.stringify({
              name,
              username,
              bio,
              profilePic,
              coverPic,
            }),
          });
       
        setIsLoading(false);
        toast.success("Account successfully edited.");
        useEditModal.onClose();
        router.refresh();
      } catch (error) {
        console.error("Failed to edit account:", error);
        toast.error("Something went wrong");
        // Handle the error here, show error message, etc.
      }
    }
 
  const bodyContent = (
    <div className="flex flex-col gap-4">
      <ImageUpload
        value={profilePic}
        disabled={isLoading}
        onChange={(image) => setProfilePic(image)}
        label="Upload profile image"
      />
      <ImageUpload
        value={coverPic}
        disabled={isLoading}
        onChange={(image) => setCoverPic(image)}
        label="Upload cover image"
      />

      <Input
        placeholder="Name"
        onChange={(e) => setName(e.target.value)}
        value={name}
        disabled={isLoading}
      />
      <Input
        placeholder="Username"
        onChange={(e) => setUsername(e.target.value)}
        value={username}
        disabled={isLoading}
      />
      <Input
        placeholder="Bio"
        onChange={(e) => setBio(e.target.value)}
        value={bio}
        disabled={isLoading}
      />
    </div>
  );

  return (
    <Modal
      disabled={isLoading}
      title="Edit Your Profile"
      actionLabel="Save"
      isOpen={useEditModal.isOpen}
      onClose={useEditModal.onClose}
      onSubmit={onSubmit}
      body={bodyContent}
    />
  );
}

export default Edit;
