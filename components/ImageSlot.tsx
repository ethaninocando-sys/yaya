import Image from "next/image";
import { cn } from "@/lib/utils";

type ImageSlotProps = {
  src: string;
  alt: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
};

/**
 * Fills its (relatively positioned) parent with a cover-fit image.
 * Mirrors the design's <image-slot>; swap the file in /public/assets to change the photo.
 */
export default function ImageSlot({
  src,
  alt,
  className,
  sizes = "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
  priority = false,
}: ImageSlotProps) {
  return (
    <Image
      src={src}
      alt={alt}
      fill
      sizes={sizes}
      priority={priority}
      className={cn("object-cover", className)}
    />
  );
}
