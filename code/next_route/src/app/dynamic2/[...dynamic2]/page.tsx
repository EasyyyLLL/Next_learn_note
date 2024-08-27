// src/app/dynamic2/[...dynamic2]/page.tsx
interface Params {
  params: {
    dynamic2: string;
  };
}
export default function Dynamic({ params }: Params) {
  return (
    <div>
      <div>Dynamic2</div>
      <div>参数：{JSON.stringify(params)}</div>
    </div>
  );
}
