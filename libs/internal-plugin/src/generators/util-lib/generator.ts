import { formatFiles, Tree } from '@nrwl/devkit';
import { libraryGenerator } from '@nrwl/workspace/generators';
import { UtilLibGeneratorSchema } from './schema';

export default async function (tree: Tree, options: UtilLibGeneratorSchema) {
  await libraryGenerator(tree, {
    ...options,
    name: `util-${options.name}`,
    tags: `${options.tags},type:util`
  });
  await formatFiles(tree);
}
