export default function debounce(func: () => void, delay: number = 300) {
  let timer: NodeJS.Timeout;

  return () => {
    clearTimeout(timer);
    timer = setTimeout(func, delay);
  };
}
