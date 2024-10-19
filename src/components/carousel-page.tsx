'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Footer } from './footer'

const images = [ 
  "/images/oldDeck1.JPG",
  '/images/Deck.JPG',
  "/images/oldDeck2.WEBP",
  "/images/newDeck.png",
  "/images/oldFire1.WEBP",
  "/images/Fireplace.jpeg",
  "/images/oldCloset.WEBP",
  "/images/newCloset.jpg",
  '/images/Closet.JPEG',
  '/images/Bathroom.jpg',
  '/images/Portico.JPEG',
  "/images/OldK1.WEBP",
  "/images/Oldk2.WEBP", 
  '/images/image 21.png',
 
 
  

]

export function CarouselPage() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <main className="flex-grow flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-3xl">
        <h1 className="text-3xl font-bold text-center mb-8">Our Past Projects</h1>
        <div className="relative">
          <div className="overflow-hidden rounded-lg">
            <div
              className="flex transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {images.map((src, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <Image
                    src={src}
                    alt={`Carousel Image ${index + 1}`}
                    width={400}
                    height={400}
                    className=" w-full aspect-[4/3]"
                  />
                </div>
              ))}
            </div>
          </div>
          <Button
            variant="outline"
            size="icon"
            className="absolute top-1/2 left-4 transform -translate-y-1/2"
            onClick={prevSlide}
          >
            <ChevronLeftIcon className="h-6 w-6" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="absolute top-1/2 right-4 transform -translate-y-1/2"
            onClick={nextSlide}
          >
            <ChevronRightIcon className="h-6 w-6" />
          </Button>
        </div>
        <div className="flex justify-center mt-4">
          {images.map((_, index) => (
            <Button
              key={index}
              variant={currentIndex === index ? "default" : "outline"}
              size="sm"
              className="mx-1"
              onClick={() => setCurrentIndex(index)}
            >
              {index + 1}
            </Button>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link href="/" className="text-primary hover:underline">
            Back to Home
          </Link>
        </div>
      </div>
      </main>
      <Footer />
    </div>
  )
}