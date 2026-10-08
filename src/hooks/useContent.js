import {useMemo, useState} from "react";
import {loadContent, saveContent} from "../lib/storage";

export function useManagedCollection(key, fallback) {
  const initial = useMemo(() => loadContent()[key] ?? fallback, [key, fallback]);
  const [items,setItems] = useState(initial);
  function update(next) {
    setItems(next);
    const all = loadContent();
    all[key] = next;
    saveContent(all);
  }
  return [items, update];
}
