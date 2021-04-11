type Size = "lg" | "md" | "sm";

type AvatarProps = {
  src?: string | null;
  alt?: string;
  size: Size;
};

const mapSize = (size: Size) => {
  switch (size) {
    case "sm":
      return "w-10 h-10";
    case "md":
      return "w-24 h-24";
    case "lg":
      return "w-28 h-28";
  }
};

export const Avatar = (props: AvatarProps): JSX.Element => {
  if (!props.src) {
    return (
      <div className={`${mapSize(props.size)} rounded-full bg-gray-300`} />
    );
  }
  return (
    <img
      className={`${mapSize(props.size)} rounded-full object-cover`}
      src={props.src}
      alt=""
    />
  );
};
