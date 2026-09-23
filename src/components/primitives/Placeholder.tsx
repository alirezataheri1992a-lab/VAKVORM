/**
 * Marks content that still has to be supplied or confirmed (a KvK number, the name of a
 * certification, warranty terms). Rendered visibly — a dashed bronze frame — so nothing
 * reads as a claim before it is true. Search the code for `<Placeholder` to find them all.
 */
export function Placeholder({ children }: { children: React.ReactNode }) {
  return (
    <span className="ph" title="Nog in te vullen">
      {children}
    </span>
  );
}
