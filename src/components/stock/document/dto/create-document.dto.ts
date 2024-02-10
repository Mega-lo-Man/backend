import { IsString } from 'class-validator';

export class CreateDocumentDto {
  @IsString()
  name: string;
}
