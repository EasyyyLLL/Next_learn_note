// src/app/dynamic3/page.tsx
interface Params {
  params: {
    dynamic3: string;
  };
}
export default function Dynamic3({ params }: Params) {
  return (
    <div>
      <h1>这里是 Dynamic3</h1>
    </div>
  );
}
