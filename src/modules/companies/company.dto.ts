export class CompanyCreateDto {
  readonly name: string;
  readonly description: string;
}

export class CompanyUpdateDto {
  readonly name: string;
  readonly description: string;
}

export class CompanyResponseDto {
  readonly id?: number;
  readonly name: string;
  readonly description: string;
}