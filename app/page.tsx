/* Tool Fera home is rendered on the server. */
import { HomePage } from '@/components/site/home-page';
import { seo } from '@/lib/seo';
export const metadata = seo('Free Online Tools for Everyday Tasks', 'Compress and resize images, calculate GPA and percentages, count text, format JSON and generate passwords with Tool Fera’s browser-based tools.', '/');
export default function Home(){ return <HomePage/>; }
