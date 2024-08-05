export default function PostLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="mx-auto max-w-7xl px-16">
      <div className="my-10">{children}</div>
    </div>
  );
}
