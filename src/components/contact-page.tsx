'use client'

import { ChangeEvent, useState } from 'react'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Footer } from './footer'

// Gathers information that is entered into the form
export function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    phone: '',
    email: '',
    projectDescription: ''
  })
  const [file, setFile] = useState<File | null>(null)

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prevData => ({ ...prevData, [name]: value }))
  } 
   const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0])
    }
  }

  //send results from submitted form to api email send
  const handleSubmit = async (e: any) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    console.log('File uploaded:', file)

    const response = await fetch("/api/send", {
      method: "POST",
      body : JSON.stringify(formData),
    })
    // Here you would typically send the data to your server
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <main className="flex-grow flex flex-col items-center justify-center p-4">
        <div className="w-full max-w-md">
          <h1 className="text-3xl font-bold text-center mb-8">Contact Us</h1>
          <p className='text-center text-xl pb-4'>Please fill out the form below and leave a discription of the project you want to get done and we will get back to you as soon as we can.</p>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <Label htmlFor="address">Address</Label>
              <Input
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <Label htmlFor="phone">Phone Number</Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <Label htmlFor="projectDescription">Project Description</Label>
              <Textarea
                id="projectDescription"
                name="projectDescription"
                value={formData.projectDescription}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <Label htmlFor="photo">Upload Photo</Label>
              <Input
                id="photo"
                name="photo"
                type="file"
                onChange={handleFileChange}
                accept="image/*"
                className="file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-primary file:text-primary-foreground hover:file:bg-primary/90"
              />
            </div>
            <Button type="submit" className="w-full">Submit</Button>
          </form>
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