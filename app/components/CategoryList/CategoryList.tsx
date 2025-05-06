"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./categoryList.module.css";

type Props = {
  categories: {
    id: string;
    name?: string;
  }[];
};

const CategoryList = ({ categories }: Props) => {
  const pathname = usePathname();
  const currentCategoryId = pathname.startsWith('/category/') 
    ? pathname.split('/')[2] 
    : null;

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>カテゴリー</h2>
      <div className="scrollContainer">
        <ul className={styles.list}>
          {categories.map((category) => {
            const isActive = category.id === currentCategoryId;
            return (
              <li 
                key={category.id} 
                className={`${styles.item} ${isActive ? 'active' : ''}`}
                id={isActive ? 'current-category' : undefined}
              >
                <Link 
                  href={`/category/${category.id}`} 
                  className={`${styles.link} ${isActive ? 'activeLink' : ''}`}
                >
                  {category.name || 'カテゴリー'}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default CategoryList;
