"use client";
import useEdit from "@/app/hooks/EditModal";
import { useCallback, useState } from "react";
import Input from "../Input";
import Modal from "./Modal";

function Edit() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState('');
 
  const [isLoading, setIsLoading] = useState(false);
const useEditModal = useEdit()



const onSubmit = useCallback(async () => {
  try {
    setIsLoading(true);
  
    setIsLoading(false);
    useEditModal.onClose();
    console.log("Account error:");
  } catch (error) {
    console.log("Account error:");
    console.error(error);
    // Handle the error here, show error message, etc.
  }
}, [useEditModal, email, password]);

  const bodyContent = (
    <div className="flex flex-col gap-4">
       <Input
        placeholder="Name"
        onChange={(e) => setName(e.target.value)}
        value={""}
        disabled={isLoading}  
      />
      <Input 
        placeholder="Username"
        onChange={(e) => setUsername(e.target.value)}
        value={""}
        disabled={isLoading} 
      />
      <Input 
        placeholder="Bio"
        onChange={(e) => setBio(e.target.value)}
        value={""}
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
