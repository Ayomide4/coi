interface Props {
  size?: [number, number];
  text: string;
  color?: string;
  url?: string;
  target?: string;
}

export default function Button({ text, color, url, target }: Props) {
  return (
    <a href={url} target={target} className="cursor-pointer">
      <div
        className={`flex items-center justify-center  ${color ? color : "bg-primary"} text-2xl 2xl:text-3xl w-full md:p-2 select-none`}
      >
        {text}
      </div>
    </a>
  );
}
