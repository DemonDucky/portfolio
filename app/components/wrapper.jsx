export default function Wrapper({ children, className }) {
  return <div className={`mx-6 my-2 ${className}`}>{children}</div>
}
