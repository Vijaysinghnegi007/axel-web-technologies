"use client";

export function Avatar({ children, className }) {
  return <div className={`rounded-full overflow-hidden ${className}`}>{children}</div>;
}

export function AvatarImage({ src, alt, className }) {
  return <img src={src} alt={alt} className={`w-full h-full object-cover ${className}`} />;
}

export function AvatarFallback({ children, className }) {
  return (
    <div
      className={`flex items-center justify-center bg-gray-300 text-gray-700 ${className}`}
    >
      {children}
    </div>
  );
}
