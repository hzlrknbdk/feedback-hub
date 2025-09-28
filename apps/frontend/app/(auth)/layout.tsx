import AuthLayout from "../../components/layout/AuthLayout";

export default function AuthSegmentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <AuthLayout>{children}</AuthLayout>;
}
