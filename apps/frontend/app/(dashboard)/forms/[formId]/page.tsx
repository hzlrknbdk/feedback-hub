export default function FormDetailPage({
  params,
}: {
  params: { formId: string };
}) {
  return (
    <div>
      <h1>Form #{params.formId}</h1>
      <p>Form preview burada gösterilecek</p>
    </div>
  );
}
