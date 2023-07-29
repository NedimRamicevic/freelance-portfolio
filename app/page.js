import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <div className="sm:grid sm:grid-cols-2 grid grid-cols-1  mt-12 md:grid-cols-3 gap-6">
      {await list.map((item, index) => (
        <Link href={`/Works/${index}`} key={index}>
          <div className="gallery-image">
            <Image
              className="tattoo-image max-w-full h-auto rounded-md object-cover"
              src="https://cdn-ph-org.worldtattoogallery.com/2020-001/artist--hugo-feist--sylvanas-windrunner-world-of-warcraft-tattoo_22027091739.jpg"
              alt="gallery"
              width={500}
              height={500}
            />
          </div>
        </Link>
      ))}
    </div>
  );
}
