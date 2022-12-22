import '../styles/globals.css';
import Nav from './Nav';

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html>
			<head />
			<body>
				{children}
				<Nav />
			</body>
		</html>
	);
}
