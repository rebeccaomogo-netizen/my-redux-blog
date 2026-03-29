import Link from 'next/link';

// Interface defines the structure for the DummyJSON post data 
interface CardProps {
  title: string;
  body: string;
  id: number;
}

export default function Card({ title, body, id }: CardProps) {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 flex flex-col justify-between">
      <div>
        {/* Requirement: Proper naming and clean code [cite: 129, 130] */}
        <h3 className="text-xl font-bold text-gray-800 capitalize mb-3 line-clamp-2">
          {title}
        </h3>
        <p className="text-gray-600 leading-relaxed mb-4 line-clamp-3">
          {body}
        </p>
      </div>
      
      {/* Requirement: Navigation to Blog Detail Page [cite: 12, 151] */}
      <Link 
        href={`/blog/${id}`} 
        className="text-blue-600 font-bold hover:underline inline-block mt-auto"
      >
        Read Full Post →
      </Link>
    </div>
  );
}
