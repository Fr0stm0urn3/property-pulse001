import Image from "next/image"
import { Gallery, Item } from "react-photoswipe-gallery"

const PropertyImages = ({ images }) => {
  return (
    <Gallery>
      <section className="bg-blue-50 p-4">
        <div className="container mx-auto">
          {images.length === 1 ? (
            <Item original={images[0]} thumbnail={images[0]} width="1000" height="600">
              {({ ref, open }) => (
                <Image
                  src={images[0]}
                  alt=""
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="object-cover h-[400px] mx-auto w-full rounded-xl"
                  priority={true}
                />
              )}
            </Item>
          ) : (
            <div className="grid grid-cols-2 gap-4">
              {images.map((image, i) => (
                <div
                  key={i}
                  className={`${
                    images.length === 3 && index === 2 ? "col-span-2" : "col-span-1"
                  }`}
                >
                  <Item original={image} thumbnail={image} width="" height="">
                    <Image
                      src={image}
                      className="object-cover h-[400px] w-full rounded-xl "
                      width={0}
                      height={0}
                      sizes="100vw"
                      alt=""
                      priority={true}
                    />
                  </Item>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </Gallery>
  )
}

export default PropertyImages
