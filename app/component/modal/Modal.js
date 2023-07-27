"use client"
import { useCallback } from "react";
import { AiOutlineClose } from "react-icons/ai";
import Button from "../Button";
function Modal({ isOpen, title, body, footer, actionLabel, onClose, disabled }) {
  const handleClose = useCallback(() => {
    if (disabled) {
      return;
    }
onClose()
  }, [onClose, disabled]);
  return (
    <div className="flex justify-center items-center fixed inset-0 z-50 overflow-x-hidden overflow-y-auto outline-none focus:outline-none bg-neutral-800 bg-opacity-60">
      <div className="relative w-full lg:w-3/6 my-6 mx-auto lg:mx-w-3xl h-full lg:h-auto">
        {/* this part will show content */}
        <div className="h-full lg:h-auto rounded-lg shadow-lg relative flex flex-col w-full bg-black outline-none focus:outline-none border-0">
          {/* header */}
          <div className="flex items-center justify-center p-10 rounded-t">
            <h3 className="text-3xl font-semibold text-white">{title}</h3>
            <button
              className="
                  p-1 
                  ml-auto
                  border-0 
                  text-white 
                  hover:opacity-70
                  transition
                "
              onClick={""}
            >
              <AiOutlineClose size={20} onClick={handleClose} />
            </button>
          </div>
          {/* body content */}
          <div className="relative p-10 flex-auto">{body}</div>
          {/* footer */}
          <div className="flex flex-col gap-2 p-10">
            <Button disabled={false} label={actionLabel} secondary fullWidth large />
            {footer}</div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
