export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-white px-6 py-24">
      <div className="max-w-xl space-y-4 text-center sm:text-left">
        <h1 className="text-3xl font-semibold tracking-tight text-neutral-900">
          chatTelos
        </h1>
        <p className="text-base text-neutral-600">
          Explore the Antikythera-themed chat prototype at{" "}
          <a className="font-medium text-neutral-900 underline" href="/antikythera-chat">
            /antikythera-chat
          </a>
          .
        </p>
      </div>
    </main>
  );
}
