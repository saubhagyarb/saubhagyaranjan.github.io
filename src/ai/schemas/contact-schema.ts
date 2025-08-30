/**
 * @fileOverview Schemas for the contact flow.
 *
 * - ContactFlowInput - The input type for the contact function.
 * - ContactFlowOutput - The return type for the contact function.
 */

import {z} from 'genkit';

export const contactFlowInputSchema = z.object({
  name: z.string().describe('The name of the person sending the message.'),
  email: z.string().email().describe('The email of the person sending the message.'),
  message: z.string().describe('The message content.'),
});
export type ContactFlowInput = z.infer<typeof contactFlowInputSchema>;

export const contactFlowOutputSchema = z.object({
  success: z.boolean().describe('Whether the message was sent successfully.'),
  message: z.string().optional().describe('An optional message to return to the user.'),
});
export type ContactFlowOutput = z.infer<typeof contactFlowOutputSchema>;
