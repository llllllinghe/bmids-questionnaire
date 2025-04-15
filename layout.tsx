export const metadata = {
  title: "黑镜观后创伤自评问卷",
  description: "Black Mirror-Induced Disorientation Syndrome self-test",
};

export default function RootLayout({ children }) {
  return (
    <html lang="zh">
      <body>{children}</body>
    </html>
  );
}