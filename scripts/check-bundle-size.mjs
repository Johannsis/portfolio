import { readdirSync, statSync } from 'node:fs';
import { join } from 'node:path';

const JS_BUNDLE_TOTAL_LIMIT_BYTES = 700 * 1024;
const LARGEST_CHUNK_LIMIT_BYTES = 250 * 1024;
const chunksDirectory = 'out/_next/static/chunks';

function getFilePaths(directoryPath) {
  const directoryEntries = readdirSync(directoryPath, { withFileTypes: true });
  const filePaths = [];

  for (const directoryEntry of directoryEntries) {
    const entryPath = join(directoryPath, directoryEntry.name);

    if (directoryEntry.isDirectory()) {
      filePaths.push(...getFilePaths(entryPath));
      continue;
    }

    filePaths.push(entryPath);
  }

  return filePaths;
}

const javascriptBundles = getFilePaths(chunksDirectory).filter((filePath) =>
  filePath.endsWith('.js'),
);

const bundleSizes = javascriptBundles.map((filePath) => ({
  filePath,
  sizeInBytes: statSync(filePath).size,
}));

const totalBundleSizeInBytes = bundleSizes.reduce(
  (totalSize, bundle) => totalSize + bundle.sizeInBytes,
  0,
);

const largestBundle = bundleSizes.reduce((largest, current) =>
  current.sizeInBytes > largest.sizeInBytes ? current : largest,
);

if (totalBundleSizeInBytes > JS_BUNDLE_TOTAL_LIMIT_BYTES) {
  console.error(
    `Total JavaScript bundle size is ${(totalBundleSizeInBytes / 1024).toFixed(2)}KB, which exceeds ${(JS_BUNDLE_TOTAL_LIMIT_BYTES / 1024).toFixed(2)}KB.`,
  );
  process.exit(1);
}

if (largestBundle.sizeInBytes > LARGEST_CHUNK_LIMIT_BYTES) {
  console.error(
    `Largest JavaScript chunk (${largestBundle.filePath}) is ${(largestBundle.sizeInBytes / 1024).toFixed(2)}KB, which exceeds ${(LARGEST_CHUNK_LIMIT_BYTES / 1024).toFixed(2)}KB.`,
  );
  process.exit(1);
}

console.log(
  `Bundle size check passed. Total JS: ${(totalBundleSizeInBytes / 1024).toFixed(2)}KB (${javascriptBundles.length} files). Largest chunk: ${(largestBundle.sizeInBytes / 1024).toFixed(2)}KB (${largestBundle.filePath}).`,
);
