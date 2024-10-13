
import Image from 'next/image'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Footer } from './footer'

export function HomePageComponent() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <main className="flex-grow flex flex-col items-center justify-center p-4">
        <div className="w-full max-w-md">
          <div className="mb-8 flex justify-center">
            <Image
              src="/images/Gforcelogo.png"
              alt="Centered Image"
              width={400}
              height={400}

            />
          </div>
          <h1 className="text-2xl font-bold text-center mb-4">Get Started on your remodeling project today.</h1>
          <p className="text-center mb-8">
            Contact us for a free quote.
          </p>
          <div className="flex flex-col space-y-4">
            <Link href="/services" passHref>
              <Button className="w-full">Services</Button>
            </Link>
            <Link href="/carousel" passHref>
              <Button className="w-full">Projects</Button>
            </Link>
            <Link href="/contact" passHref>
              <Button className="w-full">Contact</Button>
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}