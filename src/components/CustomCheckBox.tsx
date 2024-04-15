const CustomCheckBox = () => {
  return (
    <>
      <input
        type="checkbox"
        className="relative peer shrink-0 w-5 h-5 rounded-sm appearance-none bg-main-gray checked:bg-main-violet checked:border-0 disabled:border-steel-400 disabled:bg-steel-400"
        name="full-time"
        id="full-time"
      />
      <svg
        className="absolute w-4 h-4 ml-[1px] hidden peer-checked:block pointer-events-none text-white"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="4"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <polyline points="20 6 9 17 4 12"></polyline>
      </svg>
    </>
  );
};
export default CustomCheckBox;
