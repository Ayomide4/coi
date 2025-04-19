export default function Head({ params }: { params: { page: string } }) {
  const pageNum = params.page;
  return (
    <>
      <title>Gallery — Page {pageNum}</title>
      <meta name="description" content={`Browse page ${pageNum} of our Circle of Intimacy gallery.`} />
    </>
  );
}
