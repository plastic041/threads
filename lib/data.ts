import { faker } from "@faker-js/faker";
import { nanoid } from "nanoid";
import { readFile } from "fs/promises";

class Data {
  static post(number: number): Post {
    return {
      id: nanoid(),
      number,
      userId: nanoid(),
      body: faker.lorem.paragraph(),
      createdAt: faker.date.recent().toISOString(),
    };
  }

  static thread(length: number): Thread {
    const posts = Array.from({ length }, (_, i) => Data.post(i + 1));
    return {
      id: nanoid(),
      posts,
      title: faker.lorem.sentence(),
    };
  }
}

export const fetchData = async () => {
  const filePath = "./resources/data.json";
  const file = await readFile(filePath, "utf-8");
  const data: {
    threads: Thread[];
  } = JSON.parse(file);
  return data;
};

export default Data;