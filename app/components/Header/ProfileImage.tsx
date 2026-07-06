"use client";

import Image from "next/image";

interface ProfileImageProps {
  name: string;
}

export function ProfileImage({ name }: ProfileImageProps) {
  return (
    <div className="h-36 w-36 shrink-0 overflow-hidden rounded-full ring-1 ring-border">
      <Image
        src="/profile.jpeg"
        alt={name}
        width={144}
        height={144}
        className="object-cover"
        priority
        unoptimized
      />
    </div>
  );
}