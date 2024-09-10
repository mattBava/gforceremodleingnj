'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { ChevronDownIcon } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Footer } from './footer'

export function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <main className="flex-grow flex flex-col items-center justify-center p-4">
        <div className="w-full max-w-md">
          <div className="mb-8 flex justify-center">
            <Image
              src="/images/Gforcelogo.png"
              alt="Centered Image"
              width={500}
              height={500}
              
            />
          </div>
          <h1 className="text-2xl font-bold text-center mb-4">Welcome to Our Website</h1>
          <p className="text-center mb-8">
            Discover amazing content and features tailored just for you.
          </p>
          <div className="w-full">
            <Button
              onClick={toggleMenu}
              className="w-full flex justify-between items-center"
              variant="outline"
            >
              <span>Explore Menu</span>
              <ChevronDownIcon
                className={`h-4 w-4 transition-transform ${isMenuOpen ? 'rotate-180' : ''}`}
              />
            </Button>
            {isMenuOpen && (
              <nav className="mt-2 bg-card rounded-md shadow-md">
                <ul className="py-2">
                  <li>
                    <Link href="/" className="block px-4 py-2 hover:bg-accent hover:text-accent-foreground transition-colors">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link href="/carousel" className="block px-4 py-2 hover:bg-accent hover:text-accent-foreground transition-colors">
                      Photo Carousel
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact" className="block px-4 py-2 hover:bg-accent hover:text-accent-foreground transition-colors">
                      Contact
                    </Link>
                  </li>
                  {['About', 'Services'].map((item) => (
                    <li key={item}>
                      <a
                        href="#"
                        className="block px-4 py-2 hover:bg-accent hover:text-accent-foreground transition-colors"
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}