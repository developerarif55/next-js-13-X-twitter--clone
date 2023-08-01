import { useRouter } from "next/navigation";
import { useCallback } from "react";

function SidebarItem({label, Icon, onClick, href}) {
  const router = useRouter();

  const handleOnclick = useCallback(()=> {
    if(onClick) {
      return onClick()
    }
    if (href) {
      router.push(href);
    }
  }, [onClick, href]);
  return (
   <div onClick={handleOnclick} className="flex flex-row items-center">
    <div className="h-15 w-15 rounded-full flex justify-center items-center p-4 hover:bg-slate-300 hover:bg-opacity-10 lg:hidden cursor-pointer">
        <Icon size={25} color="white" />

    </div>
    <div className="hidden lg:flex items-row gap-4 p-4 rounded-full hover:bg-slate-300 hover:bg-opacity-10 items-center">
    <Icon size={25} color="white" />
    <p className="text-white hidden lg:block text-xl">{label}</p>
    </div>

   </div>
  );
}

export default SidebarItem;
