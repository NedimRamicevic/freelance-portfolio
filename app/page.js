import Image from "next/image";
import Link from "next/link";
import { movies } from "../data/data.js";

export default async function Home() {
  const list = await movies;
  return (
    <div className="sm:grid sm:grid-cols-2 grid grid-cols-1 items-center justify-items-center  mt-12 md:grid-cols-3 gap-6">
      {await list.map((item, index) => (
        <Link href={`/Works/${item.imdbID}`} key={index}>
          <div className="gallery-image">
            <Image
              className="tattoo-image max-w-full h-auto rounded-md object-cover"
              src={item.Poster}
              alt="gallery"
              width={400}
              height={300}
            />
          </div>
        </Link>
      ))}
    </div>
  );
}
