"use client";
import { useState } from "react";
import Input from "../Input";
import Modal from "./Modal";

function Register() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [name, setName] = useState('');
  const [isLoading, setIsLoading] = useState(false);

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
        placeholder="Name" 
        value={name} 
        onChange={(e) => setName(e.target.value)} 
      />
      <Input 
        disabled={isLoading}
        placeholder="Username" 
        value={username} 
        onChange={(e) => setUsername(e.target.value)}
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
  return (
    <Modal
      disabled={""}
      title="Create your Account"
      actionLabel="Register"
      onClose= {true}
      body={bodyContent}
    />
  );
}

export default Register;
