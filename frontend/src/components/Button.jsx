const Button = ({ action, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="w-35 p-3 rounded-2xl bg-amber-300 text-black font-md"
    >
      {action}
    </button>
  );
};

export default Button;
