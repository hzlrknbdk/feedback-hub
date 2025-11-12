export default function FormEditPage({
  params,
}: {
  params: { formId: string };
}) {
  return (
    <div>
      <h1>Form #{params.formId} Düzenle</h1>
      <p>Form editor burada gösterilecek</p>
    </div>
  );
}
