import {
  formatFiles, Tree, updateJson
} from '@nrwl/devkit';
import { UpdateScopeSchemaGeneratorSchema } from './schema';

interface NormalizedSchema extends UpdateScopeSchemaGeneratorSchema {
  projectName: string;
  projectRoot: string;
  projectDirectory: string;
  parsedTags: string[];
}



export default async function (tree: Tree, options: UpdateScopeSchemaGeneratorSchema) {
  updateJson(tree, 'nx.json', (json) => ({
    ...json,
    defaultProject: 'api',
  }))


  await formatFiles(tree);
}
