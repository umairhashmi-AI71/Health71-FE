export  const formatDate = (value: string) =>{
  const date = new Date(value);
  return date.toLocaleDateString("en-CA", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
};
