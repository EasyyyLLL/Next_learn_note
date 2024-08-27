interface Params {
  params: {
    dynamic3: string;
  };
}
export default function Dynamic({ params }: Params) {
  return (
    <div>
      <div>Dynamic3</div>
      <div>参数：{JSON.stringify(params)}</div>
    </div>
  );
}
