import { inter } from '../fonts';
import '../tailwind.css';
export const metadata = {
  title: 'Innovative Solutions - Software Company',
  description: 'Leading the future of software development with innovative solutions.',
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
