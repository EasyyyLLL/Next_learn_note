// src/app/dynamic3/[[...dynamic3]]/page.tsx
interface Params {
  params: {
    dynamic3: string;
  };
}
export default function Dynamic3({ params }: Params) {
  return (
    <div>
      <div>Dynamic3</div>
      <div>参数：{JSON.stringify(params)}</div>
    </div>
  );
}
