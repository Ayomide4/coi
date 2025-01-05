interface Props {
  size: [number, number];
  text: string;
  color?: string;
}

export default function Button({ size, text,color }: Props) {
  const [width, height] = size;
  return (
    <div
      style={{
        width: `${width}rem`,
        height: `${height}rem`,
      }}
      className={`flex items-center justify-center  ${color ? color :  "bg-primary"} text-2xl`}
    >
      {text}
    </div>
  );
}
