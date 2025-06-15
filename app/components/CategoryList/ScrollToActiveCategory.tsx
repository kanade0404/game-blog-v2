"use client";

import { useEffect } from "react";

const ScrollToActiveCategory = () => {
	useEffect(() => {
		const activeCategory = document.getElementById("current-category");
		if (activeCategory) {
			requestAnimationFrame(() => {
				const container = activeCategory.closest(".scrollContainer");
				if (container) {
					const containerRect = container.getBoundingClientRect();
					const activeRect = activeCategory.getBoundingClientRect();
					const scrollLeft =
						activeRect.left -
						containerRect.left -
						containerRect.width / 2 +
						activeRect.width / 2;

					container.scrollLeft = scrollLeft;
				}
			});
		}
	}, []);

	return null;
};

export default ScrollToActiveCategory;
