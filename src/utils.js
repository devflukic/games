import { useEffect } from "react";

export function normalizeArray(array, prop) {
  return array.reduce(
    (acc, el) => {
      const a = acc;
      a.byIds[el[prop]] = el;
      a.allIds.push(el[prop]);
      return a;
    },
    {
      byIds: {},
      allIds: []
    }
  );
}

export const useOutsideClick = (ref, callback) => {
  const handleClick = e => {
    if (ref.current && !ref.current.contains(e.target)) {
      callback();
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  });
};
