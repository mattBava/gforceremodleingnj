
import Image from 'next/image'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Footer } from './footer'

const services = [
  {
    title: "Bathrooms",
    description: "We specialize in transforming bathrooms into functional and stylish spaces. Whether it's a full remodel or a simple update, our expert team ensures high-quality craftsmanship, timely service, and attention to detail. From custom tile work to modern fixtures, we bring your vision to life with a commitment to excellence and customer satisfaction.",
    image: "/images/Bathroom.jpg?height=300&width=400"
  },
  {
    title: "Decks",
    description: "Enhance your outdoor living space with custom decks from G-Force Remodling NJ. Our skilled team designs and builds durable, beautiful decks tailored to your style and needs, perfect for relaxing or entertaining. We focus on quality materials, craftsmanship, and a seamless build process to ensure your deck is a space you'll enjoy for years.",
    image: "/images/Deck.JPG?height=300&width=400"
  }, 
  {
    title: "Floor Paneling",
    description: "Upgrade your home’s look and feel with expertly installed floor paneling. Whether you're looking for hardwood, laminate, or vinyl, we offer a wide selection of high-quality materials to suit any style. Our professional installation ensures a seamless, long-lasting finish that enhances the beauty and value of your home",
    image: "/images/Floor.JPEG?height=300&width=400"
  },
  {
    title: "Kitchens",
    description: "We create kitchens that blend functionality with stunning design. From cabinetry and countertops to flooring and fixtures, we handle every aspect of your kitchen remodel with precision and care. Whether you're updating or starting fresh, we work with you to bring your dream kitchen to life.",
    image: "/images/image 21.png?height=300&width=400"
  },
  {
    title: "Porticos",
    description: "Add elegance and curb appeal to your home with a custom-built portico. Our team designs beautiful, weather-resistant porticos that provide both style and protection for your entryway. With a focus on detail and quality craftsmanship, we ensure your new portico enhances the beauty and value of your home.",
    image: "/images/Portico.JPEG?height=300&width=400"
  },
  {
    title: "Firepalces",
    description: "Bring new life to your fireplace with a fireplace refinishing. Whether it's a modern update or restoring its classic charm, we revitalize your fireplace with custom materials and expert craftsmanship. From stone and brickwork to sleek new finishes, we ensure your fireplace becomes a stunning focal point in your home.",
    image: "/images/Fireplace.jpeg?height=300&width=400"
  }
]

export function ServicesPageComponent() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <main className="flex-grow p-4 md:p-8">
        <h1 className="text-3xl font-bold text-center mb-8">Our Services</h1>
        <p className=" mb-4 text-center p-4">If you are looking to get something done that isn't listed below dont worry. Just give us a call or fill out our contact form and we will give you a quote on any project</p>
        <div className="grid gap-8 md:grid-cols-2">
          {services.map((service, index) => (
            <div key={index} className="flex flex-col md:flex-row bg-card rounded-lg overflow-hidden shadow-md">
              <div className="md:w-1/2">
                <Image
                  src={service.image}
                  alt={service.title}
                  width={400}
                  height={300}
                  className="w-full aspect-[4/3] object-cover"
                />
              </div>
              <div className="p-4 md:w-1/2">
                <h2 className="text-xl font-semibold mb-2">{service.title}</h2>
                <p className="text-muted-foreground mb-4">{service.description}</p>
                <Link href="/contact" passHref>
              <Button variant="outline">Get a Quote</Button>
            </Link>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link href="/" className="text-primary hover:underline">
            Back to Home
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  )
}