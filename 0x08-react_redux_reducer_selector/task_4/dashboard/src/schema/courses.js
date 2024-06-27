import { normalize, schema } from "normalizr";

const courseSchema = new schema.Entity("courses");

export default function coursesNormalizer(data) {
  const normalizedData = normalize(data, [courseSchema]);
  return normalizedData;
}
