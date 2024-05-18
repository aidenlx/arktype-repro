import { type } from "arktype";

export const user = type({
  name: "string",
  device: {
    platform: "'android'|'ios'",
    "version?": "number",
  },
});

// Validators return typed data or clear, customizable errors.
export const out = user({
  name: "Alan Turing",
  device: {
    // errors.summary: "device/platform must be 'android' or 'ios' (was 'enigma')"
    platform: "enigma",
  },
});

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <pre>{JSON.stringify(out)}</pre>
    </main>
  );
}
