interface Props {
  children: React.ReactNode;
  submit?: boolean;
  [key: string]: any;
  color?: keyof typeof colorClasses;
}

const commonClass = "inline-flex justify-center rounded-lg text-sm font-semibold py-2.5 px-4 cursor-pointer";
const colorClasses = {
  link: "hover:underline",
  green: `${commonClass} bg-green-900 text-white hover:bg-green-700 w-full`,
  white: `${commonClass} text-slate-900 ring-1 ring-slate-900/10 hover:ring-slate-900/20`
};

export default function Button({ children, submit = false, color = "white", ...rest }: Props) {
  return (
    <button type={submit ? "submit" : "button"} className={colorClasses[color]} {...rest}>
      {children}
    </button>
  );
}
