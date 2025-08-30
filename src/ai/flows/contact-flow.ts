'use server';
/**
 * @fileOverview A flow for handling contact form submissions and sending an email notification.
 *
 * - contact - A function that handles the contact form submission process.
 */
import 'dotenv/config';
import {ai} from '@/ai/genkit';
import {
  contactFlowInputSchema,
  contactFlowOutputSchema,
  type ContactFlowInput,
  type ContactFlowOutput,
} from '@/ai/schemas/contact-schema';
import * as nodemailer from 'nodemailer';

export async function contact(input: ContactFlowInput): Promise<ContactFlowOutput> {
  return await contactFlow(input);
}

// Configure Nodemailer transporter
const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: parseInt(process.env.EMAIL_PORT || "587"),
  secure: parseInt(process.env.EMAIL_PORT || "587") === 465, // true for 465, false for other ports
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

const contactFlow = ai.defineFlow(
  {
    name: 'contactFlow',
    inputSchema: contactFlowInputSchema,
    outputSchema: contactFlowOutputSchema,
  },
  async (input) => {
    const { name, email, message } = input;
    
    console.log(`New contact message from ${name} (${email}):`);
    console.log(message);

    try {
      const mailOptions = {
        from: `"${name}" <${process.env.EMAIL_FROM}>`,
        to: process.env.EMAIL_TO,
        subject: `Message from: ${name}`,
        text: `You have a new message from ${name} (${email}):\n\n${message}`,
        html: `<p>You have a new message from:</p>
               <ul>
                 <li><strong>Name:</strong> ${name}</li>
                 <li><strong>Email:</strong> ${email}</li>
               </ul>
               <p><strong>Message:</strong></p>
               <p>${message.replace(/\n/g, '<br>')}</p>`,
        replyTo: email
      };

      await transporter.sendMail(mailOptions);
      console.log('Email notification sent successfully.');
      return { success: true };

    } catch (error) {
      console.error('Failed to send email:', error);
      const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred.';
      return { success: false, message: `Failed to send email: ${errorMessage}` };
    }
  }
);
