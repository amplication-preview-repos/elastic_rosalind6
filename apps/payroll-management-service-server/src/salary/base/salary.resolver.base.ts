/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { Salary } from "./Salary";
import { SalaryCountArgs } from "./SalaryCountArgs";
import { SalaryFindManyArgs } from "./SalaryFindManyArgs";
import { SalaryFindUniqueArgs } from "./SalaryFindUniqueArgs";
import { CreateSalaryArgs } from "./CreateSalaryArgs";
import { UpdateSalaryArgs } from "./UpdateSalaryArgs";
import { DeleteSalaryArgs } from "./DeleteSalaryArgs";
import { User } from "../../user/base/User";
import { SalaryService } from "../salary.service";
@graphql.Resolver(() => Salary)
export class SalaryResolverBase {
  constructor(protected readonly service: SalaryService) {}

  async _salariesMeta(
    @graphql.Args() args: SalaryCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Salary])
  async salaries(@graphql.Args() args: SalaryFindManyArgs): Promise<Salary[]> {
    return this.service.salaries(args);
  }

  @graphql.Query(() => Salary, { nullable: true })
  async salary(
    @graphql.Args() args: SalaryFindUniqueArgs
  ): Promise<Salary | null> {
    const result = await this.service.salary(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Salary)
  async createSalary(@graphql.Args() args: CreateSalaryArgs): Promise<Salary> {
    return await this.service.createSalary({
      ...args,
      data: {
        ...args.data,

        user: args.data.user
          ? {
              connect: args.data.user,
            }
          : undefined,
      },
    });
  }

  @graphql.Mutation(() => Salary)
  async updateSalary(
    @graphql.Args() args: UpdateSalaryArgs
  ): Promise<Salary | null> {
    try {
      return await this.service.updateSalary({
        ...args,
        data: {
          ...args.data,

          user: args.data.user
            ? {
                connect: args.data.user,
              }
            : undefined,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Salary)
  async deleteSalary(
    @graphql.Args() args: DeleteSalaryArgs
  ): Promise<Salary | null> {
    try {
      return await this.service.deleteSalary(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => User, {
    nullable: true,
    name: "user",
  })
  async getUser(@graphql.Parent() parent: Salary): Promise<User | null> {
    const result = await this.service.getUser(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
