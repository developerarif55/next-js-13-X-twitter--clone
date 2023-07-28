"use client";
import useLogin from "@/app/hooks/LoginModal";
import useRegister from "@/app/hooks/RegisterModal";
import { signIn } from "next-auth/react";
import { useCallback, useState } from "react";
import Input from "../Input";
import Modal from "./Modal";

function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState('');
 
  const [isLoading, setIsLoading] = useState(false);

const useRegisterModal = useRegister()
const useLoginModal = useLogin()


const onToggle = useCallback(() => {
  useRegisterModal.onOpen()
  useLoginModal.onClose()
}, [useRegisterModal,useLoginModal ])
const onSubmit = useCallback(async () => {
  try {
    setIsLoading(true);
    await signIn("credentials", {
      email,
      password,
    });
     
    setIsLoading(false);
    useLoginModal.onClose();
    console.log("Account error:");
  } catch (error) {
    console.log("Account error:");
    console.error(error);
    // Handle the error here, show error message, etc.
  }
}, [useLoginModal, email, password]);

  const bodyContent = (
    <div className="flex flex-col gap-4">
      <Input
       disabled={isLoading}
        placeholder="Email Address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
       
      
      <Input 
        disabled={isLoading}
        placeholder="Password" 
        type="password" 
        value={password} 
        onChange={(e) => setPassword(e.target.value)}
      />
    </div>
  );
  const footerContent = (
    <div className="text-neutral-400 text-center mt-4">
      <p>Do not  have an Account
        
        <span onClick={onToggle}  className="text-white cursor-pointer hover:underline">
           Register
        </span>
      </p>
      
    </div>
  )
  return (
    <Modal
      disabled={""}
      title="LonIn your Account"
      actionLabel="Login"
      isOpen={useLoginModal.isOpen}
      onClose={useLoginModal.onClose}
      onSubmit={onSubmit}
      body={bodyContent}
      footer={footerContent}
    />
  );
}

export default Login;
