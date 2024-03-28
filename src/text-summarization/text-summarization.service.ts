import { Injectable } from '@nestjs/common';
import { OpenAI } from 'openai';

@Injectable()
export class TextSummarizationService {
  private readonly openai: OpenAI;

  constructor() {
    this.openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY || '',
    });
  }

  async summarizeText(text: string): Promise<string> {
    try {
      const response = await this.openai.chat.completions.create({
        model: 'gpt-3.5-turbo',
        messages: [
          {
            role: 'system',
            content: 'Please generate a concise summary of the provided text:',
          },
          {
            role: 'user',
            content: text,
          },
        ],
      });

      return response.choices[0].message.content || '';
    } catch (error) {
      console.error('Error calling OpenAI API:', error);
      throw error;
    }
  }
}
