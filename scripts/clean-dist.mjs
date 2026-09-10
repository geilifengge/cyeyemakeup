import { existsSync, readdirSync, rmdirSync, unlinkSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const projectDir = fileURLToPath(new URL("../", import.meta.url));
const distDir = resolve(projectDir, "dist");

if (dirname(distDir) !== resolve(projectDir)) throw new Error("Refusing to clean outside the project directory");

function removeTree(target) {
  if (!existsSync(target)) return;
  for (const entry of readdirSync(target, { withFileTypes: true })) {
    const child = resolve(target, entry.name);
    if (entry.isDirectory()) removeTree(child);
    else if (entry.isFile()) unlinkSync(child);
    else throw new Error(`Unexpected build output entry: ${child}`);
  }
  rmdirSync(target);
}

removeTree(distDir);
