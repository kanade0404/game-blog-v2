import Link from "next/link";
import styles from "./categoryList.module.css";

type Props = {
  categories: {
    id: string;
    name?: string;
  }[];
};

const CategoryList = ({ categories }: Props) => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>カテゴリー</h2>
      <ul className={styles.list}>
        {categories.map((category) => (
          <li key={category.id} className={styles.item}>
            <Link href={`/category/${category.id}`} className={styles.link}>
              {category.name || 'カテゴリー'}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryList;
