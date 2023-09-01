import { readFile, writeFile } from "node:fs/promises";
import { cwd } from "node:process";

const root = cwd();
const enJsonPath = `${root}/lang/en.json`;
const zhJsonPath = `${root}/lang/zh.json`;
const enJson = JSON.parse(await readFile(enJsonPath));
const zhJson = JSON.parse(await readFile(zhJsonPath));
for (const key of Object.keys(enJson)) {
  if (!Object.hasOwn(zhJson, key)) zhJson[key] = enJson[key];
}
await writeFile(zhJsonPath, JSON.stringify(zhJson, null, 4));
