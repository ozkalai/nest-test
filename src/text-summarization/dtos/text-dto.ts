import { MaxLength, MinLength } from 'class-validator';

export class TextDto {
  @MinLength(5)
  @MaxLength(1000)
  readonly text: string;
}
