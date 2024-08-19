import { createResource, createSignal, Suspense } from "solid-js";

async function postFormData(formData: FormData) {
  const response = await fetch("/api/contact", {
    method: "POST",
    body: formData,
  });
  const data = await response.json();
  return data;
}

const ContactForm = () => {
  const [formData, setFormData] = createSignal<FormData>();
  const [response] = createResource(formData, postFormData);

  function submit(e: SubmitEvent) {
    e.preventDefault();
    console.log("form submitted");
    setFormData(new FormData(e.target as HTMLFormElement));
  }

  return (
    <form onsubmit={(e) => submit(e)} class="flex-1">
      <div class="mb-4">
        <label for="name" class="block text-secondary-200 mb-2">
          Name
        </label>
        <input
          type="text"
          id="name"
          placeholder="type your name"
          name="name"
          class="w-full px-4 py-2 bg-secondary-700 text-secondary-50 border border-secondary-600 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary-400"
        />
      </div>
      <div class="mb-4">
        <label for="email" class="block text-secondary-200 mb-2">
          Email
        </label>
        <input
          type="email"
          placeholder="type your email"
          id="email"
          name="email"
          class="w-full px-4 py-2 bg-secondary-700 text-secondary-50 border border-secondary-600 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary-400"
        />
      </div>
      <div class="mb-4">
        <label for="message" class="block text-secondary-200 mb-2">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          placeholder="describe here your project!"
          rows="4"
          class="w-full px-4 py-2 bg-secondary-700 text-secondary-50 border border-secondary-600 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary-400"
        />
      </div>
      <div class="flex items-center justify-between">
        <button class="px-4 py-2 bg-secondary-600 text-secondary-50 rounded-md hover:bg-secondary-500 focus:outline-none focus:ring-2 focus:ring-secondary-400">
          Contact us
        </button>
      </div>
      <Suspense>{response() && <div>{response().message}</div>}</Suspense>
    </form>
  );
};

export default ContactForm;
