export function AddTag(props: { children: React.Component | string }) {
  return (
    <div>
      Tag
      {props.children}
    </div>
  );
}
