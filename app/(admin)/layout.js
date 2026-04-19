export const metadata = {
  title: "Admin Dashboard | Shine Beauty Parlour",
  description: "Content management system for Shine Beauty Parlour",
};

export default function AdminLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0 }}>{children}</body>
    </html>
  );
}
