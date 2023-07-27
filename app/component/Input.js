function Input({ placeholder, value, onChange, disabled, type }) {
  return (
    <div className="w-full">
      <input
        disabled={disabled}
        onChange={onChange}
        value={value}
        placeholder={placeholder}
        type={type}
        className="
        w-full p-4 
        text-lg bg-black
        border-2 border-neutral-800
        outline-none
        rounded-md
        text-white
        focus:border-sky-500
        transition
        disabled:bg-neutral-900
        disabled:cursor-not-allowed
        "
      />
    </div>
  );
}

export default Input;
