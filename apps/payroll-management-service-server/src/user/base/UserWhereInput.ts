/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { Type } from "class-transformer";
import { IsOptional, ValidateNested, IsEnum } from "class-validator";
import { StringFilter } from "../../util/StringFilter";
import { PayrollListRelationFilter } from "../../payroll/base/PayrollListRelationFilter";
import { EnumUserRole } from "./EnumUserRole";
import { SalaryListRelationFilter } from "../../salary/base/SalaryListRelationFilter";

@InputType()
class UserWhereInput {
  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  email?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  firstName?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  fullName?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  id?: StringFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  lastName?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: () => PayrollListRelationFilter,
  })
  @ValidateNested()
  @Type(() => PayrollListRelationFilter)
  @IsOptional()
  @Field(() => PayrollListRelationFilter, {
    nullable: true,
  })
  payrolls?: PayrollListRelationFilter;

  @ApiProperty({
    required: false,
    enum: EnumUserRole,
  })
  @IsEnum(EnumUserRole)
  @IsOptional()
  @Field(() => EnumUserRole, {
    nullable: true,
  })
  role?: "Option1";

  @ApiProperty({
    required: false,
    type: () => SalaryListRelationFilter,
  })
  @ValidateNested()
  @Type(() => SalaryListRelationFilter)
  @IsOptional()
  @Field(() => SalaryListRelationFilter, {
    nullable: true,
  })
  salaries?: SalaryListRelationFilter;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  username?: StringFilter;
}

export { UserWhereInput as UserWhereInput };
