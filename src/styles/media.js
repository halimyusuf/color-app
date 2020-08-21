export const down = (size) => {
  const sizes = {
    xs: '570px',
    sm: '760px',
    md: '1000px',
    lg: '1200px',
  };
  return `@media (max-width: ${sizes[size]})`;
};

export const up = (size) => {
  const sizes = {
    xs: '570px',
    sm: '760px',
    md: '1000px',
    lg: '1200px',
  };
  return `@media (min-width: ${sizes[size]})`;
};
