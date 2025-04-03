import { PrismaClient } from '@prisma/client';
import data from './data.json';

const prisma = new PrismaClient();

async function main() {
  const users = new Map();

  for (const request of data.productRequests) {
    for (const comment of request.comments || []) {
      if (!users.has(comment.user.username)) {
        const user = await prisma.user.create({
          data: {
            image: comment.user.image,
            name: comment.user.name,
            username: comment.user.username
          }
        });

        users.set(comment.user.username, user.id);
        console.log(`User ${user.username} successfully created`);
      }

      for (const reply of comment.replies || []) {
        if (!users.has(reply.user.username)) {
          const user = await prisma.user.create({
            data: {
              image: reply.user.image,
              name: reply.user.name,
              username: reply.user.username
            }
          });

          users.set(reply.user.username, user.id);
          console.log(`User ${user.username} successfully created`);
        }
      }
    }
  }

  for (const request of data.productRequests) {
    const product = await prisma.productRequest.create({
      data: {
        title: request.title,
        category: request.category,
        upvotes: request.upvotes,
        status: request.status,
        description: request.description
      }
    });

    console.log(`Product succesfully created ${product.id}`);

    for (const comment of request.comments || []) {
      const createdComment = await prisma.comment.create({
        data: {
          content: comment.content,
          userId: users.get(comment.user.username),
          productId: product.id
        }
      });

      console.log(`Comment succesfully created ${createdComment.id}`);

      for (const reply of comment.replies || []) {
        await prisma.reply.create({
          data: {
            content: reply.content,
            replyingTo: reply.replyingTo,
            userId: users.get(reply.user.username),
            commentId: createdComment.id
          }
        });
      }

      console.log(`Comment replies succesfully created`);
    }
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
