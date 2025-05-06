"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
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
  const [currentCategoryId, setCurrentCategoryId] = useState<string | null>(null);
  
  useEffect(() => {
    if (pathname.startsWith('/category/')) {
      const categoryId = pathname.split('/')[2];
      setCurrentCategoryId(categoryId);
    } else {
      setCurrentCategoryId(null);
    }
  }, [pathname]);

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>カテゴリー</h2>
      <div className={styles.scrollContainer}>
        <ul className={styles.list}>
          {categories.map((category) => {
            const isActive = category.id === currentCategoryId;
            return (
              <li 
                key={category.id} 
                className={`${styles.item} ${isActive ? styles.active : ''}`}
                id={isActive ? 'current-category' : undefined}
              >
                <Link 
                  href={`/category/${category.id}`} 
                  className={`${styles.link} ${isActive ? styles.activeLink : ''}`}
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
