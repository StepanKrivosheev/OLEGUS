import { urlFor } from "@/src/sanity/lib/image";
import { client } from "@/src/sanity/lib/client";
import { IMAGES_QUERY } from "@/src/sanity/lib/queryies";
import Image from "next/image";

export default async function Gallerie() {
	interface Image {
		_id: string;
		_type: string;
		asset: {
			_ref: string;
			_type: string;
		};
	}

	interface AllImages {
		images: Image[];
	}

	const allImages: AllImages[] = await client.fetch(IMAGES_QUERY);
	const images: Image[] = allImages.map((x) => x.images).flat();

return (
        <div className="grid md:py-16 md:pt-44 pt-22 md:px-18 md:max-w-[1900px] justify-center md:m-auto">
            <div className="bg-primary/15 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 rounded-2xl">
                {images.map((i, x) =>
                    i != undefined ? (
                        <Image
                            alt="Images of my work at various projects and stages of completion"
                            key={x}
                            className={`rounded-2xl object-cover w-full h-full ${x % 5 === 0 ? 'col-span-2' : ''}`}
                            src={urlFor(i).url()}
                        />
                    ) : null
                )}
            </div>
        </div>
    );
}
