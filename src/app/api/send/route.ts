import { EmailTemplate } from '@/components/email-template';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
    console.log(request)
  try {
    const body = await request.json();
    console.log(body)
    const{address, email, name, phone, projectDescription} = body
    const { data, error } = await resend.emails.send({
      from: 'Adam <adam@gforceremodelingnj.com>',
      to: "matthew.bava@gmail.com",
      subject: 'A new quote request from ' + name,
      react: EmailTemplate({ firstName: name , Address: address , Phone: phone , Email : email, Project: projectDescription}),
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}