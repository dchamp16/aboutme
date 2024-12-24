"use client";

import Image from "next/image";

interface ProfileImageProps {
  name: string;
}

export function ProfileImage({ name }: ProfileImageProps) {
  return (
    <div className="relative w-48 h-48">
      <div className="absolute inset-0 bg-primary/20 rounded-full blur-2xl" />
      <div className="relative w-48 h-48 rounded-full overflow-hidden shadow-xl ring-2 ring-primary/20 bg-card">
        <Image
          src="/profile.jpeg"
          alt={name}
          width={192}
          height={192}
          className="object-cover hover:scale-110 transition-transform duration-500"
          priority
          unoptimized
        />
      </div>
    </div>
  );
}