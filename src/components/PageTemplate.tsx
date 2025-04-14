import Header from './Header';
import Footer from './Footer';

interface PageTemplateProps {
  title: string;
  children: React.ReactNode;
}

export default function PageTemplate({ title, children }: PageTemplateProps) {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="container mx-auto px-6 py-16">
        <h1 className="text-3xl md:text-4xl font-bold mb-8">{title}</h1>
        <div className="prose prose-lg max-w-none">
          {children}
        </div>
      </main>
      <Footer />
    </div>
  );
}