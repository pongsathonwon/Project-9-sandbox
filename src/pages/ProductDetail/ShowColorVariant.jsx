const ShowColorVariant = ({
  color,
  colorCode,
  setselectColor,
  selectColor,
}) => {
  const border_color = selectColor ? "border-[#C1CD00]" : "border-[#E1E1E1]";
  return (
    <div className=" flex flex-col items-center gap-2 w-full">
      <div className={`border-[2px] ${border_color} `} onClick={setselectColor}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="55"
          height="54"
          viewBox="0 0 55 54"
          fill={colorCode}
        >
          <rect x="1" y="0.5" width="53" height="53" />
        </svg>
      </div>

      <p className="text-secondary-900  font-normal font-['Poppins']">
        {color}
      </p>
    </div>
  );
};

export default ShowColorVariant;
