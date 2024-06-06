import {
  Avatar as AvatarComponent,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";

type AvatarProps = {
  src: string;
  name: string;
};
export function Avatar({ src, name }: AvatarProps) {
  return (
    <AvatarComponent>
      <AvatarImage
        src={src || "https://github.com/shadcn.png"}
        alt={name || "unknown"}
      />
      <AvatarFallback>{name}</AvatarFallback>
    </AvatarComponent>
  );
}
