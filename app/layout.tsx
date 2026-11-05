import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata={title:'Crveni krst/križ BiH · Grant Tracker',description:'Prilike za humanitarnu pomoć, razvoj kapaciteta i zajedničke projekte u BiH.'};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="bs"><body>{children}</body></html>}
