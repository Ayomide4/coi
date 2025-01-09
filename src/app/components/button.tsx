interface Props {
  size: [number, number];
  text: string;
  color?: string;
  url? : string;
}

export default function Button({ size, text, color, url }: Props) {
  const [width, height] = size;
  return (
   <a href={url } className="cursor-pointer"> 
    <div
      style={{
        width: `${width}rem`,
        height: `${height}rem`,
      }}
      className={`flex items-center justify-center  ${color ? color :  "bg-primary"} text-2xl`}
    >
      {text}
    </div>
</a>
  );
}
