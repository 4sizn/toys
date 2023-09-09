import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class FeedsService {
  constructor(private prisma: PrismaService) {}

  async create(data: Prisma.FeedCreateInput) {
    return this.prisma.feed.create({
      data,
    });
  }

  async feed(feedWhereUniqueInput: Prisma.FeedWhereUniqueInput) {
    return this.prisma.feed.findUnique({
      where: feedWhereUniqueInput,
    });
  }

  async feeds(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.FeedWhereUniqueInput;
    where?: Prisma.FeedWhereInput;
    orderBy?: Prisma.FeedOrderByWithRelationInput;
  }) {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.feed.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  async updateFeed(params: {
    where: Prisma.FeedWhereUniqueInput;
    data: Prisma.FeedUpdateInput;
  }) {
    const { where, data } = params;
    return this.prisma.feed.update({
      data,
      where,
    });
  }

  async deleteFeed(where: Prisma.FeedWhereUniqueInput) {
    return this.prisma.feed.delete({
      where,
    });
  }
}
