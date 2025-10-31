interface DataDetailProps {
  description: string;
  data: string;
}

export default function DataDetail({ description, data }: DataDetailProps) {
  return (
    <div className="flex flex-col">
      <dt className="text-gray-500 dark:text-gray-400">{description}</dt>
      <dd className="text-gray-900 dark:text-gray-100 font-medium">{data}</dd>
    </div>
  );
}
