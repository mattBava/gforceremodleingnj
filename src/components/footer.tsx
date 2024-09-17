'use client'

export function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-600 py-4">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between items-center">
          <div className="w-full md:w-1/3 text-center md:text-left mb-4 md:mb-0">
            <h3 className="text-lg font-semibold">Contact Us</h3>
            <p>Phone: (908) 770-8176</p>
            <a href="mailto:AG@gforceremodelingnj.com">
            Email: gforceremodelingnj@gmail.com
        </a>
          </div>
          <div className="w-full md:w-1/3 text-center mb-4 md:mb-0">
            <p>&copy; G-Force Remodeling Nj, LLC. All rights reserved.</p>
          </div>
          <div className="w-full md:w-1/3 text-center md:text-right">
            <p>NJ Home Imporvement License #13VH13323100</p>
          </div>
        </div>
      </div>
    </footer>
  )
}