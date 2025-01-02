interface Props {
  size: [number, number];
  text: string;
}

export default function Button({ size, text }: Props) {
  const [width, height] = size;
  return (
    <div
      style={{
        width: `${width}rem`,
        height: `${height}rem`,
      }}
      className={`flex items-center justify-center  bg-primary text-2xl`}
    >
      {text}
    </div>
  );
}
