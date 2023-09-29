import Button from "../components/Button";

export default function NotFoundPage() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <h1 className="mb-3 font-bold text-3xl ">{"Not Found :("}</h1>

      <Button
        href="/"
        variant="yellow"
        className="font-bold py-4 px-14 rounded-2xl"
      >
        Link
      </Button>
    </div>
  );
}
