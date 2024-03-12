import Image from "next/image"

const PropertyImages = ({ images }) => {
  return (
    <section className="bg-blue-50 p-4">
      <div className="container mx-auto">
        {images.length === 1 ? (
          <Image
            src={images[0]}
            alt=""
            width={0}
            height={0}
            sizes="100vw"
            className="object-cover h-[400px] mx-auto w-full rounded-xl"
            priority={true}
          />
        ) : (
          <div className="grid grid-cols-2 gap-4">
            {images.map((image, i) => (
              <div
                key={i}
                className={`${
                  images.length === 3 && index === 2 ? "col-span-2" : "col-span-1"
                }`}
              >
                <Image
                  src={image}
                  className="object-cover h-[400px] w-full rounded-xl "
                  width={0}
                  height={0}
                  sizes="100vw"
                  alt=""
                  priority={true}
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

export default PropertyImages