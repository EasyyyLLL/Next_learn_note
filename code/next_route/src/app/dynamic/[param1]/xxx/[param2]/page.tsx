// src/app/dynamic/[param1]/xxx/[param2]/page.tsx
interface Params {
  params: {
    param1: string;
    param2: string;
  };
}
export default function Dynamic({ params }: Params) {
  return (
    <div>
      <div>Dynamic</div>
      <div>参数：{JSON.stringify(params)}</div>
    </div>
  );
}
