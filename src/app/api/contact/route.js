import nodemailer from 'nodemailer';
import { NextResponse} from 'next/server';


export  async function POST(request) {
  console.log('API endpoint called');
  const body = await request.json()
  console.log(body)
    const { name, email, message } = body;
    console.log(name)
    

    // Create a transporter using your email configuration
    const transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: process.env.EMAIL_ADDRESS,
        pass: process.env.PASSWORD,
      },
    });

    // Configure the email options
    const mailOptions = {
      from: "personalwebsite@dev.com",
      replyTo: email,
      to: 'koyuncusinan1@gmail.com',
      subject: `New message from ${name}`,
      text: message,
    };

    try {
      // Send theemail
      await transporter.sendMail(mailOptions);
      return NextResponse.json({ message: 'Email sent successfully' },{status:200});
    } catch (error) {
      console.error(error);
      NextResponse.json({ message: 'Failed to send email' },{status:500});
    }
  } 