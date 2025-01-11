interface Props {
  size?: [number, number];
  text: string;
  color?: string;
  url?: string;
}

export default function Button({ size, text, color, url }: Props) {
  return (
    <a href={url} className="cursor-pointer">
      <div
        className={`flex items-center justify-center  ${color ? color : "bg-primary"} text-2xl w-full md:p-2`}
      >
        {text}
      </div>
    </a>
  );
}
