"use client";

import { useEffect, useRef } from "react";

const PAGE_TITLES = ["Don't", "you", "just", "hate", "popups?"];

const Intersection = () => {
  const ref = useRef<HTMLUListElement>(null);

  useEffect(() => {
    //callback: (entires: IntersectionObserverEntry[], observer: IntersectionObserver) => void
    // entries: IntersectionObserverEntry[]
    // observer: IntersectionObserver 인스턴스
    // options: IntersectionObserverInit

    if (!ref.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // 요소가 화면에 보이기 시작하면 클래스 추가
            entry.target.classList.add("opacity-100");
          } else {
            // 요소가 화면에서 벗어나면 클래스 제거
            entry.target.classList.remove("opacity-100");
          }
        });
      },
      {
        threshold: 0.4, // 40% 이상 보일 때 관찰 트리거
      }
    );

    // `li` 요소들을 관찰
    const listItems = ref.current.querySelectorAll("li");
    listItems.forEach((item) => observer.observe(item));

    // 컴포넌틀가 사라진때 관찰을 멈춘다.
    return () => {
      observer.disconnect();
    };
  }, []);
  return (
    <div className="pt-[300px]">
      <ul
        ref={ref}
        className="flex flex-col justify-center items-center gap-[100px] refList"
      >
        {PAGE_TITLES.map((title, index) => {
          return (
            <li
              className="w-[500px] h-[500px] flex justify-center items-center bg-blue-400 rounded-sm opacity-0 transition-all duration-500"
              key={index}
            >
              <div>{title}</div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Intersection;
