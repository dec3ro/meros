import { useState } from 'react'
import { Keyboard, Scrollbar, Pagination, Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/navigation'

import '../../styles/custom.css'

const Star = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="size-6"
    >
      <path
        fillRule="evenodd"
        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
        clipRule="evenodd"
      ></path>
    </svg>
  )
}

export const Comment = () => {
  const [comments, setComments] = useState([
    {
      name: 'Daneial Granados Fernandez',
      image:
        '/dani.jpg',
      email: 'dagrafer7@gmail.com',
      message:
        'Me gustó mucho la comida, en especial los tacos. La atención es muy buena y, qué decir del ambiente, es mejor aún. Recomendado totalmente.',
      date: '18/06/24',
      rating: 5
    },
    {
      name: 'Jose Rojas Chanchari',
      image:
        'https://www.shutterstock.com/shutterstock/photos/1760295569/display_1500/stock-vector-profile-picture-avatar-icon-vector-1760295569.jpg',
      email: 'jose_ar@gmail.com',
      message:
        'La comida es deliciosa, especialmente los gringas y los tamalitos. La atención fue excelente. Además, el ambiente es muy acogedor y alegre, con música mexicana que le da un toque especial, sentí como si estuviera en Mexico.',
      date: '21/06/24',
      rating: 4.5
    },
    // {
    //   name: 'Fulanito Smith',
    //   image:
    //     'https://hackspirit.com/wp-content/uploads/2021/06/Copy-of-Rustic-Female-Teen-Magazine-Cover.jpg',
    //   email: 'fulatino_tu_terror@gmail.com',
    //   message:
    //     'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec aliquet sapien varius fermentum imperdiet. Vivamus ultricies mattis leo quis convallis. Cras tristique facilisis eros, et blandit magna suscipit ac. Maecenas congue laoreet diam.',
    //   date: '08/03/24',
    //   rating: 4
    // }
  ])

  const chunkArray = (array, size) => {
    const chunkedArray = []
    for (let i = 0; i < array.length; i += size) {
      chunkedArray.push(array.slice(i, i + size))
    }
    return chunkedArray
  }

  return (
    <>
      <h1
        className="font-Bernier mb-5 merost_title text-[80px] leading-[70px] text-center md:text-[90px]"
        id="comentarios"
      >
        OPINIONES DE NUESTROS COMPAS
      </h1>
      <div className="md:max-w-[1400px] w-full">
        <div className="">
          <Swiper
            centeredSlides={false}
            spaceBetween={10}
            grabCursor={true}
            breakpoints={{
              1024: {
                slidesPerView: 1,
                spaceBetween: 10
              },
              320: {
                slidesPerView: 1,
                spaceBetween: 5
              }
            }}
            navigation={true}
            pagination={{
              clickable: true
            }}
            className="w-full"
            modules={[Keyboard, Scrollbar, Pagination, Navigation]}
          >
            {comments.map((comment, index) => (
              <SwiperSlide key={index} className="">
                <div className="border p-6 rounded-lg md:w-[650px] w-[400px] h-[280px] md:h-[280px] flex flex-col shadow-lg relative bg-pink-lady-200/80">
                  <span className="absolute bottom-4 right-6 text-[15px] text-gray-600">
                    {comment.date}
                  </span>
                  <div className="flex justify-between items-center font-Edmund">
                    <div className="flex justify-start items-center md:gap-4 gap-2">
                      <img
                        src={comment.image}
                        alt=""
                        className="md:max-w-[60px] max-w-[45px] md:min-w-[60px] min-w-[45px] md:min-h-[60px] min-h-[45px] md:max-h-[60px] max-h-[45px] rounded-full"
                      />
                      <div className="flex justify-start items-start flex-col">
                        <span className="font-semibold">{comment.name}</span>
                        <span className="text-sm">{comment.email}</span>
                      </div>
                    </div>
                    <div className="flex justify-center items-center gap-1 text-yellow-400">
                      <span className="text-xl mt-[2px] font-bold">
                        {comment.rating}
                      </span>
                      <Star />
                    </div>
                  </div>
                  <div className="text-start h-full flex justify-center items-center">
                    <p className="italic font-Codec font-semibold text-gray-600 text-pretty text-sm md:text-base">
                      "{comment.message}"
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  )
}
